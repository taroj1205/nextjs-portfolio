"use client";
import { Link as IntlLink, usePathname } from "@/lib/next-intl";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import {
	 Button, Menu, MenuButton, MenuList, MenuItem, useDisclosure, Text
} from "@yamada-ui/react";
import { icons } from "./Navbar";

type NestedType = {
	[key: string]: {
		href: string;
		text: string;
		icon: JSX.Element;
		description: string;
	}[];
};

const Footer = () => {
	const t = useTranslations("footer");
	const locale = useLocale();

	const pathname = usePathname();

	const footerLinks = [
		{ href: "/", text: t("home") },
		{ href: "/about", text: t("about") },
		{ href: "/posts", text: t("blog") },
		// { href: "/apps", text: t("apps") },
	];

	return (
		<footer className={`w-full backdrop-blur-lg`}>
			<div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
			<div className="mx-auto p-4 py-2 lg:py-4 max-w-4xl flex flex-row justify-between items-center w-full">
				<div className="flex flex-row flex-wrap items-center justify-center">
					<ul className="flex flex-row flex-wrap text-md md:text-sm">
						<li>
							<Link
								href={`/${locale === "en" ? "ja" : "en"}${pathname}`}
								className="group py-1 px-2 w-[6rem] md:w-auto space-x-1 flex flex-row items-center justify-start text-md md:text-sm text-gray-600 hover:text-black footer-lang transition-colors duration-300 ease-in-out">
								{locale === "en" ? (
									<Image
										src="/svg/flag/jp.svg"
										alt="日本語 Icon"
										width={24}
										height={24}
										className="w-4 h-4 brightness-90 group-hover:brightness-100 transition-all duration-300 ease-in-out"
									/>
								) : (
									<Image
										src="/svg/flag/nz.svg"
										alt="English Icon"
										width={24}
										height={24}
										className="w-4 h-4 brightness-90 group-hover:brightness-100 transition-all duration-300 ease-in-out"
									/>
								)}
								<p>{locale === "en" ? "日本語" : "English"}</p>
							</Link>
						</li>
					</ul>
					{/* <ul className="flex flex-row flex-wrap">
						{footerLinks.map((link, index) => (
							<React.Fragment key={index}>
								<li className="flex items-center justify-center">
									<IntlLink
										href={link.href}
										className="px-2 py-1 text-gray-600 text-md md:text-sm hover:text-black footer-link transition-colors duration-300">
										{link.text}
									</IntlLink>
									{index < footerLinks.length - 1 && (
										<FaCircle className="self-center text-[0.2rem] text-gray-600" />
									)}
								</li>
							</React.Fragment>
						))}
					</ul> */}
				</div>
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="py-1 px-2 hidden lg:block text-gray-600 text-md md:text-sm hover:text-black footer-link transition-colors duration-300">
					{locale === "en" ? "Scroll to Top" : "トップへスクロール"}
				</button>
				<ul className="flex flex-row text-md md:text-sm">
					<li className="py-1 flex items-center justify-center">
						<Link
							href="https://github.com/taroj1205"
							target="_blank"
							rel="noopener"
							className="py-1 px-2 md:pr-2 w-[6rem] md:w-auto space-x-1 flex flex-row items-center justify-start text-gray-600 hover:text-black footer-link transition-colors duration-300">
							<FaGithub size={16} />
							<p>GitHub</p>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

type DropupProps = {
	items: {
		href: string;
		text: string;
		icon: JSX.Element;
	}[];
};

const Dropup = () => {
	const pathname = usePathname();
	const t = useTranslations("footer");

	const nested: NestedType = {
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

	const items = nested["social"] as DropupProps["items"];

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
					className="group"
					variant={"unstyled"}>
					<div className="flex items-center flex-row flex-nowrap space-x-2">
						<Text
							fontWeight={"normal"}
							className="footer-link text-gray-600 group-hover:text-white transition-colors duration-300"
							fontSize="md">
							{t("name")}
						</Text>
						<div
							className="dropup before:bg-gray-600 after:bg-gray-600 group-hover:before:bg-black group-hover:after:bg-black transition-colors duration-300"
							data-menu-open={isOpen}
						/>
					</div>
				</MenuButton>
				<MenuList>
					{items.map((item, index) => (
						<MenuItem
							key={index}
							as={Link}
							target="_blank"
							rel="noopener"
							href={item.href}>
							{item.icon}
							<Text className="whitespace-nowrap">{item.text}</Text>
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		);
};

export default Footer;
