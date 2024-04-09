import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { Button, Link, Text } from "@yamada-ui/react"
import { memo } from "react"

export const GitHubLink = memo(() => {
  return (
    <Button
      variant="ghost"
      as={Link}
      href="https://github.com/taroj1205"
      isExternal
      _hover={{ color: ["black", "white"], textDecoration: "none" }}
      py={1}
      px={2}
      w={{ base: "auto", md: "6rem" }}
      color={["gray.600", "gray.400"]}
      transitionDuration="300ms"
      gap={2}
      justifyContent="center"
    >
      <Icon icon={faGithub} size="2xl" />
      <Text>GitHub</Text>
    </Button>
  )
})

GitHubLink.displayName = "GitHubLink"
