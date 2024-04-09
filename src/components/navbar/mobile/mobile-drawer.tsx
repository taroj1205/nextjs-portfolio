import { Drawer, DrawerBody, DrawerCloseButton } from "@yamada-ui/react"
import { memo, type FC } from "react"
import { MobileMenuContent } from "./mobile-menu-content"

export const MobileDrawer: FC<{
  isOpen: boolean
  onClose: () => void
  locale: string
}> = memo(({ isOpen, onClose, locale }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="xs">
      <DrawerBody w="xs">
        <MobileMenuContent locale={locale} />
      </DrawerBody>
      <DrawerCloseButton z="40" />
    </Drawer>
  )
})

MobileDrawer.displayName = "MobileDrawer"
