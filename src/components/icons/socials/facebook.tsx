import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const FacebookIcon = memo(({ ...props }) => (
  <Icon icon={faFacebook} color="blue.600" size={30} {...props} />
))

FacebookIcon.displayName = "FacebookIcon"
