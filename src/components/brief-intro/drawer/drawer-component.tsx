import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Text,
  Heading,
} from "@yamada-ui/react"
import type { FC, ReactNode } from "react"

type DrawerComponentProps = {
  title: string
  description?: string
  component?: ReactNode
  video?: string
  isOpen: boolean
  onClose: () => void
}

export const DrawerComponent: FC<DrawerComponentProps> = ({
  title,
  description,
  component,
  video,
  isOpen,
  onClose,
}) => {
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
          <Text fontSize="lg" mx="auto" display={{ base: "block", md: "none" }}>
            {description}
          </Text>
        ) : null}
        {video ? (
          <iframe
            width="315"
            height="560"
            style={{
              maxHeight: "70vh",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={`https://www.youtube.com/embed/${video}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : component ? (
          component
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
}
