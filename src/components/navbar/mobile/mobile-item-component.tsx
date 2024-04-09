import { Button, Link } from "@yamada-ui/react"

export const MenuItemComponent = ({
  icon,
  text,
  href,
}: {
  icon: JSX.Element
  text: string
  href: string
}) => (
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
)
