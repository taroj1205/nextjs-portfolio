import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "taroj1205",
	description: "taroj1205's website created with Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Providers>
					<main className="p-6 min-h-[100svh] h-fit">
						<ThemeSwitcher />
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
