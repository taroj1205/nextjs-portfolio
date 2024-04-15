import { ButtonGroup, IconButton, Link, Wrap } from "@yamada-ui/react"
import { memo } from "react"
import { MailIcon } from "components/icons/mail"
import { FacebookIcon } from "components/icons/socials/facebook"
import { InstagramIcon } from "components/icons/socials/instagram"
import { LinkedInIcon } from "components/icons/socials/linkedin"
import { TwitterIcon } from "components/icons/socials/twitter"

export const Socials = memo(() => {
  return (
    <ButtonGroup as={Wrap} mx="auto" gap="sm">
      <IconButton
        as={Link}
        href="https://twitter.com/taroj1205"
        isExternal
        p="xs"
        bg="blue.400"
        color="white"
        border="1px solid"
        borderColor="blue.400"
        _hover={{ bg: "transparent", color: "blue.400" }}
        borderRadius="md"
        transitionDuration="300ms"
        gap="md"
        title="Twitter"
        icon={<TwitterIcon size="xl" />}
      />
      <IconButton
        as={Link}
        href="https://instagram.com/taroj1205"
        isExternal
        p="xs"
        bg="pink.600"
        color="white"
        border="1px solid"
        borderColor="pink.600"
        _hover={{ bg: "transparent", color: "pink.600" }}
        borderRadius="md"
        transitionDuration="300ms"
        gap="md"
        title="Instagram"
        icon={<InstagramIcon size="xl" />}
      />
      <IconButton
        as={Link}
        href="https://www.facebook.com/taroj1205"
        isExternal
        p="xs"
        bg="blue.600"
        color="white"
        border="1px solid"
        borderColor="blue.600"
        _hover={{ bg: "transparent", color: "blue.600" }}
        borderRadius="md"
        transitionDuration="300ms"
        gap="md"
        title="Facebook"
        icon={<FacebookIcon size="xl" />}
      />
      <IconButton
        as={Link}
        href="https://www.linkedin.com/in/taroj/"
        isExternal
        p="xs"
        bg="blue.700"
        color="white"
        border="1px solid"
        borderColor="blue.700"
        _hover={{ bg: "transparent", color: "blue.700" }}
        borderRadius="md"
        transitionDuration="300ms"
        gap="md"
        title="LinkedIn"
        icon={<LinkedInIcon size="xl" />}
      />
      <IconButton
        as={Link}
        href="mailto:taroj1205@gmail.com"
        isExternal
        p="xs"
        bg="red.500"
        color="white"
        border="1px solid"
        borderColor="red.500"
        _hover={{ bg: "transparent", color: "red.500" }}
        borderRadius="md"
        transitionDuration="300ms"
        gap="md"
        title="Email"
        icon={<MailIcon size="xl" />}
      />
    </ButtonGroup>
  )
})

Socials.displayName = "Socials"
