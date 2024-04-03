"use client"
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
} from "@yamada-ui/react"
import { memo } from "react"
import { MobileMenuContent } from "./MobileMenuContent"

export const MobileMenu = memo(() => {
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
        display={{ base: "flex", md: "none" }}
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
      {/* Mobile menu */}
      <Drawer closeOnDrag isOpen={isOpen} onClose={onClose}>
        <DrawerBody>
          <MobileMenuContent />
        </DrawerBody>
        <DrawerCloseButton z="40" />
      </Drawer>
    </>
  )
})

MobileMenu.displayName = "MobileMenu"
