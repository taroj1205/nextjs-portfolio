import { Button, Link, Text } from "@yamada-ui/react"
import { memo } from "react"
import { GitHubIcon } from "components/icons"

export const GitHubLink = memo(() => {
  return (
    <Button
      variant="ghost"
      as={Link}
      href="https://github.com/taroj1205"
      isExternal
      _nativeHover={{ color: ["black", "white"], textDecoration: "none" }}
      py={1}
      px={2}
      title="GitHub"
      w={{ base: "auto", md: "6rem" }}
      color={["gray.600", "gray.400"]}
      transitionDuration="300ms"
      gap={2}
      justifyContent="center"
      fontWeight="normal"
    >
      <GitHubIcon size="2xl" />
      <Text>GitHub</Text>
    </Button>
  )
})

GitHubLink.displayName = "GitHubLink"
