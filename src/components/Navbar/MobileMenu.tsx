"use client"
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  HStack,
  IconButton,
  Spacer,
  useDisclosure,
} from "@yamada-ui/react"
import { memo } from "react"
import { LangToggle } from "../Language"
import { MobileMenuContent } from "./MobileMenuContent"
import { ThemeSwitcher } from "./ThemeSwitcher"

export const MobileMenu = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <HStack
        display={{ base: "flex", md: "none" }}
        h="4rem"
        w="full"
        pr="2"
        pl="3"
      >
        {/* Mobile hamburger menu button */}
        <IconButton
          title="Menu"
          type="button"
          variant="ghost"
          p="1"
          onClick={onOpen}
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
        <Spacer />
        <HStack gap="1" position="relative">
          <LangToggle />
          <ThemeSwitcher />
        </HStack>
      </HStack>
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
