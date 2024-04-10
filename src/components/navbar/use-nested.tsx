import {
  AnalyticsIcon,
  ChatIcon,
  Connect4Icon,
  FacebookIcon,
  GitHubIcon,
  HatenaIcon,
  InstagramIcon,
  KeyboardIcon,
  LinkedInIcon,
  NoteIcon,
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
  }[]
}

function useNested({ name, locale }: { name: string; locale: string }) {
  const nested: NestedType = {
    blog: [
      {
        href: "https://taroj1205.hatenablog.com",
        text: locale === "ja" ? "はてなブログ" : "Hatena Blog",
        icon: <HatenaIcon size="4xl" />,
      },
      {
        href: "https://note.com/taroj1205",
        text: "note",
        icon: <NoteIcon size="4xl" />,
      },
    ],
    apps: [
      {
        href: "https://chat-taroj.vercel.app/",
        text: locale === "ja" ? "チャットアプリ" : "Chat App",
        icon: <ChatIcon size="4xl" />,
      },
      {
        href: "https://connect4-taroj.vercel.app/",
        text: "Connect 4",
        icon: <Connect4Icon size="4xl" />,
      },
      {
        href: "https://typing-game-nextjs.vercel.app/",
        text: locale === "ja" ? "タイピングゲーム" : "Typing Game",
        icon: <KeyboardIcon size="4xl" />,
      },
      {
        href: "https://taroj.vercel.app/apps/search",
        text: locale === "ja" ? "検索アプリ" : "Search App",
        icon: <SearchIcon size="4xl" />,
      },
      {
        href: "/uoa",
        text: locale === "ja" ? "UoAのリンク等" : "UoA Links",
        icon: <UniversityIcon size="4xl" />,
      },
      {
        href: "https://analytics.eu.umami.is/share/nU5pqI425dwMvrAA/taroj1205.poyo.jp",
        text: locale === "ja" ? "分析" : "Analytics",
        icon: <AnalyticsIcon size="4xl" />,
      },
    ],
    social: [
      {
        href: "https://twitter.com/taroj1205",
        text: "Twitter",
        icon: <TwitterIcon color="blue.400" size="4xl" />,
      },
      {
        href: "https://github.com/taroj1205",
        text: "GitHub",
        icon: <GitHubIcon size="4xl" />,
      },
      {
        href: "https://instagram.com/taroj1205",
        text: "Instagram",
        icon: <InstagramIcon color="pink.600" size="4xl" />,
      },
      {
        href: "https://youtube.com/@taroj1205",
        text: "YouTube",
        icon: <YouTubeIcon size="4xl" />,
      },
      {
        href: "https://linkedin.com/in/taroj",
        text: "LinkedIn",
        icon: <LinkedInIcon color="blue.700" size="4xl" />,
      },
      {
        href: "https://facebook.com/taroj1205",
        text: "Facebook",
        icon: <FacebookIcon color="blue.600" size="4xl" />,
      },
    ],
  }
  return nested[name]
}

export const nested = useNested
