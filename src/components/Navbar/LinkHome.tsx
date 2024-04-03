import { IconButton } from "@yamada-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useLocale } from "next-intl"
import { memo } from "react"
import pfpImg from "../../assets/pfp.webp"

export const LinkHome = memo(() => {
  const locale = useLocale()

  return (
    <IconButton
      as={Link}
      href={`/${locale}`}
      display={{ base: "none", md: "flex" }}
      variant="ghost"
      rounded="full"
      _focus={{
        outline: "3px solid",
        outlineColor: "rgba(191, 219, 254, 0.5)",
      }}
      icon={
        <Image
          src={pfpImg}
          alt="profile picture"
          width={24}
          height={24}
          style={{ borderRadius: "50%" }}
        />
      }
    />
  )
})

LinkHome.displayName = "LinkHome"
