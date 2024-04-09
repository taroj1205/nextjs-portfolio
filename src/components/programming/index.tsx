import { DiscList, Heading, Link, ListItem, VStack } from "@yamada-ui/react"
import { Languages } from "./languages"
import { ProjectsCard } from "./projects-card"
import { ContentDivider } from "components/dividers"
import { getDictionary } from "lib/dictionaries"

export const Programming = ({ locale }: { locale: string }) => {
  const dict = getDictionary(locale)
  return (
    <>
      <VStack>
        <Heading as="h2">{dict.heading.programming}</Heading>
        <Heading as="h3" fontSize="2xl">
          {dict.heading["open source"]}
        </Heading>
        <DiscList fontSize="lg">
          <ListItem>
            {dict["open source"]["yamada"].title}
            <DiscList>
              <ListItem>
                <Link
                  href="https://yamada-ui.com/community/team"
                  isExternal
                  color={["blue.600", "link"]}
                >
                  https://yamada-ui.com/community/team
                </Link>
              </ListItem>
            </DiscList>
          </ListItem>
        </DiscList>
        <Languages locale={locale} />
      </VStack>
      <ContentDivider />
      <Heading as="h2">{dict.heading.projects}</Heading>
      <ProjectsCard locale={locale} />
    </>
  )
}
