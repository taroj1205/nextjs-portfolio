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
import { nested } from "./useNested"
import { usePathname } from "@/lib/next-intl"

export type DropdownProps = {
  items: {
    href: string
    text: string
    icon: JSX.Element
    description: string
  }[]
}

export const Dropdown = memo(({ name }: { name: string }) => {
  const pathname = usePathname()
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
    >
      <MenuButton
        as={Button}
        onClick={onOpen}
        data-active={pathname.startsWith(items[0].href.toString())}
        w="fit"
        variant="unstyled"
      >
        <HStack gap={1.5} flexWrap="nowrap">
          {name === "blog" ? (
            <>
              <Icon icon={faBlog} />
              <Text as="span" fontWeight="normal">
                {t("blog")}
              </Text>
            </>
          ) : name === "apps" ? (
            <>
              <Icon icon={faCubes} />
              <Text as="span" fontWeight="normal">
                {t("apps")}
              </Text>
            </>
          ) : (
            <>
              <Icon icon={faDropbox} />
              <Text as="span" fontWeight="normal">
                {t("social")}
              </Text>
            </>
          )}
          <Box
            p="5px"
            pt="6px"
            transform="rotate(90deg) scale(0.7)"
            _before={{
              content: "''",
              position: "absolute",
              right: 0,
              width: "10px",
              height: "2px",
              transition: "all 0.3s ease-in-out",
              backgroundColor: ["white", "black"],
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
              transition: "all 0.3s ease-in-out",
              backgroundColor: ["white", "black"],
              transform: isOpen
                ? "translateY(-3px) rotate(-45deg)"
                : "translateY(3px) rotate(-45deg)",
            }}
          />
        </HStack>
      </MenuButton>
      <MenuList className="absolute w-fit z-10 left-0 min-w-[10rem] rounded-md ring-1 ring-black ring-opacity-5">
        {items.map((item) => (
          <MenuItem key={item.href}>
            <Link
              as={HStack}
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
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
})

Dropdown.displayName = "Dropdown"
