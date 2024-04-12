import { Box, Spacer, VStack } from "@yamada-ui/react"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import Script from "next/script"
import { Providers } from "./providers"
import { Footer } from "components/footer"
import { Navbar } from "components/navbar"
import { getDictionary } from "lib/dictionaries"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const { metadata } = getDictionary(locale)

  return {
    metadataBase: new URL("https://taroj1205.poyo.jp"),
    title: metadata.title,
    description: metadata.description,
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const mode =
    cookies().get("ui-color-mode")?.value === "light" ? "light" : "dark"

  return (
    <html lang={locale} data-mode={mode} style={{ colorScheme: mode }}>
      <body className={`ui-${mode}`}>
        <Providers>
          <VStack overflowX="hidden" minH="100svh">
            <Navbar locale={locale} />
            <Box as="main" p="6" pt={{ base: "6", md: "3" }}>
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
