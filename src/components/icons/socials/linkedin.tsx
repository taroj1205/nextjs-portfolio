import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const LinkedInIcon = memo(({ ...props }) => (
  <Icon icon={faLinkedin} color="blue.700" size={30} {...props} />
))

LinkedInIcon.displayName = "LinkedInIcon"
