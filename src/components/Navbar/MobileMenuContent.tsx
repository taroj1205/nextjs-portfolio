import {
  Button,
  ButtonGroup,
  Divider,
  Link,
  Text,
  VStack,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { memo } from "react"
import type { DropdownProps } from "./Dropdown"
import { nested } from "./useNested"

const MenuItemComponent = memo(
  ({ icon, text, href }: { icon: JSX.Element; text: string; href: string }) => (
    <Button
      as={Link}
      href={href}
      isExternal
      variant="ghost"
      leftIcon={icon}
      justifyContent="flex-start"
      size="md"
      fontWeight="normal"
    >
      {text}
    </Button>
  ),
)

MenuItemComponent.displayName = "MenuItemComponent"

export const MobileMenuContent = memo(() => {
  const t = useTranslations("header")

  const renderMenuItems = (items: DropdownProps["items"]) =>
    items.map((item) => <MenuItemComponent key={item.href} {...item} />)

  return (
    <VStack>
      <Text textAlign="center">{t("social")}</Text>
      <ButtonGroup direction="column" gap="sm">
        {renderMenuItems(nested("social"))}
      </ButtonGroup>
      <Divider />
      <Text textAlign="center">{t("blog")}</Text>
      <ButtonGroup direction="column" gap="sm">
        {renderMenuItems(nested("blog"))}
      </ButtonGroup>
      <Divider />
      <Text textAlign="center">{t("apps")}</Text>
      <ButtonGroup direction="column" gap="sm">
        {renderMenuItems(nested("apps"))}
      </ButtonGroup>
    </VStack>
  )
})

MobileMenuContent.displayName = "MobileMenuContent"
