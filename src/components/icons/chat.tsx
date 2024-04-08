import { faComments } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const ChatIcon = memo(({ ...props }) => (
  <Icon icon={faComments} color="yellow.600" size={30} {...props} />
))

ChatIcon.displayName = "ChatIcon"
