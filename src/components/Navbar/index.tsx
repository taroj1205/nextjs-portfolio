"use client"
import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
  useDisclosure,
} from "@yamada-ui/react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { memo } from "react"
import type { DropdownProps } from "./Dropdown";
import { Dropdown } from "./Dropdown"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { nested } from "./useNested"
import { SectionDivider } from "@/components/Dividers"
import { LangToggle } from "@/components/Language"
import { Link } from "@/lib/next-intl"
import "../../../public/svg/blog/hatenablog.svg"
import "../../../public/svg/blog/hatenablog_white.svg"
import "../../../public/svg/blog/note.svg"
import "../../../public/svg/blog/note_white.svg"

export const Navbar = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const t = useTranslations("header")

  return (
    <>
      <Box h="4rem" w="full" />
      <VStack
        as="header"
        z="40"
        w="100%"
        position="fixed"
        top="0"
        left="0"
        bg={["rgba(251,251,251, 0.5)", "rgba(20,20,20, 0.5)"]}
        backdropFilter="blur(10px)"
        gap="0"
      >
        <HStack
          display={{ base: "flex", md: "none" }}
          h="4rem"
          w="full"
          pr="2"
          pl="3"
        >
          {/* Mobile hamburger menu button */}
          <IconButton
            title="Menu"
            type="button"
            variant="ghost"
            p="1"
            onClick={onOpen}
            icon={
              <>
                <Box
                  position="absolute"
                  width="24px"
                  height="1px"
                  transform={isOpen ? "rotate(45deg)" : "translateY(-5px)"}
                  bg={["black", "white"]}
                  transitionDuration="300ms"
                  transitionProperty="all"
                />
                <Box
                  position="absolute"
                  width="24px"
                  height="1px"
                  transform={isOpen ? "rotate(-45deg)" : "translateY(5px)"}
                  bg={["black", "white"]}
                  transitionDuration="300ms"
                  transitionProperty="all"
                />
              </>
            }
          />
          <Spacer />
          <HStack gap="1" position="relative">
            <LangToggle />
            <ThemeSwitcher />
          </HStack>
        </HStack>
        {/* Mobile menu */}
        <Drawer closeOnDrag isOpen={isOpen} onClose={onClose}>
          <DrawerBody>
            <MobileMenu />
          </DrawerBody>
          <DrawerCloseButton z="40" />
        </Drawer>
        <HStack
          as="nav"
          maxW="5xl"
          w="full"
          mx="auto"
          display={{ base: "none", md: "flex" }}
          h="4rem"
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/images/profile/pfp.webp"
              alt="profile picture"
              width={50}
              height={50}
              className="w-6 h-6 rounded-lg"
            />
            <Text className="font-bold text-inherit ml-1 md:ml-2">
              {t("title")}
            </Text>
          </Link>
          <Spacer />
          {/* Desktop menu */}
          <Box display={{ base: "none", md: "flex" }} gap="4">
            <Dropdown name="social" />
            <Dropdown name="blog" />
            <Dropdown name="apps" />
          </Box>
          <Spacer />
          <Box display={{ base: "none", md: "flex" }} gap="1">
            <LangToggle />
            <ThemeSwitcher />
          </Box>
        </HStack>
        <SectionDivider />
      </VStack>
    </>
  )
})

Navbar.displayName = "Navbar"

const MenuItemComponent = ({
  icon,
  text,
  href,
}: {
  icon: JSX.Element
  text: string
  href: string
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener"
    className="group flex flex-row w-full items-center text-sm transition-colors duration-300 ease-in-out gap-2"
  >
    {icon}
    <div className="whitespace-nowrap">{text}</div>
  </Link>
)

const MobileMenu = () => {
  const t = useTranslations("header")

  const renderMenuItems = (items: DropdownProps["items"]) =>
    items.map((item) => (
      <MenuItemComponent key={item.href} {...item} />
    ))

  return (
    <VStack>
      <Text position="sticky" top="0" bg={["white", "black"]}>
        {t("social")}
      </Text>
      {renderMenuItems(nested("social"))}
      <Divider />
      <Text position="sticky" top="0" bg={["white", "black"]}>
        {t("blog")}
      </Text>
      {renderMenuItems(nested("blog"))}
      <Divider />
      <Text position="sticky" top="0" bg={["white", "black"]}>
        {t("apps")}
      </Text>
      {renderMenuItems(nested("apps"))}
    </VStack>
  )
}
