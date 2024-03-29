import { ColorModeScript } from "@yamada-ui/react"
import { Inter } from "next/font/google"
import "./globals.css"
import { notFound } from "next/navigation"
import Script from "next/script"
import { NextIntlClientProvider } from "next-intl"
import { getTranslations } from "next-intl/server"
import { Providers } from "./providers"
import Footer from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

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
      <body
        className={`${inter.className} scroll-smooth ui-dark subpixel-antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <ColorModeScript
              type="cookie"
              nonce="testing"
              initialColorMode="system"
            />
            <div className="flex flex-col min-h-svh">
              <Navbar />
              <main className="p-6">{children}</main>
              <Footer />
            </div>
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
