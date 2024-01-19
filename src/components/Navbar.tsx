"use client";
import {
	FaArchive,
	FaBlog,
	FaCubes,
	FaFacebook,
	FaGamepad,
	FaGithub,
	FaInstagram,
	FaKeyboard,
	FaLinkedin,
	FaListAlt,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { RiAiGenerate, RiHome2Line, RiUserLine } from "react-icons/ri";
import { FaChartBar, FaComments, FaSearch } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { FcPlanner } from "react-icons/fc";
import { SlSocialDropbox } from "react-icons/sl";
import { useTranslations } from "next-intl";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Link, usePathname } from "@/lib/next-intl";
import { LangToggle } from "./LangToggle";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ImPointUp } from "react-icons/im";
import {
	Box,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
  useColorMode,
	useDisclosure,
} from "@yamada-ui/react";
import "../../public/svg/blog/hatenablog.svg";
import "../../public/svg/blog/hatenablog_white.svg";
import "../../public/svg/blog/note.svg";
import "../../public/svg/blog/note_white.svg";

interface ChevronDownProps extends React.SVGProps<SVGSVGElement> {
	size?: number;
}

type NestedType = {
	[key: string]: {
		href: string;
		text: string;
		icon: JSX.Element;
		description: string;
	}[];
};

