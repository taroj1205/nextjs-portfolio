import { faListAlt } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"

export const ListIcon = ({ ...props }) => (
  <Icon icon={faListAlt} color="yellow.600" size={30} {...props} />
)
