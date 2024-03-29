"use client"
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Image,
  Text,
  DiscList,
  ListItem,
  Heading,
  Box,
} from "@yamada-ui/react"
import { useLocale, useTranslations } from "next-intl"
import type { ReactNode, FC } from "react"
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

export const BriefIntro = () => {
  const t = useTranslations("brief intro")
  const locale = useLocale()
  return (
    <Box className="mt-8 space-y-4">
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
    </Box>
  )
}

type DrawerComponentProps = {
  title: string
  description?: string
  imageRef: { component?: ReactNode; image?: string; video?: string }
}

const DrawerComponent: FC<DrawerComponentProps> = ({
  title,
  description,
  imageRef,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <button onClick={onOpen} className="underline hover:no-underline">
        {title}
      </button>
      <Drawer
        placement="bottom"
        isOpen={isOpen}
        size="sm"
        maxH="95%"
        onClose={onClose}
        closeOnDrag
      >
        <div className="max-w-4xl w-full mx-auto">
          <DrawerHeader>
            <Heading mx="auto">{title}</Heading>
          </DrawerHeader>

          <DrawerBody>
            {description ? (
              <Text fontSize="lg" mx="auto">
                {description}
              </Text>
            ) : null}
            {imageRef.video ? (
              <iframe
                width="315"
                height="560"
                className="max-h-[70vh] mx-auto"
                src={`https://www.youtube.com/embed/${imageRef.video}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : imageRef.image ? (
              <Image
                className="max-h-[300px]"
                src={imageRef.image}
                alt={title}
              />
            ) : imageRef.component ? (
              imageRef.component
            ) : null}
          </DrawerBody>

          <DrawerFooter>
            <Button
              className="mx-auto"
              variant="outline"
              colorScheme="gray"
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </div>
      </Drawer>
    </>
  )
}
