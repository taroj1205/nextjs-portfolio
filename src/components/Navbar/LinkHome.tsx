import { HStack, Text } from "@yamada-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { memo } from "react"
import pfpImg from "../../assets/pfp.webp"

export const LinkHome = memo(() => {
  const t = useTranslations("header")
  const locale = useLocale()

  return (
    <HStack as={Link} href={`/${locale}`}>
      <Image
        src={pfpImg}
        alt="profile picture"
        width={50}
        height={50}
        style={{ width: "24px", height: "24px", borderRadius: "50%" }}
      />
      <Text fontWeight="bold">{t("title")}</Text>
    </HStack>
  )
})

LinkHome.displayName = "LinkHome"
