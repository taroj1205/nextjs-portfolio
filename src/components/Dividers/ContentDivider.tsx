import { Divider } from "@yamada-ui/react"
import { memo } from "react"

export const ContentDivider = memo(() => {
  return (
    <Divider
      w="full"
      my={4}
      border="none"
      p="1px"
      bgGradient="linear(to-r, transparent, gray.500, transparent)"
    />
  )
})

ContentDivider.displayName = "ContentDivider"
