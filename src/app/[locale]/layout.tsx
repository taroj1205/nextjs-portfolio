import { Box, ColorModeScript, Spacer, VStack } from "@yamada-ui/react"
import type { Metadata } from "next"
import Script from "next/script"
import { Providers } from "./providers"
import { Footer } from "components/footer"
import { Navbar } from "components/navbar"
import { getDictionary } from "lib/dictionaries"

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }]
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const dict = getDictionary(locale).metadata

  return {
    metadataBase: new URL("https://taroj1205.poyo.jp"),
    title: dict.title,
    description: dict.description,
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale} data-mode="dark" style={{ colorScheme: "dark" }}>
      <body className="ui-dark">
        <Providers>
          <ColorModeScript
            type="cookie"
            nonce="testing"
            initialColorMode="system"
          />
          <VStack overflowX="hidden" minH="100svh">
            <Navbar locale={locale} />
            <Box as="main" p="6">
              {children}
            </Box>
            <Spacer />
            <Footer locale={locale} />
          </VStack>
        </Providers>
        <Script
          id="umami-script"
          strategy="afterInteractive"
          async
          src="https://eu.umami.is/script.js"
          data-website-id="ecbdac24-4918-4ad1-a8d3-72943ccfc44f"
        />
      </body>
    </html>
  )
}