const ChevronDown = ({
	fill,
	size,
	height,
	width,
	...props
}: ChevronDownProps) => {
	return (
		<svg
			fill="none"
			height={size || height || 24}
			viewBox="0 0 24 24"
			width={size || width || 24}
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
				stroke={fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
				strokeWidth={1.5}
			/>
		</svg>
	);
};

export const icons = {
	chevron: <ChevronDown fill="currentColor" size={16} />,
	list: <FaListAlt className="text-yellow-600" size={30} />,
	archive: <FaArchive className="text-blue-300" size={30} />,
	chat: <FaComments className="text-yellow-600" size={30} />,
	ncea: <TbSchool className="text-green-500" size={30} />,
	search: <FaSearch className="text-red-500" size={30} />,
	analytics: <FaChartBar className="text-gray-500" size={30} />,
	generator: <RiAiGenerate className="text-blue-300" size={30} />,
	plan: <FcPlanner className="text-green-500" size={30} />,
	twitter: <FaTwitter className="text-blue-400" size={30} />,
	facebook: <FaFacebook className="text-blue-700" size={30} />,
	youtube: <FaYoutube className="text-red-600" size={30} />,
	github: <FaGithub size={30} />,
	linkedin: <FaLinkedin className="text-blue-500" size={30} />,
	instagram: <FaInstagram className="text-pink-600" size={30} />,
	connect4: <FaGamepad className="text-blue-600" size={30} />,
	typing: <FaKeyboard className="text-green-600" size={30} />,
	hatena: (
		<Image
			alt={"hatenablog icon"}
			className={"hide-on-dark"}
			height={30}
			width={30}
			src={"/svg/blog/hatenablog.svg"}
		/>
	),
	hatena_dark: (
		<Image
			alt={"hatenablog icon"}
			className={"hide-on-light"}
			height={30}
			width={30}
			src={"/svg/blog/hatenablog_white.svg"}
		/>
	),
	note: (
		<Image
			alt={"note icon"}
			className={"hide-on-dark"}
			height={30}
			width={30}
			src="/svg/blog/note.svg"
		/>
	),
	note_dark: (
		<Image
			alt={"hatenablog icon"}
			className={"hide-on-light"}
			height={30}
			width={30}
			src={"/svg/blog/note_white.svg"}
		/>
	),
};

export const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const t = useTranslations("header");

	useEffect(() => {
		setMobileMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		// Clean up function
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [mobileMenuOpen]);

	return (
		<>
			<Box data-menu-open={mobileMenuOpen} className="h-16"></Box>
			<nav
				data-menu-open={mobileMenuOpen}
				className="flex h-fit flex-col min-h-[4rem] z-40 w-full items-center justify-center data-[menu-open=true]:h-[100svh] data-[menu-open=true]:justify-start data-[menu-open=true]:border-none fixed top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl">
				<div
					data-menu-open={mobileMenuOpen}
					className={`flex items-center h-16 min-h-[4rem] justify-between md:hidden w-full px-2 pl-3`}>
					{/* Mobile hamburger menu button */}
					<div className="relative group">
						<button
							title="Menu"
							type="button"
							className="focus:outline-none h-full w-fit p-1"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
							<div
								data-menu-open={mobileMenuOpen}
								className="menu-toggle before:bg-black after:bg-black data-[mode=dark]before:bg-white data-[mode=dark]after:bg-white"></div>
						</button>
						{/*<div*/}
						{/*	data-show={!mobileMenuOpen && pathname === "/"}*/}
						{/*	className="absolute top-12 left-0 data-[show=false]:hidden md:hidden animate-bounce">*/}
						{/*	<ImPointUp size={30} />*/}
						{/*</div>*/}
					</div>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
					<div className="flex items-center justify-center md:hidden">
						<LangToggle />
						<ThemeSwitcher />
					</div>
				</div>
				{/* Mobile menu */}
				{mobileMenuOpen && (
					<div className="flex flex-col justify-start h-full md:hidden px-6 w-full">
						<Dropdown name="social" />
						<Dropdown name="blog" />
						<Dropdown name="apps" />
					</div>
				)}
				<header className="hidden h-16 z-40 md:flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between max-w-[1024px]">
					<div className="h-full flex flex-grow items-center justify-start">
						<Link href="/" className="flex items-center">
							<Image
								src="/images/profile/pfp.webp"
								alt="profile picture"
								width={50}
								height={50}
								className="w-6 h-6 rounded-lg"
							/>
							<Text className="font-bold text-inherit ml-1 md:ml-2">
								{t("title")}
							</Text>
						</Link>
					</div>
					{/* Desktop menu */}
					<div
						className={`hidden h-full md:flex space-x-4 items-center justify-center`}>
						<Dropdown name="social" />
						<Dropdown name="blog" />
						<Dropdown name="apps" />
					</div>
					<div className="hidden h-full md:flex flex-grow space-x-1.5 items-center justify-end">
						<LangToggle />
						<ThemeSwitcher />
					</div>
				</header>
				<div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
			</nav>
		</>
	);
};

type DropdownProps = {
	items: {
		href: string;
		text: string;
		icon: JSX.Element;
		description: string;
	}[];
};

const Dropdown = ({ name }: { name: string }) => {
	const pathname = usePathname();
	const t = useTranslations("header");
	const {colorMode} = useColorMode();

	const nested: NestedType = {
		blog: [
			{
				href: "https://taroj1205.hatenablog.com",
				text: t("posts.hatenablog.name"),
				icon: <>{icons.hatena_dark}{icons.hatena}</>,
				description: "",
			},
			{
				href: "https://note.com/taroj1205",
				text: "note",
				icon: <>{icons.note_dark}{icons.note}</>,
				description: "",
			},
		],
		apps: [
			// {
			// 	href: "/schedule",
			// 	text: t("schedule.name"),
			// 	icon: icons.plan,
			// 	description: t("schedule.description"),
			// },
			{
				href: "https://chat-taroj.vercel.app/",
				text: t("chat.name"),
				icon: icons.chat,
				description: t("chat.description"),
			},
			{
				href: "https://connect4-taroj.vercel.app/",
				text: t("connect4.name"),
				icon: icons.connect4,
				description: t("connect4.description"),
			},
			{
				href: "https://typing-game-nextjs.vercel.app/",
				text: t("typing.name"),
				icon: icons.typing,
				description: t("typing.description"),
			},
			// {
			// 	href: "https://taroj.poyo.jp/apps/ncea",
			// 	text: "NCEA",
			// 	icon: icons.ncea,
			// 	description: t("ncea.description"),
			// },
			{
				href: "/apps/search",
				text: t("search.name"),
				icon: icons.search,
				description: t("search.description"),
			},
			{
				href: "/apps/generator/image",
				text: t("generator.name"),
				icon: icons.generator,
				description: t("generator.description"),
			},
			{
				href: "https://analytics.eu.umami.is/share/V1djMkaLDvEhYDvY/taroj.vercel.app",
				text: t("analytics.name"),
				icon: icons.analytics,
				description: t("analytics.description"),
			},
		],
		social: [
			{
				href: "https://twitter.com/taroj1205",
				text: "Twitter",
				icon: icons.twitter,
				description: "",
			},
			{
				href: "https://github.com/taroj1205",
				text: "GitHub",
				icon: icons.github,
				description: "",
			},
			{
				href: "https://instagram.com/taroj1205",
				text: "Instagram",
				icon: icons.instagram,
				description: "",
			},
			{
				href: "https://youtube.com/@taroj1205",
				text: "YouTube",
				icon: icons.youtube,
				description: "",
			},
			{
				href: "https://linkedin.com/in/taroj",
				text: "LinkedIn",
				icon: icons.linkedin,
				description: "",
			},
			{
				href: "https://facebook.com/taroj1205",
				text: "Facebook",
				icon: icons.facebook,
				description: "",
			},
		],
	};

	const items = nested[name] as DropdownProps["items"];

	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		onClose();
	}, [onClose, pathname]);

	return (
		<Menu
			isOpen={isOpen}
			onClose={onClose}
			onOpen={onOpen}
			closeOnSelect
			closeOnEsc>
			<MenuButton
				as={Button}
				onClick={onOpen}
				data-active={pathname.startsWith(items[0].href.toString())}
				data-menu-open={isOpen}
				variant={"unstyled"}>
				<div className="flex !font-normal items-center flex-row flex-nowrap space-x-2">
					{name === "blog" ? (
						<>
							<FaBlog />
							<span>{t("blog")}</span>
						</>
					) : name === "apps" ? (
						<>
							<FaCubes />
							<span>{t("apps")}</span>
						</>
					) : (
						<>
							<SlSocialDropbox />
							<span>{t("social")}</span>
						</>
					)}
					<div className="navbar-dropdown" data-menu-open={isOpen} />
				</div>
			</MenuButton>
			<MenuList className="absolute w-fit z-10 left-0 min-w-[10rem] rounded-md ring-1 ring-black ring-opacity-5">
					{items.map((item, index) => (
						<MenuItem
							key={index}
              as={Link}
							target={name === "apps" || name === "social" ? "_blank" : "_self"}
							rel="noopener"
							className="group flex flex-row w-full items-center text-sm transition-colors duration-300 ease-in-out"
							href={item.href}>
							{item.icon}
							<div className="whitespace-nowrap">{item.text}</div>
						</MenuItem>
					))}
			</MenuList>
		</Menu>
	);
};
