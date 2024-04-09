"use client"
import { Text, HStack, Button } from "@yamada-ui/react"
import { useRouter } from "next/navigation"
import { memo } from "react"
import { JPIcon, NZIcon } from "components/icons"

export const NextLanguage = memo(({ locale }: { locale: string }) => {
  const router = useRouter()
  return (
    <HStack
      as={Button}
      variant="ghost"
      onClick={() => {
        router.push("/" + (locale === "en" ? "ja" : "en"))
      }}
      _hover={{ color: ["black", "white"] }}
      py={1}
      px={2}
      w={{ base: "auto", md: "6rem" }}
      color={["gray.600", "gray.400"]}
      transitionDuration="300ms"
      fontWeight="normal"
      gap={2}
    >
      {locale === "ja" ? <NZIcon size="2xl" /> : <JPIcon size="2xl" />}
      <Text>{locale === "en" ? "日本語" : "English"}</Text>
    </HStack>
  )
})

NextLanguage.displayName = "NextLanguage"
