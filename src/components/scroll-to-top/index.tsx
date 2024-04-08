"use client"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { Button, Text } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { memo } from "react"

export const ScrollToTop = memo(() => {
  const t = useTranslations("footer")
  return (
    <>
      <Button
        variant="ghost"
        py="1"
        px="2"
        fontWeight="normal"
        color={["gray.600", "gray.400"]}
        _hover={{ color: ["black", "white"] }}
        transitionDuration="300ms"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title={t("scrollToTop")}
      >
        <Text display={{ base: "block", md: "none" }}>{t("scrollToTop")}</Text>
        <Icon
          display={{ base: "none", md: "block" }}
          icon={faArrowUp}
          w="40px"
          mx="auto"
          size="lg"
        />
      </Button>
    </>
  )
})

ScrollToTop.displayName = "ScrollToTop"
