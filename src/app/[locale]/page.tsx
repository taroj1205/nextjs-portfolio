import { Box, Center, VStack } from "@yamada-ui/react"
import { BriefIntro } from "components/brief-intro"
import { CarouselComponent } from "components/carousel"
import { ContentDivider } from "components/dividers"
import { Programming } from "components/programming"
import { TopMe } from "components/top-me"

export default function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  return (
    <VStack maxW="6xl" mx="auto">
      <TopMe locale={locale} />
      <Box maxW="90vw" as={Center}>
        <CarouselComponent />
      </Box>
      <ContentDivider />
      <BriefIntro locale={locale} />
      <ContentDivider />
      <Programming locale={locale} />
    </VStack>
  )
}
