import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Divider,
  IconButton,
  Link,
  Wrap,
  HStack,
  Spacer,
} from "@yamada-ui/react"
import type { StaticImageData } from "next/image"
import Image from "next/image"
import appPyImage from "../../assets/projects/app_py.webp"
import chatImage from "../../assets/projects/chat.webp"
import connect4Image from "../../assets/projects/connect-4.webp"
import hideTwitterBotsImage from "../../assets/projects/hide-twitter-bots.webp"
import portfolioImage from "../../assets/projects/portfolio.webp"
import reversiImage from "../../assets/projects/reversi.webp"
import saveTwitterLinksImage from "../../assets/projects/save-twitter-links.webp"
import typingGameImage from "../../assets/projects/typing-game.webp"
import unityTypingGameImage from "../../assets/projects/unity-typing.webp"
import { GitHubIcon } from "components/icons"
import { getDictionary } from "lib/dictionaries"

export interface Project {
  title: string
  description: string
  thumbnail: string | StaticImageData
  lang: string
  framework: string
  link: string
  githubLink: string
}

export const ProjectsCard = ({ locale }: { locale: string }) => {
  const { projects } = getDictionary(locale)

  const projectsArray = [
    {
      title: projects.portfolio.title,
      description: projects.portfolio.description,
      thumbnail: portfolioImage,
      lang: "JavaScript/Typescript",
      framework: "Next.js",
      link: "https://taroj.vercel.app",
      githubLink: "https://github.com/taroj1205/portfolio",
    },
    {
      title: projects.saveTwitterLinks.title,
      description: projects.saveTwitterLinks.description,
      thumbnail: saveTwitterLinksImage,
      lang: "JavaScript/Typescript",
      framework: "Chrome",
      link: "https://github.com/taroj1205/chrome-twitter-link/releases/latest",
      githubLink: "https://github.com/taroj1205/chrome-twitter-link",
    },
    {
      title: projects.hideTwitterBots.title,
      description: projects.hideTwitterBots.description,
      thumbnail: hideTwitterBotsImage,
      lang: "JavaScript/Typescript",
      framework: "Chrome",
      link: "https://github.com/taroj1205/chrome-twitter-bots/releases/latest",
      githubLink: "https://github.com/taroj1205/chrome-twitter-bots",
    },
    {
      title: projects.typingGame.title,
      description: projects.typingGame.description,
      thumbnail: typingGameImage,
      lang: "JavaScript/TypeScript",
      framework: "Next.js",
      link: "https://typing-game-nextjs.vercel.app/",
      githubLink: "https://github.com/taroj1205/nextjs-typing-game",
    },
    {
      title: projects.connect4.title,
      description: projects.connect4.description,
      thumbnail: connect4Image,
      lang: "JavaScript/Typescript",
      framework: "Next.js",
      link: "https://connect4-taroj.vercel.app/",
      githubLink: "https://github.com/taroj1205/nextjs-connect4",
    },
    {
      title: projects.typingGameUnity.title,
      description: projects.typingGameUnity.description,
      thumbnail: unityTypingGameImage,
      lang: "C#",
      framework: "Unity",
      link: "https://github.com/taroj1205/Typing-Game",
      githubLink: "https://github.com/taroj1205/Typing-Game",
    },
    {
      title: projects.typingGameFlask.title,
      description: projects.typingGameFlask.description,
      thumbnail: appPyImage,
      lang: "JavaScript",
      framework: "Flask/SQLite3",
      link: "https://taroj1205.github.io/typing/",
      githubLink:
        "https://github.com/taroj1205/taroj1205.github.io/tree/main/typing",
    },
    {
      title: projects.reversi.title,
      description: projects.reversi.description,
      thumbnail: reversiImage,
      lang: "JavaScript/Typescript",
      framework: "Next.js",
      link: "https://nextjs-reversi.vercel.app/",
      githubLink: "https://github.com/taroj1205/nextjs-reversi",
    },
    {
      title: projects.chatApp.title,
      description: projects.chatApp.description,
      thumbnail: chatImage,
      lang: "JavaScript/TypeScript",
      framework: "Next.js",
      link: "https://chat-taroj.vercel.app/",
      githubLink: "https://github.com/taroj1205/chat",
    },
  ]

  return (
    <Wrap gap={4}>
      {projectsArray.map((project: Project) => (
        <Card
          key={project.githubLink}
          bg={["#f0f4f8", "#171a1c"]}
          variant="outline"
          w="320px"
          h="350px"
        >
          <CardHeader maxH={318} roundedTop="md" overflow="hidden" p={0}>
            <Image
              src={project.thumbnail}
              alt={project.description}
              height={350}
              style={{ height: "auto", width: "100%" }}
              sizes="(max-width: 600px) 284px, (max-width: 900px) 384px, 784px"
              loading="lazy"
            />
          </CardHeader>
          <CardBody bg={["#fbfcfe", "#0b0d0e"]}>
            <Link
              href={project.link}
              isExternal
              fontSize="lg"
              color={["blue.600", "link"]}
            >
              {project.title}
            </Link>
            <Text fontSize="md">{project.description}</Text>
          </CardBody>
          <Divider orientation="horizontal" />
          <CardFooter as={HStack} pl="md" pr="xs" py="xs">
            <Text fontSize="sm">{project.lang}</Text>
            <Divider orientation="vertical" h="50%" />
            <Text fontSize="sm">{project.framework}</Text>
            <Spacer />
            <IconButton
              as={Link}
              variant="ghost"
              m={0}
              size="md"
              h="36px"
              w="36px"
              href={project.githubLink}
              isExternal
              icon={<GitHubIcon />}
              aria-label="GitHub"
            />
          </CardFooter>
        </Card>
      ))}
    </Wrap>
  )
}
