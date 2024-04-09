import { Box, Text, VStack } from "@yamada-ui/react"
import { memo } from "react"
import { DetailTooltip } from "./detail-tooltip"
import { getDictionary } from "lib/dictionaries"

export const SchoolHistory = memo(({ locale }: { locale: string }) => {
  const { education } = getDictionary(locale)
  return (
    <VStack overflowX="auto">
      <Box
        as="table"
        tableLayout="auto"
        maxW="4xl"
        whiteSpace="nowrap"
        rounded="lg"
        borderCollapse="collapse"
      >
        <Box as="thead">
          <Box as="tr" bg="teal.700" px={{ base: "4", md: "3" }} py="2">
            <Box
              as="th"
              px="4"
              py="2"
              roundedTopLeft="lg"
              color="white"
              fontSize={{ base: "md", md: "sm" }}
            >
              {education.headings.period}
            </Box>
            <Box
              as="th"
              px="4"
              py="2"
              color="white"
              fontSize={{ base: "md", md: "sm" }}
            >
              {education.headings.schoolName}
            </Box>
            <Box
              as="th"
              px="4"
              py="2"
              roundedTopRight="lg"
              color="white"
              fontSize={{ base: "md", md: "sm" }}
            >
              {education.headings.location}
            </Box>
          </Box>
        </Box>
        <Box as="tbody">
          {Array.from(Array(11).keys()).map((index) => (
            <Box
              as="tr"
              key={index}
              transitionDuration="300ms"
              transitionProperty="background"
              bg={
                index % 2 === 0
                  ? ["gray.100", "gray.900"]
                  : ["gray.200", "gray.950"]
              }
            >
              <Box
                as="td"
                px={{ base: "4", md: "3" }}
                py="2"
                cursor="pointer"
                roundedBottomLeft={index === 10 ? "lg" : undefined}
                data-tooltip-id={`tooltip-${index}-duration`}
                verticalAlign="middle"
              >
                <Text fontSize={{ base: "md", md: "sm" }}>
                  {education.schools[index].duration}
                </Text>
                <DetailTooltip
                  index={index}
                  text={`${education.schools[index].start} - ${education.schools[index].end}`}
                />
              </Box>
              <Box
                as="td"
                px={{ base: "4", md: "3" }}
                py="2"
                cursor="pointer"
                data-tooltip-id={`tooltip-${index}-name`}
                verticalAlign="middle"
              >
                <Text fontSize={{ base: "md", md: "sm" }}>
                  {education.schools[index].name}
                </Text>
                <DetailTooltip
                  index={index}
                  text={education.schools[index].grade}
                />
              </Box>
              <Box
                as="td"
                px={{ base: "4", md: "3" }}
                py="2"
                cursor="pointer"
                roundedBottomRight={index === 10 ? "lg" : undefined}
                data-tooltip-id={`tooltip-${index}-location`}
              >
                <Text fontSize={{ base: "md", md: "sm" }}>
                  {education.schools[index].location.country}
                </Text>
                <DetailTooltip
                  index={index}
                  text={education.schools[index].location.region}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </VStack>
  )
})

SchoolHistory.displayName = "SchoolHistory"
