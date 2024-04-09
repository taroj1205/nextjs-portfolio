"use client"
import { Box, Text } from "@yamada-ui/react"
import { memo } from "react"
import { Tooltip } from "react-tooltip"

export const DetailTooltip = memo(
  ({ index, text }: { index: number; text: string }) => {
    return (
      <Box as={Tooltip} id={`tooltip-${index}-location`} place="top-start">
        <Text as="span">{text}</Text>
      </Box>
    )
  },
)

DetailTooltip.displayName = "DetailTooltip"
