import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"

export const PlanIcon = ({ ...props }) => (
  <Icon icon={faCalendarAlt} color="green.500" size={30} {...props} />
)
