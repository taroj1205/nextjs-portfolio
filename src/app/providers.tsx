"use client";
import { CssVarsProvider } from "@mui/joy";
import { ColorModeScript, UIProvider, createColorModeManager, defaultConfig } from "@yamada-ui/react";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const colorModeManager = createColorModeManager("cookie");
  
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<CssVarsProvider defaultMode="dark">
				<UIProvider colorModeManager={colorModeManager}>
					<ColorModeScript
						type="cookie"
						nonce="testing"
						initialColorMode={defaultConfig.initialColorMode}
					/>
					{children}
				</UIProvider>
			</CssVarsProvider>
		</ThemeProvider>
	);
};
