"use client"
import {
  Button,
  useDisclosure,
} from "@yamada-ui/react"
import { memo } from "react"
import type { FC, ReactNode } from "react"
import { DrawerComponent } from "./drawer-component"

type DrawerComponentProps = {
  title: string
  description?: string
  imageRef: { component?: ReactNode; image?: string; video?: string }
}

export const DrawerButton: FC<DrawerComponentProps> = memo(
  ({ title, description, imageRef }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Button
          color={["black", "white"]}
          fontWeight="normal"
          fontSize="lg"
          variant="link"
          w="fit"
          textDecoration="underline"
          _hover={{ textDecoration: "none" }}
          onClick={onOpen}
          textWrap="balance"
        >
          {title}
        </Button>
        <DrawerComponent title={title} description={description} imageRef={imageRef} isOpen={isOpen} onClose={onClose} />
      </>
    )
  },
)

DrawerButton.displayName = "DrawerButton"
