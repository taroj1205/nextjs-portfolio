"use client"
import { Text, HStack, Image } from "@yamada-ui/react"
import Link from "next/link"
import { useLocale } from "next-intl"
import { memo } from "react"
import { usePathname } from "lib/next-intl"

export const NextLanguage = memo(() => {
  const locale = useLocale()
  const pathname = usePathname()
  return (
    <HStack
      as={Link}
      href={`/${locale === "en" ? "ja" : "en"}${pathname}`}
      _hover={{ color: ["black", "white"], textDecoration: "none" }}
      py={1}
      px={2}
      w={{ base: "auto", md: "6rem" }}
      color={["gray.600", "gray.400"]}
      transitionDuration="300ms"
      gap={2}
    >
      {locale === "en" ? (
        <Image
          src="/svg/flag/jp.svg"
          alt="日本語 Icon"
          width={24}
          height={24}
          brightness="90"
          // TODO group hover
          w="24px"
          h="24px"
        />
      ) : (
        <Image
          src="/svg/flag/nz.svg"
          alt="English Icon"
          width={24}
          height={24}
          brightness="90"
          w="24px"
          h="24px"
        />
      )}
      <Text>{locale === "en" ? "日本語" : "English"}</Text>
    </HStack>
  )
})

NextLanguage.displayName = "NextLanguage"
