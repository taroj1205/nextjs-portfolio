import { VStack } from "@yamada-ui/react"
import { memo } from "react"
import { Name } from "./name"
import { Socials } from "./socials"

export const TopMe = memo(({ locale }: { locale: string }) => {
  return (
    <VStack gap="1">
      <Name locale={locale} />
      <Socials />
    </VStack>
  )
})

TopMe.displayName = "TopMe"
