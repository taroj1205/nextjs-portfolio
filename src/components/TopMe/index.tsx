import { VStack } from "@yamada-ui/react"
import { Name } from "./Name"
import { Socials } from "./Socials"
export const TopMe = () => {
  return (
    <VStack gap="1">
      <Name />
      <Socials />
    </VStack>
  )
}
