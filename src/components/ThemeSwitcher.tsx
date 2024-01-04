"use client";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuOptionItem,
	MenuOptionGroup,
	Button,
	useColorMode,
	MenuOptionItemProps,
	Icon,
	useColorModeValue,
	ui,
} from "@yamada-ui/react";
import { useEffect } from "react";
import { FiMoon, FiSun, FiMonitor } from "react-icons/fi";

export const ThemeSwitcher = () => {
	const { changeColorMode, internalColorMode, colorMode } = useColorMode();
	const menuOptionItemProps: MenuOptionItemProps = {
		flexDirection: "row-reverse",
		justifyContent: "space-between",
	};

	useEffect(() => {
		// set html attribute data-data-joy-color-scheme to colorMode
		document.documentElement.setAttribute("data-joy-color-scheme", colorMode);
	}, [colorMode])

	return (
		<div className="fixed top-2 right-2 z-50">
			<Menu closeOnSelect closeOnEsc>
				<MenuButton
					variant={"solid"}
					as={Button}
					width={"3.5rem"}
					height={"3.5rem"}>
					<div className="flex items-center justify-center">
						{colorMode === "light" ? (
							<FiSun size={30} className="text-yellow-500" />
						) : (
							<FiMoon size={30} className="text-indigo-500" />
						)}
					</div>
				</MenuButton>

				<MenuList>
					<MenuOptionGroup
						title="theme"
						type="radio"
						onChange={changeColorMode}
						value={internalColorMode}>
						<MenuOptionItem {...menuOptionItemProps} value="dark">
							<ui.span className="flex items-center justify-center gap-1">
								<Icon as={FiMoon} />
								<div>Dark</div>
							</ui.span>
						</MenuOptionItem>
						<MenuOptionItem {...menuOptionItemProps} value="light">
							<ui.span className="flex items-center  gap-2">
								<Icon as={FiSun} />
								<div>Light</div>
							</ui.span>
						</MenuOptionItem>
						<MenuOptionItem {...menuOptionItemProps} value="system">
							<ui.span className="flex items-center  gap-2">
								<Icon as={FiMonitor} />
								<div>System</div>
							</ui.span>
						</MenuOptionItem>
					</MenuOptionGroup>
				</MenuList>
			</Menu>
		</div>
	);
};
