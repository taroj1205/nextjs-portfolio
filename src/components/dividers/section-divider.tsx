import { Divider } from "@yamada-ui/react"
import { memo } from "react"

export const SectionDivider = memo(() => {
  return (
    <Divider
      border="none"
      py="1px"
      bgGradient={[
        "linear(to-r, transparent, gray.200, transparent)",
        "linear(to-r, transparent, gray.800, transparent)",
      ]}
    />
  )
})

SectionDivider.displayName = "SectionDivider"
