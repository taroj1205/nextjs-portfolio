import {
  Wrap,
  Card,
  CardHeader,
  CardBody,
  Image,
  Heading,
  Text,
  VStack,
} from "@yamada-ui/react"
import type { Metadata } from "next"
import Link from "next/link"
import { useTranslations } from "next-intl"

export const metadata: Metadata = {
  title: "UoA Links",
  description: "Useful links for UoA",
}

const links = [
  {
    title: "UoA Homepage",
    description: "The homepage for UoA.",
    thumbnail: "/images/uoa/logo.webp",
    video: false,
    owner: "University of Auckland",
    brief: "UoA",
    link: "https://www.auckland.ac.nz/",
    logo: "/images/uoa/logo.webp",
  },
  {
    title: "Student Services Online",
    description: "This is the SSO for UoA.",
    thumbnail: "/images/uoa/logo.webp",
    video: false,
    owner: "University of Auckland",
    brief: "UoA",
    link: "https://www.student.auckland.ac.nz/",
    logo: "/images/uoa/logo.webp",
  },
  {
    title: "Canvas",
    description: "This is the Canvas for UoA.",
    thumbnail: "/images/uoa/canvas.webp",
    video: false,
    owner: "University of Auckland",
    brief: "UoA",
    link: "https://canvas.auckland.ac.nz/",
    logo: "/images/uoa/canvas.webp",
  },
]

interface Link {
  title: string
  description: string
  thumbnail: string
  video: boolean
  owner: string
  brief: string
  link: string
  logo: string
}

export default function Home() {
  const t = useTranslations()
  return (
    <VStack maxW="5xl" mx="auto">
      <Heading as="h2" size="2xl">
        {t("header.uoa.name")}
      </Heading>
      <Text>{t("header.uoa.description")}</Text>
      <Wrap gap="md">
        {links.map((link: Link) => (
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
            <CardHeader justifyContent="center">
              <Image
                src={link.thumbnail}
                alt={link.description}
                w="xs"
                rounded="md"
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
