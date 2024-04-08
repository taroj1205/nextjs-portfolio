import { faGithub } from "@fortawesome/free-brands-svg-icons"

import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const GitHubIcon = memo(({ ...props }) => (
  <Icon icon={faGithub} size={30} {...props} />
))

GitHubIcon.displayName = "GitHubIcon"
