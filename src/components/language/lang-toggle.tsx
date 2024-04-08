"use client"
import { IconButton, Link } from "@yamada-ui/react"
import Image from "next/image"
import { useLocale } from "next-intl"
import { memo } from "react"
import { usePathname } from "lib/next-intl"

export const LangToggle = memo(() => {
  const pathname = usePathname()
  const locale = useLocale()
  return (
    <IconButton
      as={Link}
      href={`/${locale === "en" ? "ja" : "en"}${pathname}`}
      rounded="full"
      title="Switch language"
      _focus={{
        outline: "3px solid",
        outlineColor: "rgba(191, 219, 254, 0.5)",
      }}
      variant="ghost"
      transitionDuration="300ms"
      icon={
        <>
          <Image
            src="/svg/flag/jp.svg"
            alt="Theme"
            width={24}
            height={24}
            className="toENG"
          />
          <Image
            src="/svg/flag/nz.svg"
            alt="Theme"
            width={24}
            height={24}
            className="toJPN"
          />
        </>
      }
    />
  )
})

LangToggle.displayName = "LangToggle"
