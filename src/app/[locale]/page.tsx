import Image from "next/image";
import { ProjectsCard } from "@/components/ProjectsCard";
import { Carousel } from "@/components/Carousel";
import {
	FaGlobe,
	FaTwitter,
	FaInstagram,
	FaFacebook,
	FaLinkedin,
} from "react-icons/fa";
import { BriefIntro } from "@/components/BriefIntro";
import { Languages } from "@/components/Languages";
import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { Box, DiscList, Heading, ListItem, Link as YamadaLink } from "@yamada-ui/react";
import Link from "next/link";

export const metadata: Metadata = {
	title: "taroj1205 - Portfolio",
	description: "taroj1205's website created with Next.js",
};

export default function Home() {
	const locale = useLocale();
	const t = useTranslations();
	return (
		<Box className="max-w-5xl mx-auto">
			<Heading textAlign="center" as={"h1"} size={"3xl"}>
				{locale === "en" && "Hi👋 I'm Shintaro Jokagi."}
				{locale === "ja" && (
					<span className="flex flex-row flex-wrap items-center justify-center">
						<ruby>
							こんにちは<rp>(</rp>
							<rt className="opacity-0">こんにちは</rt>
							<rp>)</rp>
						</ruby>
						<span className="mb-1">👋</span>{" "}
						<span>
							<ruby>
								上鍵<rp>(</rp>
								<rt>じょうかぎ</rt>
								<rp>)</rp>心太朗<rp>(</rp>
								<rt>しんたろう</rt>
								<rp>)</rp>
							</ruby>
							です。
						</span>
					</span>
				)}
			</Heading>
			<div className="flex flex-wrap justify-center space-x-4 my-4">
				<Link
					href="https://taroj1205.poyo.jp"
					target="_blank"
					rel="noopener"
					className="px-2 py-2 bg-blue-500 hover:bg-transparent hover:text-blue-500 active:text-blue-700 border active:bg-opacity-20 transition-colors duration-300 ease-in-out border-blue-500 active:bg-blue-700 rounded text-white flex items-center space-x-2">
					<FaGlobe />
				</Link>
				<Link
					href="https://twitter.com/taroj1205"
					target="_blank"
					rel="noopener"
					className="px-2 py-2 bg-blue-400 hover:bg-transparent hover:text-blue-400 active:text-blue-600 border active:bg-opacity-20 transition-colors duration-300 ease-in-out border-blue-400 active:bg-blue-600 rounded text-white flex items-center space-x-2">
					<FaTwitter />
				</Link>
				<Link
					href="https://instagram.com/taroj1205"
					target="_blank"
					rel="noopener"
					className="px-2 py-2 bg-pink-500 hover:bg-transparent hover:text-pink-500 active:text-pink-700 border active:bg-opacity-20 transition-colors duration-300 ease-in-out border-pink-500 active:bg-pink-700 rounded text-white flex items-center space-x-2">
					<FaInstagram />
				</Link>
				<Link
					href="https://www.facebook.com/taroj1205"
					target="_blank"
					rel="noopener"
					className="px-2 py-2 bg-blue-600 hover:bg-transparent hover:text-blue-600 active:text-blue-800 border active:bg-opacity-20 transition-colors duration-300 ease-in-out border-blue-600 active:bg-blue-800 rounded text-white flex items-center space-x-2">
					<FaFacebook />
				</Link>
				<Link
					href="https://www.linkedin.com/in/taroj/"
					target="_blank"
					rel="noopener"
					className="px-2 py-2 bg-blue-700 hover:bg-transparent hover:text-blue-700 active:text-blue-900 border active:bg-opacity-20 transition-colors duration-300 ease-in-out border-blue-700 active:bg-blue-900 rounded text-white flex items-center space-x-2">
					<FaLinkedin />
				</Link>
			</div>
			<div className="flex justify-center print:hidden">
				<Carousel />
			</div>
			<Image
				src="/images/header-square.webp"
				alt="header"
				width={300}
				height={300}
				className="mt-8 rounded-md print:block hidden"
			/>
			<div className="w-full my-8 p-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent bg-opacity-10"></div>
			<BriefIntro />
			<div className="w-full my-8 p-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent bg-opacity-10"></div>
			<Box className="mt-8 space-y-4">
				<Heading as={"h2"}>{t("heading.programming")}</Heading>
				<Heading as={"h3"} size={"lg"}>
					{t("heading.open source")}
				</Heading>
				<DiscList fontSize={"lg"}>
					<ListItem>
						{t("open source.yamada.title")}
						<DiscList>
							<ListItem>
								<YamadaLink href="https://yamada-ui.com/community/team" isExternal>
									https://yamada-ui.com/community/team
								</YamadaLink>
							</ListItem>
						</DiscList>
					</ListItem>
				</DiscList>
				<Languages />
			</Box>
			<div className="w-full my-8 p-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent bg-opacity-10"></div>

			<Box className="mt-8 space-y-4">
				<Heading as={"h2"}>
					{t("projects.title")}
				</Heading>
				<ProjectsCard />
			</Box>
		</Box>
	);
}
