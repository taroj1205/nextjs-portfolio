

import {
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const PlanIcon = memo(({ ...props }) => (
  <Icon icon={faCalendarAlt} color="green.500" size={30} {...props} />
))

PlanIcon.displayName = "PlanIcon"
