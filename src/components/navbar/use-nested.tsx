import { useTranslations } from "next-intl"
import {
  AnalyticsIcon,
  ChatIcon,
  Connect4Icon,
  DarkHatenaIcon,
  DarkNoteIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  KeyboardIcon,
  LightHatenaIcon,
  LightNoteIcon,
  LinkedInIcon,
  SearchIcon,
  TwitterIcon,
  UniversityIcon,
  YouTubeIcon,
} from "components/icons"

type NestedType = {
  [key: string]: {
    href: string
    text: string
    icon: JSX.Element
    description: string
  }[]
}

function useNested(name: string) {
  const t = useTranslations("header")
  const nested: NestedType = {
    blog: [
      {
        href: "https://taroj1205.hatenablog.com",
        text: t("posts.hatenablog.name"),
        icon: (
          <>
            <DarkHatenaIcon />
            <LightHatenaIcon />
          </>
        ),
        description: "",
      },
      {
        href: "https://note.com/taroj1205",
        text: "note",
        icon: (
          <>
            <DarkNoteIcon />
            <LightNoteIcon />
          </>
        ),
        description: "",
      },
    ],
    apps: [
      {
        href: "https://chat-taroj.vercel.app/",
        text: t("chat.name"),
        icon: <ChatIcon />,
        description: t("chat.description"),
      },
      {
        href: "https://connect4-taroj.vercel.app/",
        text: t("connect4.name"),
        icon: <Connect4Icon />,
        description: t("connect4.description"),
      },
      {
        href: "https://typing-game-nextjs.vercel.app/",
        text: t("typing.name"),
        icon: <KeyboardIcon />,
        description: t("typing.description"),
      },
      {
        href: "https://taroj.vercel.app/apps/search",
        text: t("search.name"),
        icon: <SearchIcon />,
        description: t("search.description"),
      },
      {
        href: "/uoa",
        text: t("uoa.name"),
        icon: <UniversityIcon />,
        description: t("uoa.description"),
      },
      {
        href: "https://analytics.eu.umami.is/share/nU5pqI425dwMvrAA/taroj1205.netlify.app",
        text: t("analytics.name"),
        icon: <AnalyticsIcon />,
        description: t("analytics.description"),
      },
    ],
    social: [
      {
        href: "https://twitter.com/taroj1205",
        text: "Twitter",
        icon: <TwitterIcon />,
        description: "",
      },
      {
        href: "https://github.com/taroj1205",
        text: "GitHub",
        icon: <GitHubIcon />,
        description: "",
      },
      {
        href: "https://instagram.com/taroj1205",
        text: "Instagram",
        icon: <InstagramIcon />,
        description: "",
      },
      {
        href: "https://youtube.com/@taroj1205",
        text: "YouTube",
        icon: <YouTubeIcon />,
        description: "",
      },
      {
        href: "https://linkedin.com/in/taroj",
        text: "LinkedIn",
        icon: <LinkedInIcon />,
        description: "",
      },
      {
        href: "https://facebook.com/taroj1205",
        text: "Facebook",
        icon: <FacebookIcon />,
        description: "",
      },
    ],
  }
  return nested[name]
}

export const nested = useNested
