import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Divider,
  IconButton,
  Link as YamadaLink,
  Wrap,
  HStack,
  Spacer,
} from "@yamada-ui/react"
import type { StaticImageData } from "next/image"
import Image from "next/image"
import { useLocale } from "next-intl"
import { memo } from "react"
import appPyImage from "../../assets/projects/app_py.webp"
import chatImage from "../../assets/projects/chat.webp"
import connect4Image from "../../assets/projects/connect-4.webp"
import hideTwitterBotsImage from "../../assets/projects/hide-twitter-bots.webp"
import portfolioImage from "../../assets/projects/portfolio.webp"
import reversiImage from "../../assets/projects/reversi.webp"
import saveTwitterLinksImage from "../../assets/projects/save-twitter-links.webp"
import typingGameImage from "../../assets/projects/typing-game.webp"
import unityTypingGameImage from "../../assets/projects/unity-typing.webp"

export interface Project {
  title: string
  description: string
  thumbnail: string | StaticImageData
  video: boolean
  lang: string
  framework: string
  link: string
  githubLink: string
}

export const ProjectsCard = memo(() => {
  const locale = useLocale()
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
      link: "https://taroj.vercel.app",
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
      thumbnail: unityTypingGameImage,
      video: false,
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
      framework: "Flask/SQLite3",
      link: "https://taroj1205.github.io/typing/",
      githubLink:
        "https://github.com/taroj1205/taroj1205.github.io/tree/main/typing",
    },
    {
      title: locale === "en" ? "Reversi" : "オセロ",
      description:
        locale === "en"
          ? "Reversi game made with Next.js"
          : "Next.jsで作られたオセロゲームです。",
      thumbnail: reversiImage,
      video: false,
      lang: "JavaScript/Typescript",
      framework: "Next.js",
      link: "https://nextjs-reversi.vercel.app/",
      githubLink: "https://github.com/taroj1205/nextjs-reversi",
    },
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
  ]

  return (
    <Wrap gap={4}>
      {projects.map((project: Project) => (
        <Card
          key={project.githubLink}
          bg={["#f0f4f8", "#171a1c"]}
          variant="outline"
          w="320px"
          h="350px"
        >
          <CardHeader maxH={318} roundedTop="md" overflow="hidden" p={0}>
            {project.video ? (
              <video
                src={String(project.thumbnail)}
                autoPlay
                loop
                muted
                playsInline
                style={{ maxHeight: "350px" }}
              />
            ) : (
              <Image
                src={project.thumbnail}
                alt={project.description}
                width={350}
                style={{ width: "100%", objectFit: "cover" }}
                height={400}
              />
            )}
          </CardHeader>
          <CardBody bg={["#fbfcfe", "#0b0d0e"]}>
            <YamadaLink href={project.link} isExternal fontSize="lg">
              {project.title}
            </YamadaLink>
            <Text fontSize="md">{project.description}</Text>
          </CardBody>
          <Divider orientation="horizontal" />
          <CardFooter as={HStack} pl="md" pr="xs" py="xs">
            <Text fontSize="sm">{project.lang}</Text>
            <Divider orientation="vertical" h="50%" />
            <Text fontSize="sm">{project.framework}</Text>
            <Spacer />
            <IconButton
              as={YamadaLink}
              variant="ghost"
              m={0}
              size="md"
              h="36px"
              w="36px"
              href={project.githubLink}
              isExternal
              icon={<Icon icon={faGithub} />}
            />
          </CardFooter>
        </Card>
      ))}
    </Wrap>
  )
})

ProjectsCard.displayName = "ProjectsCard"
