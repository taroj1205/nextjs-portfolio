"use client"
import { IconButton } from "@yamada-ui/react"
import Image from "next/image"
import Link from "next/link"
import pfpImg from "../../assets/pfp.webp"

export const LinkHome = ({ locale }: { locale: string }) => {
  return (
    <IconButton
      as={Link}
      href={`/${locale}`}
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
}
