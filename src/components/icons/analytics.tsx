import { faChartBar } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const AnalyticsIcon = memo(({ ...props }) => (
  <Icon icon={faChartBar} color="gray.500" size={30} {...props} />
))

AnalyticsIcon.displayName = "AnalyticsIcon"
