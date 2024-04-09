import { DiscList, ListItem, Heading, VStack, Text } from "@yamada-ui/react"
import { memo } from "react"
import { Drawer } from "./drawer"
import { SchoolHistory } from "./school-history"
import { getDictionary } from "lib/dictionaries"

export const BriefIntro = memo(({ locale }: { locale: string }) => {
  const { briefIntro } = getDictionary(locale)
  return (
    <VStack>
      <Heading as="h2" fontSize="3xl">
        {briefIntro.title}
      </Heading>
      <DiscList fontSize="lg">
        <ListItem>{briefIntro.born}</ListItem>
        <ListItem>{briefIntro.age}</ListItem>
        <ListItem>{briefIntro["high school"]}</ListItem>
        <ListItem>{briefIntro.university}</ListItem>
        <DiscList>
          <ListItem>{briefIntro["bachelor"]}</ListItem>
        </DiscList>
        <ListItem>
          <Drawer
            title={briefIntro.drawer.schools.title}
            description={briefIntro.drawer.schools.description}
            component={<SchoolHistory locale={locale} />}
          />
        </ListItem>
      </DiscList>
      <Heading as="h3" fontSize="2xl">
        {briefIntro["lived in"].heading}
      </Heading>
      <DiscList fontSize="lg">
        <ListItem>{briefIntro["lived in"].japan}</ListItem>
        <ListItem>{briefIntro["lived in"].philippines}</ListItem>
        <ListItem>{briefIntro["lived in"].newzealand}</ListItem>
      </DiscList>
      <Heading as="h3" fontSize="2xl">
        {briefIntro.hobbies.heading}
      </Heading>
      <DiscList fontSize="lg">
        <ListItem>{briefIntro.hobbies.programming}</ListItem>
        <ListItem>{briefIntro.hobbies.soccer}</ListItem>
        <ListItem>
          <Drawer
            title={briefIntro.drawer.kendama.title}
            description={briefIntro.drawer.kendama.description}
            video="9Y-NWFB--f8"
          />
          {locale === "en" ? (
            <Text>({briefIntro.drawer.kendama.description})</Text>
          ) : null}
        </ListItem>
        <ListItem>
          <Drawer
            title={briefIntro.drawer.juggling.title}
            description={briefIntro.drawer.juggling.description}
            video="TaWXgxbzoOI"
          />
        </ListItem>
        <ListItem>{briefIntro.hobbies["shorinji kempo"]}</ListItem>
        <ListItem>{briefIntro.hobbies["table tennis"]}</ListItem>
        <ListItem>{briefIntro.hobbies.tennis}</ListItem>
        <ListItem>{briefIntro.hobbies.basketball}</ListItem>
        <ListItem>{briefIntro.hobbies.badminton}</ListItem>
        <ListItem>{briefIntro.hobbies.volleyball}</ListItem>
        <ListItem>{briefIntro.hobbies.baseball}</ListItem>
        <ListItem>{briefIntro.hobbies.softball}</ListItem>
        <ListItem>{briefIntro.hobbies.running}</ListItem>
        <ListItem>{briefIntro.hobbies["pen spinning"]}</ListItem>
      </DiscList>
      <Heading as="h3" fontSize="2xl">
        {briefIntro["part time job"].heading}
      </Heading>
      <DiscList fontSize="lg">
        <ListItem>{briefIntro["part time job"].westlake}</ListItem>
      </DiscList>
    </VStack>
  )
})

BriefIntro.displayName = "BriefIntro"
