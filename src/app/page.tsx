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
import Link from "next/link";
import { BriefIntro } from "@/components/BriefIntro";
import { Languages } from "@/components/Languages";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "taroj1205 - Portfolio",
	description: "taroj1205's website created with Next.js",
};

export default function Home() {
	return (
		<>
			<div className="max-w-5xl mx-auto">
				<div className="text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
						Hi👋 I&apos;m Shintaro Jokagi.
					</h1>
					<div className="flex flex-wrap justify-center space-x-4 mb-4">
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
				</div>
				<div className="w-full my-8 p-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent bg-opacity-10"></div>
				<BriefIntro />
				<div className="w-full my-8 p-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent bg-opacity-10"></div>
				<Languages />
				<div className="w-full my-8 p-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent bg-opacity-10"></div>

				<h2 className="text-3xl font-bold mb-4">Projects</h2>

				<div className="float-right mb-6">
					<ProjectsCard />
				</div>
			</div>
		</>
	);
}
