import { faKeyboard } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const KeyboardIcon = memo(({ ...props }) => (
  <Icon icon={faKeyboard} color="green.600" size={30} {...props} />
))

KeyboardIcon.displayName = "KeyboardIcon"
