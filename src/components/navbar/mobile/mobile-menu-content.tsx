import { ButtonGroup, Divider, Heading, VStack } from "@yamada-ui/react"
import { memo } from "react"
import { MenuItemComponent } from "./mobile-item-component"
import type { DropdownProps } from "components/navbar/dropdown"
import { nested } from "components/navbar/use-nested"
import { getDictionary } from "lib/dictionaries"

export const MobileMenuContent = memo(({ locale }: { locale: string }) => {
  const { header } = getDictionary(locale)

  const renderMenuItems = (items: DropdownProps["items"]) =>
    items.map((item) => <MenuItemComponent key={item.href} {...item} />)

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
