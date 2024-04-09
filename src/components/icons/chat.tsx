import { faComments } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"

export const ChatIcon = ({ ...props }) => (
  <Icon icon={faComments} color="yellow.600" size={30} {...props} />
)
