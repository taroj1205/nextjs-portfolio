"use client"
import { useColorMode, Box, IconButton } from "@yamada-ui/react"
import { memo } from "react"
import { MoonIcon, SunIcon } from "components/icons"

export const ThemeSwitcher = memo(({ locale }: { locale: string }) => {
  const { toggleColorMode } = useColorMode()

  return (
    <Box>
      <IconButton
        type="button"
        title={locale === "ja" ? "テーマを変える" : "Switch Theme"}
        rounded="full"
        onClick={toggleColorMode}
        _focus={{
          outline: "3px solid",
          outlineColor: "hsla(210, 50%, 85%, 0.5)",
        }}
        variant="ghost"
        transitionDuration="300ms"
      >
        <MoonIcon display={["none", "block"]} color="indigo.500" size="2xl" />
        <SunIcon display={["block", "none"]} color="yellow.500" size="2xl" />
      </IconButton>
    </Box>
  )
})

ThemeSwitcher.displayName = "ThemeSwitcher"
