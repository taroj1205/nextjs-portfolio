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
            <Box as="tr" className="bg-teal-700 text-white">
              <Box as="th" className="py-2 px-4 rounded-tl-lg">
                {t("education.headings.period")}
              </Box>
              <Box as="th" className="py-2 px-4">
                {t("education.headings.schoolName")}
              </Box>
              <Box as="th" className="py-2 px-4 rounded-tr-lg">
                {t("education.headings.location")}
              </Box>
            </Box>
          </Box>
          <Box as="tbody">
            {Array.from(Array(11).keys()).map((index) => (
              <Box
                as="tr"
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-gray-100 first-table-row"
                    : "bg-gray-200 second-table-row"
                }
                style={{ transition: "background-color 0.3s" }}
              >
                <Box
                  as="td"
                  className={`py-2 px-4 cursor-pointer ${
                    index === 10 ? "rounded-bl-lg" : ""
                  }`}
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
                  className={`py-2 px-4 flex items-center ${
                    index === 7 ? "" : "cursor-pointer"
                  }`}
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
                  className={`py-2 px-4 cursor-pointer ${
                    index === 10 ? "rounded-br-lg" : ""
                  }`}
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
