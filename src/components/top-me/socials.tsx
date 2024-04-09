import { ButtonGroup, IconButton, Link, Wrap } from "@yamada-ui/react"
import { memo } from "react"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "components/icons"

export const Socials = memo(() => {
  return (
    <ButtonGroup as={Wrap} mx="auto" gap={2}>
      <IconButton
        as={Link}
        href="https://twitter.com/taroj1205"
        isExternal
        p={2}
        bg="blue.400"
        color="white"
        border="1px solid"
        borderColor="blue.400"
        _hover={{ bg: "transparent", color: "blue.400" }}
        borderRadius="md"
        transitionDuration="300ms"
        gap={2}
        icon={<TwitterIcon size="xl" />}
      />
      <IconButton
        as={Link}
        href="https://instagram.com/taroj1205"
        isExternal
        p={2}
        bg="pink.600"
        color="white"
        border="1px solid"
        borderColor="pink.600"
        _hover={{ bg: "transparent", color: "pink.600" }}
        borderRadius="md"
        transitionDuration="300ms"
        gap={2}
        icon={<InstagramIcon size="xl" />}
      />
      <IconButton
        as={Link}
        href="https://www.facebook.com/taroj1205"
        isExternal
        p={2}
        bg="blue.600"
        color="white"
        border="1px solid"
        borderColor="blue.600"
        _hover={{ bg: "transparent", color: "blue.600" }}
        borderRadius="md"
        transitionDuration="300ms"
        gap={2}
        icon={<FacebookIcon size="xl" />}
      />
      <IconButton
        as={Link}
        href="https://www.linkedin.com/in/taroj/"
        isExternal
        p={2}
        bg="blue.700"
        color="white"
        border="1px solid"
        borderColor="blue.700"
        _hover={{ bg: "transparent", color: "blue.700" }}
        borderRadius="md"
        transitionDuration="300ms"
        gap={2}
        icon={<LinkedInIcon size="xl" />}
      />
      <IconButton
        as={Link}
        href="mailto:taroj1205@gmail.com"
        isExternal
        p={2}
        bg="red.500"
        color="white"
        border="1px solid"
        borderColor="red.500"
        _hover={{ bg: "transparent", color: "red.500" }}
        borderRadius="md"
        transitionDuration="300ms"
        gap={2}
        icon={<MailIcon size="xl" />}
      />
    </ButtonGroup>
  )
})

Socials.displayName = "Socials"