"use client"
import { Button, useDisclosure } from "@yamada-ui/react"
import { memo } from "react"
import type { FC, ReactNode } from "react"
import { DrawerComponent } from "./drawer-component"

type DrawerComponentProps = {
  title: string
  description?: string
  component?: ReactNode
  video?: string
}

export const DrawerButton: FC<DrawerComponentProps> = memo(
  ({ title, description, component, video }) => {
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
          textWrap="pretty"
        >
          {title}
        </Button>
        <DrawerComponent
          title={title}
          description={description}
          component={component}
          video={video}
          isOpen={isOpen}
          onClose={onClose}
        />
      </>
    )
  },
)

DrawerButton.displayName = "DrawerButton"
