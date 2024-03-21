"use client";
import {
	Button,
	useColorMode,
	Popover,
	PopoverContent,
	PopoverBody,
  PopoverTrigger,
  Radio,
  RadioGroup
} from "@yamada-ui/react";
import { memo } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeSwitcher = memo(() => {
  const { changeColorMode, internalColorMode, colorMode } = useColorMode();

	return (
		<div className="fixed top-2 right-2 z-50">
			<Popover closeOnButton closeOnBlur>
				<PopoverTrigger>
					<Button>{colorMode === "light" ? <FiSun /> : <FiMoon />}</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverBody>
						<RadioGroup direction="column" value={internalColorMode} onChange={changeColorMode}>
							<Radio value="light">Light</Radio>
							<Radio value="dark">Dark</Radio>
							<Radio value="system">System</Radio>
						</RadioGroup>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</div>
	);
});

ThemeSwitcher.displayName = "ThemeSwitcher";
