"use client"
import { IconButton } from "@yamada-ui/react"
import { useRouter } from "next/navigation"
import { memo } from "react"
import { JPIcon, NZIcon } from "components/icons"

export const LangToggle = memo(({ locale }: { locale: string }) => {
  const router = useRouter()
  return (
    <IconButton
      onClick={() => {
        router.push("/" + (locale === "en" ? "ja" : "en"))
      }}
      rounded="full"
      title="Switch language"
      _focus={{
        outline: "3px solid",
        outlineColor: "rgba(191, 219, 254, 0.5)",
      }}
      variant="ghost"
      transitionDuration="300ms"
      icon={locale === "ja" ? <JPIcon size="2xl" /> : <NZIcon size="2xl" />}
    />
  )
})

LangToggle.displayName = "LangToggle"
