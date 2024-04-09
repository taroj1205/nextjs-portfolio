"use client"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { Button, HStack, Text } from "@yamada-ui/react"
import { memo } from "react"
import { getDictionary } from "lib/dictionaries"

export const ScrollToTop = memo(({ locale }: { locale: string }) => {
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
        <Icon
          display={{ base: "none", md: "block" }}
          icon={faArrowUp}
          w="40px"
          mx="auto"
          size="lg"
        />
      </HStack>
    </>
  )
})

ScrollToTop.displayName = "ScrollToTop"
