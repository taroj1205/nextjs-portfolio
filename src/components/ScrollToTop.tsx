"use client"

import { Text } from "@yamada-ui/react"
import { useLocale } from "next-intl"
import { FaArrowUp } from "react-icons/fa"

export const ScrollToTop = () => {
  const locale = useLocale()
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="py-2 md:py-1 px-2 text-md md:text-sm text-gray-600 hover:text-black footer-link transition-colors duration-300"
    >
      <Text className="hidden md:block">
        {locale === "en" ? "Scroll to Top" : "トップへスクロール"}
      </Text>
      <FaArrowUp
        className="md:hidden text-gray-600 hover:text-black footer-link"
        size={16}
      />
    </button>
  )
}
