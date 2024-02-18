import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Text,
	Divider,
	IconButton,
	Spacer,
	Link as YamadaLink,
	Wrap,
} from "@yamada-ui/react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { useLocale } from "next-intl";
import portfolioImage from "../../public/images/portfolio.webp";
import saveTwitterLinksImage from "../../public/images/save-twitter-links.webp";
import hideTwitterBotsImage from "../../public/images/hide-twitter-bots.webp";
import typingGameImage from "../../public/images/typing-game.webp";
import connect4Image from "../../public/images/connect-4.webp";
import appPyImage from "../../public/images/app_py.webp";
import uoALinksImage from "../../public/images/UoALinks.webp";
import chatImage from "../../public/images/chat.webp";

interface Project {
	title: string;
	description: string;
	thumbnail: string | StaticImageData;
	video: boolean;
	lang: string;
	framework: string;
	link: string;
	githubLink: string;
}

export const ProjectsCard: React.FC = () => {
	const locale = useLocale();
	const projects = [
		{
			title: locale === "en" ? "Portfolio" : "ポートフォリオ",
			description:
				locale === "en"
					? "This is my portfolio site."
					: "これは僕のサイトです。",
			thumbnail: portfolioImage,
			video: false,
			lang: "JavaScript/Typescript",
			framework: "Next.js",
			link: "https://taroj1205.poyo.jp",
			githubLink: "https://github.com/taroj1205/portfolio",
		},
		{
			title: locale === "en" ? "Save Twitter Links" : "Twitterのリンクを保存",
			description:
				locale === "en"
					? "This is a chrome extension for saving twitter links you've viewed."
					: "Twitterのリンクを保存するためのChrome拡張機能です。",
			thumbnail: saveTwitterLinksImage,
			video: false,
			lang: "JavaScript/Typescript",
			framework: "Chrome",
			link: "https://github.com/taroj1205/chrome-twitter-link/releases/latest",
			githubLink: "https://github.com/taroj1205/chrome-twitter-link",
		},
		{
			title:
				locale === "en"
					? "Hide Twitter Bots (Chrome Extension)"
					: "Twitterのボットを隠す拡張機能。",
			description:
				locale === "en"
					? "This is a chrome extension for hiding twitter bots."
					: "Twitterのボットを隠すためのChrome拡張機能です。",
			thumbnail: hideTwitterBotsImage,
			video: false,
			lang: "JavaScript/Typescript",
			framework: "Chrome",
			link: "https://github.com/taroj1205/chrome-twitter-bots/releases/latest",
			githubLink: "https://github.com/taroj1205/chrome-twitter-bots",
		},
		{
			title: locale === "en" ? "Typing Game" : "タイピングゲーム",
			description:
				locale === "en"
					? "Learn English with this typing game."
					: "英語を習得するためのタイピングゲームです。",
			thumbnail: typingGameImage,
			video: false,
			lang: "JavaScript/TypeScript",
			framework: "Next.js",
			link: "https://typing-game-nextjs.vercel.app/",
			githubLink: "https://github.com/taroj1205/nextjs-typing-game",
		},
		{
			title: "Connect 4",
			description:
				locale === "en"
					? "This is a Connect 4 game made with Next.js."
					: "これはNext.jsで作られたConnect 4ゲームです。",
			thumbnail: connect4Image,
			video: false,
			lang: "JavaScript/Typescript",
			framework: "Next.js",
			link: "https://connect4-taroj.vercel.app/",
			githubLink: "https://github.com/taroj1205/nextjs-connect4",
		},
		{
			title:
				locale === "en" ? "Typing Game (Unity)" : "タイピングゲーム (Unity)",
			description:
				locale === "en"
					? "A 2D typing game built with Unity."
					: "Unityで作られた2Dタイピングゲームです。",
			thumbnail: "/videos/unity-typing-game.webm",
			video: true,
			lang: "C#",
			framework: "Unity",
			link: "https://github.com/taroj1205/Typing-Game",
			githubLink: "https://github.com/taroj1205/Typing-Game",
		},
		{
			title:
				locale === "en" ? "Typing Game (Flask)" : "タイピングゲーム (Flask)",
			description:
				locale === "en"
					? "Learn English with this typing game."
					: "英語を習得するためのタイピングゲームです。",
			thumbnail: appPyImage,
			video: false,
			lang: "JavaScript",
			framework: "Flask/SQLite3 (Server)",
			link: "https://github.com/taroj1205/taroj1205.github.io/tree/main/typing",
			githubLink:
				"https://github.com/taroj1205/taroj1205.github.io/tree/main/typing",
		},
		{
			title: locale === "en" ? "UoA Links" : "UoAのリンクなど",
			description:
				locale === "en" ? "Useful links for UoA" : "UoAの便利なリンクです",
			thumbnail: uoALinksImage,
			video: false,
			lang: "JavaScript/TypeScript",
			framework: "Next.js",
			link: "/uoa",
			githubLink: "https://github.com/taroj1205/nextjs-portfolio/",
		},
		// {
		// 	title:
		// 		locale === "en"
		// 			? "Typing Game (Node.js)"
		// 			: "タイピングゲーム (Node.js)",
		// 	description:
		// 		locale === "en"
		// 			? "Learn English with this typing game."
		// 			: "英語を習得するためのタイピングゲームです。",
		// 	thumbnail: "/images/index_js.webp",
		// 	video: false,
		// 	lang: "JavaScript",
		// 	framework: "Node.js (Server)",
		// 	link: "https://github.com/taroj1205/Typing-Game-Node/",
		// 	githubLink: "https://github.com/taroj1205/Typing-Game-Node/",
		// },
		// {
		// 	title:
		// 		locale === "en" ? "Typing Game (Pygame)" : "タイピングゲーム (Pygame)",
		// 	description:
		// 		locale === "en"
		// 			? "Learn English with this typing game."
		// 			: "英語を習得するためのタイピングゲームです。",
		// 	thumbnail: "/images/typing-game.webp",
		// 	video: false,
		// 	lang: "Python",
		// 	framework: "Pygame",
		// 	link: "https://github.com/taroj1205/Learn-Vocabs-Through-Typing",
		// 	githubLink: "https://github.com/taroj1205/Learn-Vocabs-Through-Typing",
		// },
		{
			title: locale === "en" ? "Chat App" : "チャットアプリ",
			description:
				locale === "en"
					? "This is a feature-rich chat app made with Next.js and Supabase."
					: "Next.jsとSupabaseで作られた機能豊富なチャットアプリです。",
			thumbnail: chatImage,
			video: false,
			lang: "JavaScript/TypeScript",
			framework: "Next.js",
			link: "https://chat-taroj.vercel.app/",
			githubLink: "https://github.com/taroj1205/chat",
		},
		// {
		// 	title: locale === "en" ? "Old Portfolio" : "昔のポートフォリオ",
		// 	description:
		// 		locale === "en"
		// 			? "This is my old portfolio site."
		// 			: "これは僕の古いサイトです。",
		// 	thumbnail: "/images/taroj-poyo-jp.webp",
		// 	video: false,
		// 	lang: "JavaScript/TypeScript",
		// 	framework: "Next.js",
		// 	link: "https://taroj.poyo.jp/",
		// 	githubLink: "https://github.com/taroj1205/taroj.poyo.jp",
		// },
	];

	return (
		<Wrap gap={4}>
			{projects.map((project: Project, index: number) => (
				<Card
					key={index}
					bg={["#f0f4f8", "#171a1c"]}
					variant="outline"
					w={"320px"}
					h={"276px"}>
					<CardHeader maxH={318} roundedTop={"md"} overflow={"hidden"} p={0}>
						{project.video ? (
							<video
								src={String(project.thumbnail)}
								autoPlay
								loop
								muted
								playsInline
								className="max-h-[318px]"
							/>
						) : (
							<Image
								src={project.thumbnail}
								alt={project.description}
								width={350}
								className="w-full"
								height={318}
							/>
						)}
					</CardHeader>
					<CardBody bg={["#fbfcfe", "#0b0d0e"]}>
						<YamadaLink href={project.link} isExternal fontSize="md">
							{project.title}
						</YamadaLink>
						<Text fontSize={"sm"}>{project.description}</Text>
					</CardBody>
					<Divider orientation="horizontal" />
					<CardFooter pl={"md"} pr={"xs"} py={"xs"}>
						<Text fontSize="xs">{project.lang}</Text>
						<Divider orientation="vertical" h={"50%"} />
						<Text fontSize="xs">{project.framework}</Text>
						<Spacer />
						<IconButton
							as={YamadaLink}
							variant={"ghost"}
							m={0}
							size={"md"}
							h={"36px"}
							w={"36px"}
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer">
							<FaGithub />
						</IconButton>
					</CardFooter>
				</Card>
			))}
		</Wrap>
	);
};
