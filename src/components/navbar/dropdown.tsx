"use client"
import {
  Menu,
  useDisclosure,
  MenuButton,
  Button,
  HStack,
  Box,
  MenuList,
  MenuItem,
  Text,
  Link,
} from "@yamada-ui/react"
import { memo } from "react"
import { nested } from "./use-nested"
import { BlogIcon, CubesIcon, DropboxIcon } from "components/icons"
import { getDictionary } from "lib/dictionaries"

export type DropdownProps = {
  items: {
    href: string
    text: string
    icon: JSX.Element
  }[]
}

export const Dropdown = memo(({
  name,
  locale,
}: {
  name: string
  locale: string
}) => {
  const { header } = getDictionary(locale)
  const items = nested({ name, locale }) as DropdownProps["items"]

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Menu
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      closeOnSelect
      closeOnEsc
      isLazy
      lazyBehavior="unmount"
    >
      <MenuButton
        as={Button}
        onClick={onOpen}
        variant="ghost"
        color={["black", "white"]}
        fontWeight="normal"
        leftIcon={
          name === "blog" ? (
            <BlogIcon color={["black", "white"]} />
          ) : name === "apps" ? (
            <CubesIcon color={["black", "white"]} />
          ) : (
            <DropboxIcon color={["black", "white"]} />
          )
        }
        rightIcon={
          <Box
            h="2"
            w="2"
            transform="rotate(90deg) scale(0.7)"
            className="white-bg-on-dark-before-after"
            _before={{
              content: "''",
              position: "absolute",
              right: 0,
              width: "10px",
              height: "2px",
              transition: "transform 0.3s ease-in-out",
              transform: isOpen
                ? "translateY(3px) rotate(45deg)"
                : "translateY(-3px) rotate(45deg)",
            }}
            _after={{
              content: "''",
              position: "absolute",
              right: 0,
              width: "10px",
              height: "2px",
              transition: "transform 0.3s ease-in-out",
              transform: isOpen
                ? "translateY(-3px) rotate(-45deg)"
                : "translateY(3px) rotate(-45deg)",
            }}
          />
        }
      >
        {name === "blog"
          ? header.blog
          : name === "apps"
            ? header.apps
            : header.social}
      </MenuButton>
      <MenuList>
        {items.map((item) => (
          <MenuItem key={item.href}>
            <HStack
              as={Link}
              href={item.href}
              color={["black", "white"]}
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              gap={2}
            >
              {item.icon}
              <Text as="span" whiteSpace="nowrap">
                {item.text}
              </Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
})

Dropdown.displayName = "Dropdown"