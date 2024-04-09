"use client"
import { faDisplay, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
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
} from "@yamada-ui/react"

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
              <Icon
                icon={faMoon}
                display={["none", "block"]}
                color="indigo.500"
                size="2xl"
              />
              <Icon
                icon={faSun}
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
                <Icon icon={faMoon} />
                <div>Dark</div>
              </HStack>
            </MenuOptionItem>
            <MenuOptionItem {...menuOptionItemProps} value="light">
              <HStack as="span" gap="2">
                <Icon icon={faSun} />
                <div>Light</div>
              </HStack>
            </MenuOptionItem>
            <MenuOptionItem {...menuOptionItemProps} value="system">
              <HStack as="span" gap="2">
                <Icon icon={faDisplay} />
                <div>System</div>
              </HStack>
            </MenuOptionItem>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  )
}
