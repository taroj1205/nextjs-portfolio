"use client"
import { IconButton } from "@yamada-ui/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { memo } from "react"

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
