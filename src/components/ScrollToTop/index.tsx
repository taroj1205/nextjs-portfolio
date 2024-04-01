"use client"

import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { Button, Text } from "@yamada-ui/react"
import { useLocale } from "next-intl"
import { memo } from "react"

export const ScrollToTop = memo(() => {
  const locale = useLocale()
  return (
    <>
      <Button
        variant="ghost"
        py="1"
        px="2"
        fontSize="sm"
        color={["gray.600", "gray.400"]}
        _hover={{ color: ["black", "white"] }}
        transitionDuration="300ms"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Text display={{ base: "none", md: "block" }}>
          {locale === "en" ? "Scroll to Top" : "トップへスクロール"}
        </Text>
        <Icon
          display={{ base: "block", md: "none" }}
          icon={faArrowUp}
          w="40px"
          mx="auto"
        />
      </Button>
    </>
  )
})

ScrollToTop.displayName = "ScrollToTop"
