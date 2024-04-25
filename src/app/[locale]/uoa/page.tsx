import {
  Wrap,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  VStack,
} from "@yamada-ui/react"
import type { Metadata } from "next"
import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import canvas from "../../../assets/uoa/canvas.webp"
import logo from "../../../assets/uoa/logo.webp"
import { getDictionary } from "lib/dictionaries"

export const metadata: Metadata = {
  title: "UoA Links",
  description: "Useful links for UoA",
  metadataBase: new URL("https://taroj1205.poyo.jp"),
}

const links = [
  {
    title: "UoA Homepage",
    description: "The homepage for UoA.",
    thumbnail: logo,
    video: false,
    owner: "University of Auckland",
    brief: "UoA",
    link: "https://www.auckland.ac.nz/",
    logo: logo,
  },
  {
    title: "Student Services Online",
    description: "This is the SSO for UoA.",
    thumbnail: logo,
    video: false,
    owner: "University of Auckland",
    brief: "UoA",
    link: "https://www.student.auckland.ac.nz/",
    logo: logo,
  },
  {
    title: "Canvas",
    description: "This is the Canvas for UoA.",
    thumbnail: canvas,
    video: false,
    owner: "University of Auckland",
    brief: "UoA",
    link: "https://canvas.auckland.ac.nz/",
    logo: canvas,
  },
]

interface LinkProps {
  title: string
  description: string
  thumbnail: StaticImageData
  video: boolean
  owner: string
  brief: string
  link: string
  logo: StaticImageData
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const { header } = getDictionary(locale)
  return (
    <VStack maxW="5xl" mx="auto">
      <Heading as="h2" size="2xl">
        {header.uoa.name}
      </Heading>
      <Text>{header.uoa.description}</Text>
      <Wrap gap="md">
        {links.map((link: LinkProps) => (
          <Card
            as={Link}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            key={link.link}
            maxW="90vw"
            w="260px"
            h="400px"
            variant="outline"
            _hover={{ bg: ["gray.100", "gray.800"] }}
          >
            <CardHeader
              p="0"
              justifyContent="center"
              rounded="md"
              overflow="hidden"
            >
              <Image
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                src={link.thumbnail}
                alt={link.description}
              />
            </CardHeader>

            <CardBody>
              <Heading size="md">{link.title}</Heading>
              <Text>{link.description}</Text>
            </CardBody>
          </Card>
        ))}
      </Wrap>
    </VStack>
  )
}
