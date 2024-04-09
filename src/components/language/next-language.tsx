"use client"
import { Text, HStack, Image, Button } from "@yamada-ui/react"
import { useRouter } from "next/navigation"
import { memo } from "react"

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
