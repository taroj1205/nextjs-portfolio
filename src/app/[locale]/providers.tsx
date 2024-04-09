"use client"
import {
  UIProvider,
  createColorModeManager,
  extendConfig,
} from "@yamada-ui/react"
import type { ReactNode } from "react"

export const Providers = ({ children }: { children: ReactNode }) => {
  const colorModeManager = createColorModeManager("cookie")

  const customConfig = extendConfig({
    initialColorMode: "system",
  })

  return (
    <UIProvider config={customConfig} colorModeManager={colorModeManager}>
      {children}
    </UIProvider>
  )
}
