"use client";
import { UIProvider, createColorModeManager, extendConfig } from "@yamada-ui/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const colorModeManager = createColorModeManager("cookie");
	
	const customConfig = extendConfig({
		initialColorMode: "system",
		breakpoint:	"up"
	});
  
  return (
			<UIProvider config={customConfig} colorModeManager={colorModeManager}>
				{children}
			</UIProvider>
	);
};