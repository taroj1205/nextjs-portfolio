import { faTwitter } from "@fortawesome/free-brands-svg-icons"

import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const TwitterIcon = memo(({ ...props }) => (
  <Icon icon={faTwitter} color="blue.400" size={30} {...props} />
))

TwitterIcon.displayName = "TwitterIcon"
