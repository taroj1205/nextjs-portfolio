import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Box, ColorModeScript, VStack } from "@yamada-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "taroj1205",
	description: "taroj1205's website created with Next.js",
	openGraph: {
		title: "taroj1205",
		description: "taroj1205's website created with Next.js",
		images: [
			{
				url: "/images/header.webp",
				width: 1200,
				height: 630,
				alt: "taroj1205's image",
			},
		],
	},
	twitter: {
		title: "taroj1205",
		description: "taroj1205's website created with Next.js",
		images: [
			{
				url: "/images/header.webp",
				width: 1200,
				height: 630,
				alt: "taroj1205's image",
			},
		],
	},
	icons: {
		shortcut: "/favicon.ico",
	},
};

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	let messages;
	try {
		messages = (await import(`../../locales/${locale}/translation.json`))
			.default;
	} catch (error) {
		notFound();
	}
	return (
		<html lang={locale} data-mode="dark" style={{ colorScheme: "dark" }}>
			<body className={`${inter.className} scroll-smooth ui-dark`}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Providers>
						<ColorModeScript
							type="cookie"
							nonce="testing"
							initialColorMode={"system"}
						/>
						<div className="flex flex-col">
							<Navbar />
							<main className="p-6">{children}</main>
							<Footer />
						</div>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
