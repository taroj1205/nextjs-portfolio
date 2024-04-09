"use client"
import { Box, Text } from "@yamada-ui/react"
import { memo } from "react"
import { Tooltip } from "react-tooltip"

export const DetailTooltip = memo(
  ({
    index,
    text,
    prefix,
  }: {
    index: number
    text: string
    prefix: string
  }) => {
    return (
      <Box as={Tooltip} id={`tooltip-${index}-${prefix}`} place="top-start">
        <Text as="span">{text}</Text>
      </Box>
    )
  },
)

DetailTooltip.displayName = "DetailTooltip"
