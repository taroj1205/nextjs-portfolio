import { Heading, Text, VStack } from "@yamada-ui/react"
import { getDictionary } from "lib/dictionaries"

export const Languages = ({ locale }: { locale: string }) => {
  const { languages } = getDictionary(locale)
  return (
    <VStack>
      <Heading as="h3" fontSize="2xl">
        {languages.heading}
      </Heading>
      <Text fontSize="lg">
        JavaScript, TypeScript, HTML, CSS, Markdown, Python
      </Text>

      <Heading as="h3" fontSize="2xl">
        {languages.framework}
      </Heading>
      <Text fontSize="lg">
        Next.js, Express, React.js, Node.js, Flask, Tailwind CSS
      </Text>

      <Heading as="h3" fontSize="2xl">
        UI {languages.library}
      </Heading>
      <Text fontSize="lg">
        Next UI, Chakra UI, Material UI, Joy UI, Yamada UI
      </Text>

      <Heading as="h3" fontSize="2xl">
        SQL
      </Heading>
      <Text fontSize="lg">MySQL, SQLite, PostgreSQL</Text>

      <Heading as="h3" fontSize="2xl">
        {languages["third party"]}
      </Heading>
      <Text fontSize="lg">Supabase, Vercel, Netlify, GitHub, Auth0, Clerk</Text>
    </VStack>
  )
}
