"use client";
import { CssVarsProvider } from "@mui/joy";
import { ColorModeScript, UIProvider, createColorModeManager, defaultConfig } from "@yamada-ui/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const colorModeManager = createColorModeManager("cookie");
  const currentColorMode = colorModeManager.get();

	console.log(currentColorMode);
  
  return (
		<CssVarsProvider defaultMode="light">
			<UIProvider colorModeManager={colorModeManager}>
				<ColorModeScript
					type="cookie"
					nonce="testing"
					initialColorMode={defaultConfig.initialColorMode}
				/>
				{children}
			</UIProvider>
		</CssVarsProvider>
	);
};