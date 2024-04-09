import { Heading, Link, Text, VStack } from "@yamada-ui/react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "404 Not Found",
  openGraph: {
    title: "404 Not Found",
    description: "404 Not Found",
  },
}

export default function NotFound({
  params: { locale },
}: {
  params: { locale: string }
}) {
  return (
    <VStack gap="2">
      <Heading textAlign="center" as="h2" fontWeight="bold" fontSize="8xl">
        404
      </Heading>
      <Text textAlign="center" fontSize="xl">
        {locale === "ja" ? "ページが見つかりません" : "Page not found"}
      </Text>
      <Link href={"/" + locale} fontSize="xl" textAlign="center">
        {locale === "ja" ? "ホームに戻る" : "Go back to Home"}
      </Link>
    </VStack>
  )
}
