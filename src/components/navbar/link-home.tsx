"use client"
import { IconButton } from "@yamada-ui/react"
import Image from "next/image"
import { memo } from "react"
import pfpImg from "../../assets/pfp.webp"
import { Link } from "lib/next-intl"

export const LinkHome = memo(() => {
  return (
    <IconButton
      as={Link}
      href="/"
      display={{ base: "flex", md: "none" }}
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
