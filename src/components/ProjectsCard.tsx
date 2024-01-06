"use client";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import { GitHub } from "@mui/icons-material";
import Image from "next/image";
import { useColorMode } from "@yamada-ui/react";

const projects = [
	{
		title: "Portfolio",
		description: "This is my portfolio site.",
		thumbnail: "/images/portfolio.webp",
		video: false,
		lang: "JavaScript/Typescript",
		framework: "Next.js",
		link: "https://taroj1205.poyo.jp",
		githubLink: "https://github.com/taroj1205/portfolio",
	},
	{
		title: "Typing Game",
		description: "Learn English with this typing game.",
		thumbnail: "/images/typing-game.webp",
		video: false,
		lang: "JavaScript/TypeScript",
		framework: "Next.js",
		link: "https://typing-game-nextjs.vercel.app/",
		githubLink: "https://github.com/taroj1205/nextjs-typing-game",
	},
	{
		title: "Connect 4",
		description: "This is a Connect 4 game made with Next.js.",
		thumbnail: "/images/connect-4.webp",
		video: false,
		lang: "JavaScript/Typescript",
		framework: "Next.js",
		link: "https://connect4-taroj.vercel.app/",
		githubLink: "https://github.com/taroj1205/nextjs-connect4",
	},
	{
		title: "Typing Game (Unity)",
		description: "A 2D typing game built with Unity.",
		thumbnail: "/videos/unity-typing-game.webm",
		video: true,
		lang: "C#",
		framework: "Unity",
		link: "https://github.com/taroj1205/Typing-Game",
		githubLink: "https://github.com/taroj1205/Typing-Game",
	},
	{
		title: "Typing Game (Flask)",
		description: "Learn English with this typing game.",
		thumbnail: "/images/app_py.webp",
		video: false,
		lang: "JavaScript",
		framework: "Flask/SQLite3 (Server)",
		link: "https://github.com/taroj1205/taroj1205.github.io/tree/main/typing",
		githubLink:
			"https://github.com/taroj1205/taroj1205.github.io/tree/main/typing",
	},
	{
		title: "UoA Links",
		description: "Useful links for UoA",
		thumbnail: "/videos/UoALinks.webm",
		video: true,
		lang: "JavaScript/TypeScript",
		framework: "Next.js",
		link: "/portal",
		githubLink: "https://github.com/taroj1205/nextjs-portfolio/",
	},
	{
		title: "Typing Game (JavaScript)",
		description: "Learn English with this typing game.",
		thumbnail: "/images/index_js.webp",
		video: false,
		lang: "JavaScript",
		framework: "Node.js (Server)",
		link: "https://github.com/taroj1205/Typing-Game-Node/",
		githubLink: "https://github.com/taroj1205/Typing-Game-Node/",
	},
	{
		title: "Typing Game (Python)",
		description: "Learn English with this typing game.",
		thumbnail: "/images/typing-game.webp",
		video: false,
		lang: "Python",
		framework: "Pygame",
		link: "https://github.com/taroj1205/Learn-Vocabs-Through-Typing",
		githubLink: "https://github.com/taroj1205/Learn-Vocabs-Through-Typing",
	},
	{
		title: "Chat app",
		description:
			"This is a feature-rich chat app made with Next.js and Supabase.",
		thumbnail: "/videos/chat.webm",
		video: true,
		lang: "JavaScript/TypeScript",
		framework: "Next.js",
		link: "https://chat-taroj.vercel.app/",
		githubLink: "https://github.com/taroj1205/chat",
	},
	{
		title: "Old Portfolio",
		description: "This is my old portfolio site using Next.js Pages directory.",
		thumbnail: "/images/taroj-poyo-jp.webp",
		video: false,
		lang: "JavaScript/TypeScript",
		framework: "Next.js",
		link: "https://taroj.poyo.jp/",
		githubLink: "https://github.com/taroj1205/taroj.poyo.jp",
	},
];

interface Project {
	title: string;
	description: string;
	thumbnail: string;
	video: boolean;
	lang: string;
	framework: string;
	link: string;
	githubLink: string;
}

export const ProjectsCard: React.FC = () => {
	const { colorMode } = useColorMode();
	return (
		<div className="flex flex-wrap flex-row gap-4">
			{projects.map((project: Project, index: number) => (
				<Card key={index} variant="outlined" sx={{ width: 320 }}>
					<CardOverflow>
						<AspectRatio ratio="2">
							{project.video ? (
								<video
									src={project.thumbnail}
									autoPlay
									loop
									muted
									playsInline
								/>
							) : (
								<Image
									src={project.thumbnail}
									alt={project.description}
									width={159}
									height={318}
								/>
							)}
						</AspectRatio>
					</CardOverflow>
					<CardContent>
						<Typography level="title-md">
							<Link
								href={project.link}
								target="_blank"
								rel="noopener"
								overlay
								underline="none">
								{project.title}
							</Link>
						</Typography>
						<Typography level="body-sm">{project.description}</Typography>
					</CardContent>
					<CardOverflow variant="soft">
						<Divider inset="context" />
						<CardContent orientation="horizontal">
							<Typography level="body-xs">{project.lang}</Typography>
							<Divider orientation="vertical" />
							<Typography level="body-xs">{project.framework}</Typography>
							<Link
								href={project.githubLink}
								sx={{ position: "absolute", right: 2, bottom: 3 }}
								target="_blank"
								rel="noopener noreferrer">
								<IconButton
									aria-label="go to GitHub"
									variant="soft"
									color="neutral">
									<GitHub fontSize="inherit" />
								</IconButton>
							</Link>
						</CardContent>
					</CardOverflow>
				</Card>
			))}
		</div>
	);
};
