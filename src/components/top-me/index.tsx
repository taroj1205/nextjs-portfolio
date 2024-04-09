import { VStack } from "@yamada-ui/react"
import { Name } from "./name"
import { Socials } from "./socials"

export const TopMe = ({ locale }: { locale: string }) => {
  return (
    <VStack gap="1">
      <Name locale={locale} />
      <Socials />
    </VStack>
  )
}
