"use client"
import { faDropbox } from "@fortawesome/free-brands-svg-icons"
import { faBlog, faCubes } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
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
import { useTranslations } from "next-intl"
import { memo } from "react"
import { nested } from "./use-nested"

export type DropdownProps = {
  items: {
    href: string
    text: string
    icon: JSX.Element
    description: string
  }[]
}

export const Dropdown = memo(({ name }: { name: string }) => {
  const t = useTranslations("header")

  const items = nested(name) as DropdownProps["items"]

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
            <Icon icon={faBlog} />
          ) : name === "apps" ? (
            <Icon icon={faCubes} />
          ) : (
            <Icon icon={faDropbox} />
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
          ? t("blog")
          : name === "apps"
            ? t("apps")
            : t("social")}
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
