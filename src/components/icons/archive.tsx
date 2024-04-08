

import {
  faArchive,
} from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const ArchiveIcon = memo(({ ...props }) => (
  <Icon icon={faArchive} color="gray.600" size={30} {...props} />
))

ArchiveIcon.displayName = "ArchiveIcon"
