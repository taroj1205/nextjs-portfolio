"use client";
import { CssVarsProvider } from "@mui/joy";
import { ColorModeScript, UIProvider } from "@yamada-ui/react";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider attribute="class">
			<CssVarsProvider defaultMode="dark">
				<UIProvider>
					<ColorModeScript initialColorMode={"dark"} />
					{children}
				</UIProvider>
			</CssVarsProvider>
		</ThemeProvider>
	);
};
