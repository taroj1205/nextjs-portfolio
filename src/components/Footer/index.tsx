import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { Box, Center, HStack, Link, Spacer, Text } from "@yamada-ui/react"
import { memo } from "react"
import { SectionDivider } from "../Dividers"
import { NextLanguage } from "@/components/Language"
import { ScrollToTop } from "@/components/ScrollToTop"

export const Footer = memo(() => {
  return (
    <Box as="footer" w="full" backdropBlur="lg">
      <SectionDivider />
      <HStack mx="auto" px="4" py="2" maxW="4xl">
        <NextLanguage />
        <Spacer />
        <Center>
          <ScrollToTop />
        </Center>
        <Spacer />
        <Link
          as={HStack}
          href="https://github.com/taroj1205"
          isExternal
          _hover={{ color: ["black", "white"], textDecoration: "none" }}
          py={1}
          px={2}
          w={{ base: "6rem", md: "auto" }}
          color={["gray.600", "gray.400"]}
          transitionDuration="300ms"
          gap={2}
        >
          <Icon icon={faGithub} />
          <Text>GitHub</Text>
        </Link>
      </HStack>
    </Box>
  )
})

Footer.displayName = "Footer"
