"use client"
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Image,
  Text,
  Heading,
} from "@yamada-ui/react"
import { memo } from "react"
import type { FC, ReactNode } from "react"

type DrawerComponentProps = {
  title: string
  description?: string
  imageRef: { component?: ReactNode; image?: string; video?: string }
}

export const DrawerComponent: FC<DrawerComponentProps> = memo(
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
        <Drawer
          placement="bottom"
          isOpen={isOpen}
          size="sm"
          maxH="95%"
          onClose={onClose}
          closeOnDrag
        >
          <DrawerHeader w="full" maxW="4xl" mx="auto">
            <Heading mx="auto">{title}</Heading>
          </DrawerHeader>

          <DrawerBody w="full" maxW="4xl" mx="auto">
            {description ? (
              <Text fontSize="lg" mx="auto">
                {description}
              </Text>
            ) : null}
            {imageRef.video ? (
              <iframe
                width="315"
                height="560"
                style={{
                  maxHeight: "70vh",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={`https://www.youtube.com/embed/${imageRef.video}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : imageRef.image ? (
              <Image
                className="max-h-[300px]"
                src={imageRef.image}
                alt={title}
              />
            ) : imageRef.component ? (
              imageRef.component
            ) : null}
          </DrawerBody>

          <DrawerFooter w="full" maxW="4xl" mx="auto">
            <Button
              mx="auto"
              variant="outline"
              colorScheme="gray"
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </Drawer>
      </>
    )
  },
)

DrawerComponent.displayName = "DrawerComponent"
