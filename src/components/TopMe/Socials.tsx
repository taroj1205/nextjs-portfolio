import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { Center, IconButton, Link, Wrap } from "@yamada-ui/react"
import { memo } from "react"

export const Socials = memo(() => {
  return (
    <Wrap as={Center} gap={2}>
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
        icon={<Icon size="xl" icon={faTwitter} />}
      />
      <IconButton
        as={Link}
        href="https://instagram.com/taroj1205"
        isExternal
        p={2}
        bg="pink.500"
        color="white"
        border="1px solid"
        borderColor="pink.500"
        _hover={{ bg: "transparent", color: "pink.500" }}
        borderRadius="md"
        transitionDuration="300ms"
        gap={2}
        icon={<Icon size="xl" icon={faInstagram} />}
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
        icon={<Icon size="xl" icon={faFacebook} />}
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
        icon={<Icon size="xl" icon={faLinkedin} />}
      />
    </Wrap>
  )
})

Socials.displayName = "Socials"
