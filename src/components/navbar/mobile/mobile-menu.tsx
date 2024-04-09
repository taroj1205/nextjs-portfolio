"use client"
import { Box, IconButton, useDisclosure } from "@yamada-ui/react"
import { memo } from "react"
import { MobileDrawer } from "./mobile-drawer"

export const MobileMenu = memo(({ locale }: { locale: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {/* Mobile hamburger menu button */}
      <IconButton
        title="Menu"
        type="button"
        variant="ghost"
        p="1"
        onClick={onOpen}
        display={{ base: "none", md: "flex" }}
        icon={
          <>
            <Box
              position="absolute"
              width="24px"
              height="1px"
              transform={isOpen ? "rotate(45deg)" : "translateY(-5px)"}
              bg={["black", "white"]}
              transitionDuration="300ms"
              transitionProperty="all"
            />
            <Box
              position="absolute"
              width="24px"
              height="1px"
              transform={isOpen ? "rotate(-45deg)" : "translateY(5px)"}
              bg={["black", "white"]}
              transitionDuration="300ms"
              transitionProperty="all"
            />
          </>
        }
      />
      {/* Mobile drawer */}
      <MobileDrawer isOpen={isOpen} onClose={onClose} locale={locale} />
    </>
  )
})

MobileMenu.displayName = "MobileMenu"