import { ButtonGroup, Divider, Heading, VStack } from "@yamada-ui/react"
import { memo } from "react"
import { renderMenuItems } from "./render-menu-items"
import { nested } from "components/navbar/use-nested"
import { getDictionary } from "lib/dictionaries"

export const MobileMenuContent = memo(({ locale }: { locale: string }) => {
  const { header } = getDictionary(locale)

  return (
    <VStack>
      <Heading as="h4" size="sm" textAlign="center">
        {header.social}
      </Heading>
      <ButtonGroup direction="column" gap="sm">
        {renderMenuItems(nested({ name: "social", locale }))}
      </ButtonGroup>
      <Divider />
      <Heading as="h4" size="sm" textAlign="center">
        {header.blog}
      </Heading>
      <ButtonGroup direction="column" gap="sm">
        {renderMenuItems(nested({ name: "blog", locale }))}
      </ButtonGroup>
      <Divider />
      <Heading as="h4" size="sm" textAlign="center">
        {header.apps}
      </Heading>
      <ButtonGroup direction="column" gap="sm">
        {renderMenuItems(nested({ name: "apps", locale }))}
      </ButtonGroup>
    </VStack>
  )
})

MobileMenuContent.displayName = "MobileMenuContent"
