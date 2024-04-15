"use client"
import { Text, Button, HStack } from "@yamada-ui/react"
import Link from "next/link"
import { memo } from "react"
import { JPIcon } from "components/icons/locales/jp"
import { NZIcon } from "components/icons/locales/nz"

export const NextLanguage = memo(({ locale }: { locale: string }) => {
  return (
    <Link href={"/" + (locale === "en" ? "ja" : "en")}>
      <HStack
        as={Button}
        variant="ghost"
        _hover={{ color: ["black", "white"] }}
        py={1}
        px={2}
        color={["gray.600", "gray.400"]}
        title={locale === "ja" ? "To English" : "日本語へ"}
        transitionDuration="300ms"
        fontWeight="normal"
        gap={2}
      >
        {locale === "ja" ? <NZIcon size="2xl" /> : <JPIcon size="2xl" />}
        <Text>{locale === "en" ? "日本語" : "English"}</Text>
      </HStack>
    </Link>
  )
})

NextLanguage.displayName = "NextLanguage"
