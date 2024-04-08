import { Box, HStack, Spacer } from "@yamada-ui/react"
import { memo } from "react"
import { GitHubLink } from "./github-link"
import { SectionDivider } from "components/dividers"
import { NextLanguage } from "components/language"
import { ScrollToTop } from "components/scroll-to-top"

export const Footer = memo(() => {
  return (
    <Box as="footer" w="full" backdropBlur="lg">
      <SectionDivider />
      <HStack mx="auto" px="4" py="2" maxW="4xl">
        <NextLanguage />
        <Spacer />
        <ScrollToTop />
        <Spacer />
        <GitHubLink />
      </HStack>
    </Box>
  )
})

Footer.displayName = "Footer"
