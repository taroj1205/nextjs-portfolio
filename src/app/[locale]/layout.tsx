import { Box, ColorModeScript, Spacer, VStack } from "@yamada-ui/react"
import "./globals.css"
import { notFound } from "next/navigation"
import Script from "next/script"
import { NextIntlClientProvider } from "next-intl"
import { getTranslations } from "next-intl/server"
import { Providers } from "./providers"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../locales/${locale}/translation.json`))
      .default
  } catch (error) {
    notFound()
  }
  return (
    <html lang={locale} data-mode="dark" style={{ colorScheme: "dark" }}>
      <body className="ui-dark">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <ColorModeScript
              type="cookie"
              nonce="testing"
              initialColorMode="system"
            />
            <VStack overflowX="hidden" minH="100svh">
              <Navbar />
              <Box as="main" p="6">
                {children}
              </Box>
              <Spacer />
              <Footer />
            </VStack>
          </Providers>
        </NextIntlClientProvider>
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
