import { faYoutube } from "@fortawesome/free-brands-svg-icons"

import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const YouTubeIcon = memo(({ ...props }) => (
  <Icon icon={faYoutube} color="red.600" size={30} {...props} />
))

YouTubeIcon.displayName = "YouTubeIcon"
