import { Button, Link } from "@yamada-ui/react"
import { memo } from "react"

export const MenuItemComponent = memo(
  ({ icon, text, href }: { icon: JSX.Element; text: string; href: string }) => (
    <Button
      as={Link}
      href={href}
      isExternal
      _hover={{ textDecoration: "none" }}
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
