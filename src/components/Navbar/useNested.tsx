import { useTranslations } from "next-intl"
import { icons } from "../Icons"

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
            {icons.hatena_dark}
            {icons.hatena}
          </>
        ),
        description: "",
      },
      {
        href: "https://note.com/taroj1205",
        text: "note",
        icon: (
          <>
            {icons.note_dark}
            {icons.note}
          </>
        ),
        description: "",
      },
    ],
    apps: [
      {
        href: "https://chat-taroj.vercel.app/",
        text: t("chat.name"),
        icon: icons.chat,
        description: t("chat.description"),
      },
      {
        href: "https://connect4-taroj.vercel.app/",
        text: t("connect4.name"),
        icon: icons.connect4,
        description: t("connect4.description"),
      },
      {
        href: "https://typing-game-nextjs.vercel.app/",
        text: t("typing.name"),
        icon: icons.typing,
        description: t("typing.description"),
      },
      {
        href: "https://taroj.vercel.app/apps/search",
        text: t("search.name"),
        icon: icons.search,
        description: t("search.description"),
      },
      {
        href: "/uoa",
        text: t("uoa.name"),
        icon: icons.university,
        description: t("uoa.description"),
      },
      {
        href: "https://analytics.eu.umami.is/share/nU5pqI425dwMvrAA/taroj1205.netlify.app",
        text: t("analytics.name"),
        icon: icons.analytics,
        description: t("analytics.description"),
      },
    ],
    social: [
      {
        href: "https://twitter.com/taroj1205",
        text: "Twitter",
        icon: icons.twitter,
        description: "",
      },
      {
        href: "https://github.com/taroj1205",
        text: "GitHub",
        icon: icons.github,
        description: "",
      },
      {
        href: "https://instagram.com/taroj1205",
        text: "Instagram",
        icon: icons.instagram,
        description: "",
      },
      {
        href: "https://youtube.com/@taroj1205",
        text: "YouTube",
        icon: icons.youtube,
        description: "",
      },
      {
        href: "https://linkedin.com/in/taroj",
        text: "LinkedIn",
        icon: icons.linkedin,
        description: "",
      },
      {
        href: "https://facebook.com/taroj1205",
        text: "Facebook",
        icon: icons.facebook,
        description: "",
      },
    ],
  }
  return nested[name]
}

export const nested = useNested
