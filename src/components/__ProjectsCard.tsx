import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  HStack,
} from "@yamada-ui/react"

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
    thumbnail:
      "https://user-images.githubusercontent.com/61367823/218281409-3a401dec-83d4-4689-bbfb-766ee6d9a07b.mp4",
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
    thumbnail: "/videos/chat.mp4",
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
]

interface Project {
  title: string
  description: string
  thumbnail: string
  video: boolean
  lang: string
  framework: string
  link: string
  githubLink: string
}

export const ProjectsCard = () => {
  return (
    <HStack wrap="wrap" gap={5}>
      {projects.map((project: Project, index: number) => (
        <Card
          key={index}
          direction="column"
          overflow="hidden"
          maxW="320px"
          maxH="320px"
          variant="outline"
          outlineColor="#2d3134"
          className="bg-[#0b0d0e]"
        >
          {project.video ? (
            <video src={project.thumbnail} autoPlay loop muted playsInline />
          ) : (
            <Image
              src={project.thumbnail}
              alt={project.title}
              objectFit="cover"
              maxW="318px"
              maxH="159px"
            />
          )}

          <CardHeader>
            <Heading size="sm">{project.title}</Heading>
          </CardHeader>

          <CardBody>
            <Text>{project.description}</Text>
          </CardBody>

          <CardFooter backgroundColor="#171a1c">
            <Text size="xs">{project.lang}</Text>
          </CardFooter>
        </Card>
      ))}
    </HStack>
  )
}
