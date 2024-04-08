import { Drawer, DrawerBody, DrawerCloseButton } from "@yamada-ui/react"
import type { FC } from "react"
import { memo } from "react"
import { MobileMenuContent } from "./mobile-menu-content"

export const MobileDrawer: FC<{ isOpen: boolean; onClose: () => void }> = memo(
  ({ isOpen, onClose }) => {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} size="xs">
        <DrawerBody w="xs">
          <MobileMenuContent />
        </DrawerBody>
        <DrawerCloseButton z="40" />
      </Drawer>
    )
  },
)

MobileDrawer.displayName = "MobileDrawer"
