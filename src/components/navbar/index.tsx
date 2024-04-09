import { Box, ButtonGroup, HStack, Spacer, VStack } from "@yamada-ui/react"
import { memo } from "react"
import { Dropdown } from "./dropdown"
import { LinkHome } from "./link-home"
import { MobileMenu } from "./mobile"
import { ThemeSwitcher } from "./theme-switcher"
import { SectionDivider } from "components/dividers"
import { LangToggle } from "components/language"

export const Navbar = memo(({ locale }: { locale: string }) => {
  return (
    <>
      <Box h={{ base: "3rem", md: "4rem" }} w="full" />
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
          maxW={{ base: "5xl", xl: "95vw" }}
          w="full"
          mx="auto"
          h={{ base: "3rem", md: "4rem" }}
          px="1"
        >
          <MobileMenu locale={locale} />
          <LinkHome />
          <Spacer />
          {/* Desktop menu */}
          <ButtonGroup display={{ base: "flex", md: "none" }} gap="4">
            <Dropdown name="social" locale={locale} />
            <Dropdown name="blog" locale={locale} />
            <Dropdown name="apps" locale={locale} />
          </ButtonGroup>
          <Spacer />
          <ButtonGroup gap="1">
            <LangToggle locale={locale} />
            <ThemeSwitcher />
          </ButtonGroup>
        </HStack>
        <SectionDivider />
      </VStack>
    </>
  )
})

Navbar.displayName = "Navbar"
