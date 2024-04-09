"use client"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { Button, HStack, Text } from "@yamada-ui/react"
import { memo } from "react"

export const ScrollToTop = memo(({ locale }: { locale: string }) => {
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
        title={locale === "en" ? "Scroll to Top" : "トップに戻る"}
      >
        <Text display={{ base: "block", md: "none" }}>
          {locale === "en" ? "Scroll to Top" : "トップに戻る"}
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
