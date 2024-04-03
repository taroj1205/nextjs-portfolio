import { Box, ButtonGroup, HStack, Spacer, VStack } from "@yamada-ui/react"
import { memo } from "react"
import { Dropdown } from "./Dropdown"
import { LinkHome } from "./LinkHome"
import { MobileMenu } from "./MobileMenu"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { SectionDivider } from "@/components/Dividers"
import { LangToggle } from "@/components/Language"
import "../../../public/svg/blog/hatenablog.svg"
import "../../../public/svg/blog/hatenablog_white.svg"
import "../../../public/svg/blog/note.svg"
import "../../../public/svg/blog/note_white.svg"

export const Navbar = memo(() => {
  return (
    <>
      <Box h={{ base: "4rem", md: "3rem" }} w="full" />
      <VStack
        as="header"
        z="40"
        w="100svw"
        position="fixed"
        top="0"
        left="0"
        bg={["rgba(251,251,251, 0.5)", "rgba(20,20,20, 0.5)"]}
        backdropFilter="blur(15px)"
        gap="0"
      >
        <HStack
          as="nav"
          maxW={{ base: "95vw", xl: "5xl" }}
          w="full"
          mx="auto"
          h={{ base: "4rem", md: "3rem" }}
          px="1"
        >
          <MobileMenu />
          <LinkHome />
          <Spacer />
          {/* Desktop menu */}
          <ButtonGroup display={{ base: "none", md: "flex" }} gap="4">
            <Dropdown name="social" />
            <Dropdown name="blog" />
            <Dropdown name="apps" />
          </ButtonGroup>
          <Spacer />
          <ButtonGroup gap="1">
            <LangToggle />
            <ThemeSwitcher />
          </ButtonGroup>
        </HStack>
        <SectionDivider />
      </VStack>
    </>
  )
})

Navbar.displayName = "Navbar"
