"use client"
import { Button, HStack, Text } from "@yamada-ui/react"
import { ArrowUpIcon } from "components/icons"
import { getDictionary } from "lib/dictionaries"

export const ScrollToTop = ({ locale }: { locale: string }) => {
  const { footer } = getDictionary(locale)
  return (
    <>
      <HStack
        as={Button}
        variant="ghost"
        py="1"
        px="2"
        color={["gray.600", "gray.400"]}
        _hover={{ color: ["black", "white"] }}
        transitionDuration="300ms"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title={footer.scrollToTop}
        fontWeight="normal"
      >
        <Text display={{ base: "block", md: "none" }}>
          {footer.scrollToTop}
        </Text>
        <ArrowUpIcon
          display={{ base: "none", md: "block" }}
          w="40px"
          mx="auto"
          size="lg"
        />
      </HStack>
    </>
  )
}
