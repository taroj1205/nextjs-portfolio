"use client"
import { Text } from "@yamada-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useLocale } from "next-intl"
import React from "react"
import { FaGithub } from "react-icons/fa"
import { ScrollToTop } from "./ScrollToTop"
import { usePathname } from "@/lib/next-intl"

const Footer = () => {
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <footer className="w-full backdrop-blur-lg">
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="mx-auto p-4 py-2 lg:py-4 max-w-4xl flex flex-row justify-between items-center w-full">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <ul className="flex flex-row flex-wrap text-md md:text-sm">
            <li>
              <Link
                href={`/${locale === "en" ? "ja" : "en"}${pathname}`}
                className="group py-1 px-2 w-[6rem] md:w-auto space-x-1 flex flex-row items-center justify-start text-md md:text-sm text-gray-600 hover:text-black footer-lang transition-colors duration-300 ease-in-out"
              >
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
                <Text>{locale === "en" ? "日本語" : "English"}</Text>
              </Link>
            </li>
          </ul>
        </div>
        <ScrollToTop />
        <ul className="flex flex-row text-md md:text-sm">
          <li className="py-1 flex items-center justify-center">
            <Link
              href="https://github.com/taroj1205"
              target="_blank"
              rel="noopener"
              className="py-1 px-2 md:pr-2 w-[6rem] md:w-auto space-x-1 flex flex-row items-center justify-start text-gray-600 hover:text-black footer-link transition-colors duration-300"
            >
              <FaGithub size={16} />
              <Text>GitHub</Text>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
