"use client";
import { ColorMode, useColorMode } from "@yamada-ui/react";
import { useState, useEffect, useRef } from "react";
import { FiMonitor, FiMoon, FiSun, FiCheck } from "react-icons/fi";

export const ThemeToggle = () => {
	const { changeColorMode, internalColorMode, colorMode } = useColorMode();

	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const setTheme = (theme: ColorMode | "system") => {
		changeColorMode(theme);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<div className="fixed top-4 right-4 text-left z-50" ref={ref}>
			<div>
				<button
					type="button"
					title="Switch theme"
					className={`switch-button p-2 flex items-center justify-center w-fit p-1 mr-1 md:mr-0 rounded-md active:scale-95 duration-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50`}
					onClick={() => setIsOpen(!isOpen)}>
					<FiMoon className="text-indigo-500 w-6 h-6 moon" />
					<FiSun className="text-yellow-500 w-6 h-6 sun" />
				</button>
			</div>
			{isOpen && (
				<div className="popup origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu">
						<button
							type="button"
							title="Switch to light theme"
							className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:dark:bg-[#0d101b] transition-colors duration-200 ease-in-out hover:text-gray-900 dark:hover:text-gray-100 w-full text-left ${
								internalColorMode === "light"
									? "bg-gray-100 dark:dark:bg-[#0d101b]"
									: ""
							}`}
							role="menuitem"
							onClick={() => {
								setTheme("light");
								setIsOpen(false);
							}}>
							<div className="flex flex-row gap-1 items-center">
								<FiSun />
								Light
								{internalColorMode === "light" && (
									<div className="ml-auto">
										<FiCheck className="text-green-500 w-4 h-4" />
									</div>
								)}
							</div>
						</button>
						<button
							className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:dark:bg-[#0d101b] transition-colors duration-200 ease-in-out hover:text-gray-900 dark:hover:text-gray-100 w-full text-left ${
								internalColorMode === "dark"
									? "bg-gray-100 dark:dark:bg-[#0d101b]"
									: ""
							}`}
							role="menuitem"
							title="Switch to dark theme"
							onClick={() => {
								setTheme("dark");
								setIsOpen(false);
							}}>
							<div className="flex flex-row gap-1 items-center">
								<FiMoon />
								Dark
								{internalColorMode === "dark" && (
									<div className="ml-auto">
										<FiCheck className="text-green-500 w-4 h-4" />
									</div>
								)}
							</div>
						</button>
						<button
							className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:dark:bg-[#0d101b] transition-colors duration-200 ease-in-out hover:text-gray-900 dark:hover:text-gray-100 w-full text-left ${
								internalColorMode === "system"
									? "bg-gray-100 dark:dark:bg-[#0d101b]"
									: ""
							}`}
							role="menuitem"
							title="Switch to system theme"
							onClick={() => {
								setTheme("system");
								setIsOpen(false);
							}}>
							<div className="flex flex-row gap-1 items-center">
								<FiMonitor />
								System
								{internalColorMode === "system" && (
									<div className="ml-auto">
										<FiCheck className="text-green-500 w-4 h-4" />
									</div>
								)}
							</div>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
