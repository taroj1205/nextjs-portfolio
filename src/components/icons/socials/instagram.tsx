import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const InstagramIcon = memo(({ ...props }) => (
  <Icon icon={faInstagram} color="pink.600" size={30} {...props} />
))

InstagramIcon.displayName = "InstagramIcon"
