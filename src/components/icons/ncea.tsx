

import {
  faSchool,
} from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const NCEAIcon = memo(({ ...props }) => (
  <Icon icon={faSchool} color="green.600" size={30} {...props} />
))

NCEAIcon.displayName = "NCEAIcon"
