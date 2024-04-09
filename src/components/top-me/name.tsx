import { Heading, Text } from "@yamada-ui/react"

export const Name = ({ locale }: { locale: string }) => {
  return (
    <Heading
      textAlign="center"
      as="h1"
      fontSize="4xl"
      textWrap="balance"
      overflowWrap="break-word"
    >
      {locale === "en" && (
        <Text as="span" textWrap="balance">
          Hi👋 I&apos;m{" "}
          <Text as="span" textWrap="nowrap" fontSize="5xl">
            Shintaro Jokagi.
          </Text>
        </Text>
      )}
      {locale === "ja" && (
        <>
          <Text as="span" whiteSpace="normal">
            こんにちは👋{" "}
          </Text>
          <Text as="ruby" fontSize="5xl" textWrap="nowrap">
            上鍵<Text as="rp">(</Text>
            <Text as="rt">じょうかぎ</Text>
            <Text as="rp">)</Text>心太朗<Text as="rp">(</Text>
            <Text as="rt">しんたろう</Text>
            <Text as="rp">)</Text>
          </Text>
          <Text as="span" textWrap="nowrap">
            です。
          </Text>
        </>
      )}
    </Heading>
  )
}
