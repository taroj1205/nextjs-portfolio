import {
  DiscList,
  ListItem,
  Heading,
  VStack,
} from "@yamada-ui/react"
import { useLocale, useTranslations } from "next-intl"
import type { ReactNode} from "react";
import { memo } from "react"
import { DrawerComponent } from "./DrawerComponent"
import { SchoolHistory } from "./SchoolHistory"

const images: {
  [key: string]: { video?: string; image?: string; component?: ReactNode }
} = {
  me: { image: "/carousel/profile.webp" },
  kendama: {
    video: "9Y-NWFB--f8",
  },
  juggling: {
    video: "TaWXgxbzoOI",
  },
  school: {
    component: <SchoolHistory />,
  },
}

export const BriefIntro = memo(() => {
  const t = useTranslations("brief intro")
  const locale = useLocale()
  return (
    <VStack>
      <Heading as="h2" fontSize="3xl">
        {t("title")}
      </Heading>
      <DiscList fontSize="lg">
        <ListItem>{t("born")}</ListItem>
        <ListItem>{t("age")}</ListItem>
        <ListItem>{t("high school")}</ListItem>
        <ListItem>{t("university")}</ListItem>
        <DiscList>
          <ListItem>{t("bachelor")}</ListItem>
        </DiscList>
        <ListItem>
          <DrawerComponent
            title={
              locale === "en"
                ? "Been to 11 schools in 3 countries by the end of 2023."
                : "2023年までに３カ国11校経験しました。"
            }
            description={
              locale === "en"
                ? "Japan, New Zealand and The Philippines"
                : "日本、ニュージーランドとフィリピン"
            }
            imageRef={images.school}
          />
        </ListItem>
      </DiscList>
      <Heading as="h3" fontSize="2xl">
        {t("lived in.heading")}
      </Heading>
      <DiscList fontSize="lg">
        <ListItem>{t("lived in.japan")}</ListItem>
        <ListItem>{t("lived in.philippines")}</ListItem>
        <ListItem>{t("lived in.newzealand")}</ListItem>
      </DiscList>
      <Heading as="h3" fontSize="2xl">
        {t("hobbies.heading")}
      </Heading>
      <DiscList fontSize="lg">
        <ListItem>{t("hobbies.programming")}</ListItem>
        <ListItem>{t("hobbies.soccer")}</ListItem>
        <ListItem>
          <DrawerComponent
            title={locale === "en" ? "Kendama (けん玉)" : "けん玉"}
            description={
              locale === "en" ? "Japanese Traditional Toy like Yo-yo" : ""
            }
            imageRef={images.kendama}
          />{" "}
          {locale === "en" && "(Japanese Traditional Toy like Yo-yo)"}
        </ListItem>
        <ListItem>
          <DrawerComponent
            title={locale === "en" ? "Juggling" : "ジャグリング"}
            description={
              locale === "en"
                ? "This is me practising juggling."
                : "ジャグリングを練習中です。"
            }
            imageRef={images.juggling}
          />
        </ListItem>
        <ListItem>{t("hobbies.shorinji kempo")}</ListItem>
        <ListItem>{t("hobbies.table tennis")}</ListItem>
        <ListItem>{t("hobbies.tennis")}</ListItem>
        <ListItem>{t("hobbies.basketball")}</ListItem>
        <ListItem>{t("hobbies.badminton")}</ListItem>
        <ListItem>{t("hobbies.volleyball")}</ListItem>
        <ListItem>{t("hobbies.baseball")}</ListItem>
        <ListItem>{t("hobbies.softball")}</ListItem>
        <ListItem>{t("hobbies.running")}</ListItem>
        <ListItem>{t("hobbies.pen spinning")}</ListItem>
      </DiscList>
      <Heading as="h3" fontSize="2xl">
        {t("part time job.heading")}
      </Heading>
      <DiscList fontSize="lg">
        <ListItem>{t("part time job.westlake")}</ListItem>
      </DiscList>
    </VStack>
  )
})

BriefIntro.displayName = "BriefIntro"
