import { Heading, Link, Text, VStack } from "@yamada-ui/react"
import type { Metadata } from "next"
import { getDictionary } from "lib/dictionaries"

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "404 Not Found",
  openGraph: {
    title: "404 Not Found",
    description: "404 Not Found",
  },
  metadataBase: new URL("https://taroj1205.poyo.jp"),
}

export default function NotFound({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const { notFound } = getDictionary(locale)

  return (
    <VStack gap="2">
      <Heading textAlign="center" as="h2" fontWeight="bold" fontSize="8xl">
        404
      </Heading>
      <Text textAlign="center" fontSize="xl">
        {notFound.title}
      </Text>
      <Link href={"/" + locale} fontSize="xl" textAlign="center">
        {notFound.goBack}
      </Link>
    </VStack>
  )
}
