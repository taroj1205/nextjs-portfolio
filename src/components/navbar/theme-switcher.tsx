"use client"
import type { MenuOptionItemProps } from "@yamada-ui/react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionItem,
  MenuOptionGroup,
  useColorMode,
  useDisclosure,
  Box,
  IconButton,
  HStack,
  Text,
} from "@yamada-ui/react"
import { DisplayIcon, MoonIcon, SunIcon } from "components/icons"

export const ThemeSwitcher = () => {
  const { changeColorMode, internalColorMode } = useColorMode()
  const menuOptionItemProps: MenuOptionItemProps = {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Menu
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        closeOnSelect
        closeOnEsc
        isLazy
        lazyBehavior="unmount"
        placement="bottom"
      >
        <MenuButton
          as={IconButton}
          type="button"
          title="Switch theme"
          data-open={isOpen}
          rounded="full"
          outline={isOpen ? "3px solid" : "none"}
          outlineColor="rgba(191, 219, 254, 0.5)"
          variant="ghost"
          transitionDuration="300ms"
          icon={
            <>
              <MoonIcon
                display={["none", "block"]}
                color="indigo.500"
                size="2xl"
              />
              <SunIcon
                display={["block", "none"]}
                color="yellow.500"
                size="2xl"
              />
            </>
          }
          // TODO active scale
        />

        <MenuList>
          <MenuOptionGroup
            title="theme"
            type="radio"
            onChange={changeColorMode}
            value={internalColorMode}
          >
            <MenuOptionItem {...menuOptionItemProps} value="dark">
              <HStack as="span" gap="2">
                <MoonIcon />
                <Text>Dark</Text>
              </HStack>
            </MenuOptionItem>
            <MenuOptionItem {...menuOptionItemProps} value="light">
              <HStack as="span" gap="2">
                <SunIcon />
                <Text>Light</Text>
              </HStack>
            </MenuOptionItem>
            <MenuOptionItem {...menuOptionItemProps} value="system">
              <HStack as="span" gap="2">
                <DisplayIcon />
                <Text>System</Text>
              </HStack>
            </MenuOptionItem>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  )
}
