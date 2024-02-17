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
	ui,
	useColorModeValue,
	useDisclosure,
} from "@yamada-ui/react";
import { FiMoon, FiSun, FiMonitor } from "react-icons/fi";

export const ThemeSwitcher = () => {
	const { changeColorMode, internalColorMode, colorMode } = useColorMode();
	const menuOptionItemProps: MenuOptionItemProps = {
		flexDirection: "row-reverse",
		justifyContent: "space-between",
	};

	const {isOpen, onOpen, onClose} = useDisclosure()


	return (
		<div className="relative inline-block">
			<Menu
				isOpen={isOpen}
				onClose={onClose}
				onOpen={onOpen}
				closeOnSelect
				closeOnEsc>
				<MenuButton
					as="button"
					type="button"
					title="Switch theme"
					data-open={isOpen}
					className={`switch-button group p-2 flex items-center justify-center w-fit mr-1 md:mr-0 rounded-md duration-200 data-[open=true]:border-blue-300 data-[open=true]:ring data-[open=true]:ring-blue-200 data-[open=true]:ring-opacity-50`}>
					<FiMoon className="text-indigo-500 w-6 h-6 moon group-active:scale-95" />
					<FiSun className="text-yellow-500 w-6 h-6 sun group-active:scale-95" />
				</MenuButton>

				<MenuList>
					<MenuOptionGroup
						title="theme"
						type="radio"
						onChange={changeColorMode}
						value={internalColorMode}>
						<MenuOptionItem {...menuOptionItemProps} value="dark">
							<ui.span className="flex items-center gap-2">
								<Icon as={FiMoon} />
								<div>Dark</div>
							</ui.span>
						</MenuOptionItem>
						<MenuOptionItem {...menuOptionItemProps} value="light">
							<ui.span className="flex items-center gap-2">
								<Icon as={FiSun} />
								<div>Light</div>
							</ui.span>
						</MenuOptionItem>
						<MenuOptionItem {...menuOptionItemProps} value="system">
							<ui.span className="flex items-center gap-2">
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
