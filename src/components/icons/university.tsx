import { faUniversity } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const UniversityIcon = memo(({ ...props }) => (
  <Icon icon={faUniversity} color="blue.600" size={30} {...props} />
))

UniversityIcon.displayName = "UniversityIcon"
