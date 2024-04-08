import { ButtonGroup, Divider, Heading, VStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { memo } from "react"
import { MenuItemComponent } from "./mobile-item-component"
import type { DropdownProps } from "components/navbar/dropdown"
import { nested } from "components/navbar/use-nested"

export const MobileMenuContent = memo(() => {
  const t = useTranslations("header")

  const renderMenuItems = (items: DropdownProps["items"]) =>
    items.map((item) => <MenuItemComponent key={item.href} {...item} />)

  return (
    <VStack>
      <Heading as="h4" size="sm" textAlign="center">
        {t("social")}
      </Heading>
      <ButtonGroup direction="column" gap="sm">
        {renderMenuItems(nested("social"))}
      </ButtonGroup>
      <Divider />
      <Heading as="h4" size="sm" textAlign="center">
        {t("blog")}
      </Heading>
      <ButtonGroup direction="column" gap="sm">
        {renderMenuItems(nested("blog"))}
      </ButtonGroup>
      <Divider />
      <Heading as="h4" size="sm" textAlign="center">
        {t("apps")}
      </Heading>
      <ButtonGroup direction="column" gap="sm">
        {renderMenuItems(nested("apps"))}
      </ButtonGroup>
    </VStack>
  )
})

MobileMenuContent.displayName = "MobileMenuContent"
