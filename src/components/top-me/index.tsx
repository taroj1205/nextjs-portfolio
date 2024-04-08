import { VStack } from "@yamada-ui/react"
import { Name } from "./name"
import { Socials } from "./socials"
export const TopMe = () => {
  return (
    <VStack gap="1">
      <Name />
      <Socials />
    </VStack>
  )
}
