import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Image,
  Text,
  Heading,
} from "@yamada-ui/react"
import type { FC, ReactNode } from "react"
import { memo } from "react"

type DrawerComponentProps = {
  title: string
  description?: string
  imageRef: { component?: ReactNode; image?: string; video?: string }
  isOpen: boolean
  onClose: () => void
}

export const DrawerComponent: FC<DrawerComponentProps> = memo(
  ({ title, description, imageRef, isOpen, onClose }) => {
    return (
      <Drawer
        placement="bottom"
        isOpen={isOpen}
        size="xs"
        maxH="95%"
        onClose={onClose}
        closeOnDrag
        withCloseButton={false}
        gap="0"
      >
        <DrawerHeader w="full" maxW="4xl" mx="auto">
          <Heading as="h3" size={{ base: "xl", md: "lg" }} mx="auto">
            {title}
          </Heading>
        </DrawerHeader>

        <DrawerBody mt="xs" mb="sm" w="full" maxW="4xl" mx="auto" gap="1">
          {description ? (
            <Text
              fontSize="lg"
              mx="auto"
              display={{ base: "block", md: "none" }}
            >
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
            <Image className="max-h-[300px]" src={imageRef.image} alt={title} />
          ) : imageRef.component ? (
            imageRef.component
          ) : null}
        </DrawerBody>

        <DrawerFooter mt="0" w="full" maxW="4xl" mx="auto">
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
    )
  },
)

DrawerComponent.displayName = "DrawerComponent"
