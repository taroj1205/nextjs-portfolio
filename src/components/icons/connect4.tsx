import { faGamepad } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const Connect4Icon = memo(({ ...props }) => (
  <Icon icon={faGamepad} color="blue.600" size={30} {...props} />
))

Connect4Icon.displayName = "Connect4Icon"
