import { faListAlt } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const ListIcon = memo(({ ...props }) => (
  <Icon icon={faListAlt} color="yellow.600" size={30} {...props} />
))

ListIcon.displayName = "ListIcon"
