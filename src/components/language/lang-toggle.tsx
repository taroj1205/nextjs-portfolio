"use client"
import { IconButton } from "@yamada-ui/react"
import Link from "next/link"
import { memo } from "react"
import { JPIcon, NZIcon } from "components/icons"

export const LangToggle = memo(({ locale }: { locale: string }) => {
  return (
    <IconButton
      as={Link}
      href={"/" + (locale === "en" ? "ja" : "en")}
      rounded="full"
      title={locale === "ja" ? "To English" : "日本語へ"}
      _focus={{
        outline: "3px solid",
        outlineColor: "hsla(210, 50%, 85%, 0.5)",
      }}
      variant="ghost"
      transitionDuration="300ms"
      icon={locale === "ja" ? <JPIcon size="2xl" /> : <NZIcon size="2xl" />}
    />
  )
})

LangToggle.displayName = "LangToggle"
