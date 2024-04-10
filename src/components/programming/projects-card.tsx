import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Divider,
  IconButton,
  Link,
  Wrap,
  HStack,
  Spacer,
} from "@yamada-ui/react"
import type { StaticImageData } from "next/image"
import Image from "next/image"
import { memo } from "react"
import { projectsArray } from "./projects-array"
import { GitHubIcon } from "components/icons"

export interface Project {
  title: string
  description: string
  thumbnail: string | StaticImageData
  lang: string
  framework: string
  link: string
  githubLink: string
}

export const ProjectsCard = memo(({ locale }: { locale: string }) => {
  return (
    <Wrap gap={4}>
      {projectsArray(locale).map((project: Project) => (
        <Card
          key={project.githubLink}
          bg={["#f0f4f8", "#171a1c"]}
          variant="outline"
          w="320px"
          h="350px"
        >
          <CardHeader maxH={318} roundedTop="md" overflow="hidden" p={0}>
            <Image
              src={project.thumbnail}
              alt={project.description}
              height={350}
              style={{ height: "auto", width: "100%" }}
              sizes="(max-width: 600px) 284px, (max-width: 900px) 384px, 784px"
              loading="lazy"
            />
          </CardHeader>
          <CardBody bg={["#fbfcfe", "#0b0d0e"]}>
            <Link
              href={project.link}
              isExternal
              fontSize="lg"
              color={["blue.600", "link"]}
            >
              {project.title}
            </Link>
            <Text fontSize="md">{project.description}</Text>
          </CardBody>
          <Divider orientation="horizontal" />
          <CardFooter as={HStack} pl="md" pr="xs" py="xs">
            <Text fontSize="sm">{project.lang}</Text>
            <Divider orientation="vertical" h="50%" />
            <Text fontSize="sm">{project.framework}</Text>
            <Spacer />
            <IconButton
              as={Link}
              variant="ghost"
              m={0}
              size="md"
              h="36px"
              w="36px"
              href={project.githubLink}
              title="GitHub"
              isExternal
              icon={<GitHubIcon />}
            />
          </CardFooter>
        </Card>
      ))}
    </Wrap>
  )
})

ProjectsCard.displayName = "ProjectsCard"
