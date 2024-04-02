"use client"
import { Box, Text, VStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { memo } from "react"
import { Tooltip as ReactTooltip } from "react-tooltip"

export const SchoolHistory = memo(() => {
  const t = useTranslations()
  return (
    <VStack>
      <Box overflowX="auto">
        <Box
          as="table"
          tableLayout="auto"
          maxW="4xl"
          whiteSpace="nowrap"
          rounded="lg"
          borderCollapse="collapse"
        >
          <Box as="thead">
            <Box as="tr" bg="teal.700">
              <Box as="th" px="4" py="2" roundedTopLeft="lg" color="white">
                {t("education.headings.period")}
              </Box>
              <Box as="th" px="4" py="2" color="white">
                {t("education.headings.schoolName")}
              </Box>
              <Box as="th" px="4" py="2" roundedTopRight="lg" color="white">
                {t("education.headings.location")}
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
                  px="4"
                  py="2"
                  cursor="pointer"
                  roundedBottomLeft={index === 0 ? "lg" : undefined}
                  data-tooltip-id={`tooltip-${index}-duration`}
                >
                  <Text>{t(`education.schools.${index}.duration`)}</Text>
                  <ReactTooltip
                    id={`tooltip-${index}-duration`}
                    place="top-start"
                  >
                    <Text as="span">{`${t(`education.schools.${index}.start`)} - ${t(
                      `education.schools.${index}.end`,
                    )}`}</Text>
                  </ReactTooltip>
                </Box>
                <Box
                  as="td"
                  px="4"
                  py="2"
                  cursor="pointer"
                  data-tooltip-id={`tooltip-${index}-name`}
                >
                  <Text>{t(`education.schools.${index}.name`)}</Text>
                  <ReactTooltip id={`tooltip-${index}-name`} place="top-start">
                    <Text as="span">
                      {t(`education.schools.${index}.grade`)}
                    </Text>
                  </ReactTooltip>
                </Box>
                <Box
                  as="td"
                  px="4"
                  py="2"
                  cursor="pointer"
                  roundedBottomRight={index === 10 ? "lg" : undefined}
                  data-tooltip-id={`tooltip-${index}-location`}
                >
                  <Text>
                    {t(`education.schools.${index}.location.country`)}
                  </Text>
                  <ReactTooltip
                    id={`tooltip-${index}-location`}
                    place="top-start"
                  >
                    <Text as="span">
                      {t(`education.schools.${index}.location.region`)}
                    </Text>
                  </ReactTooltip>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </VStack>
  )
})

SchoolHistory.displayName = "SchoolHistory"
