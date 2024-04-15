"use client"
import {
  Menu,
  useDisclosure,
  MenuButton,
  Button,
  HStack,
  MenuList,
  MenuItem,
  Text,
  Link,
} from "@yamada-ui/react"
import { memo } from "react"
import { AnimatedTriangle } from "./animated-triangle"
import { nested } from "./use-nested"
import { BlogIcon } from "components/icons/blog"
import { CubesIcon } from "components/icons/cubes"
import { DropboxIcon } from "components/icons/socials/dropbox"
import { getDictionary } from "lib/dictionaries"

export type DropdownProps = {
  items: {
    href: string
    text: string
    icon: JSX.Element
  }[]
}

export const Dropdown = memo(
  ({ name, locale }: { name: string; locale: string }) => {
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
          title={header[name as keyof typeof header] as string}
          leftIcon={
            name === "blog" ? (
              <BlogIcon color={["black", "white"]} />
            ) : name === "apps" ? (
              <CubesIcon color={["black", "white"]} />
            ) : (
              <DropboxIcon color={["black", "white"]} />
            )
          }
          rightIcon={<AnimatedTriangle isOpen={isOpen} />}
        >
          {name === "blog"
            ? header.blog
            : name === "apps"
              ? header.apps
              : header.social}
        </MenuButton>
        <MenuList>
          {items.map((item) => (
            <MenuItem key={item.href} title={item.text}>
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
  },
)

Dropdown.displayName = "Dropdown"
