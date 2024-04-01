import {
  Box,
  Center,
  DiscList,
  Heading,
  ListItem,
  VStack,
  Link as YamadaLink,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { BriefIntro } from "@/components/BriefIntro"
import { CarouselComponent } from "@/components/Carousel"
import { ContentDivider } from "@/components/Dividers"
import { Languages, ProjectsCard } from "@/components/Programming"
import { TopMe } from "@/components/TopMe"

export default function Home() {
  const t = useTranslations()
  return (
    <VStack maxW="6xl" mx="auto">
      <TopMe />
      <Box maxW="90vw" as={Center}>
        <CarouselComponent />
      </Box>
      <ContentDivider />
      <BriefIntro />
      <ContentDivider />
      <VStack>
        <Heading as="h2">{t("heading.programming")}</Heading>
        <Heading as="h3" fontSize="2xl">
          {t("heading.open source")}
        </Heading>
        <DiscList fontSize="lg">
          <ListItem>
            {t("open source.yamada.title")}
            <DiscList>
              <ListItem>
                <YamadaLink
                  href="https://yamada-ui.com/community/team"
                  isExternal
                >
                  https://yamada-ui.com/community/team
                </YamadaLink>
              </ListItem>
            </DiscList>
          </ListItem>
        </DiscList>
        <Languages />
      </VStack>
      <ContentDivider />

      <Heading as="h2">{t("projects.title")}</Heading>
      <ProjectsCard />
    </VStack>
  )
}
