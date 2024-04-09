import { faGithub } from "@fortawesome/free-brands-svg-icons"

import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const GitHubIcon = memo(
  ({ size = 30, ...props }: { size?: number | string }) => (
    <Icon icon={faGithub} size={size} {...props} />
  ),
)

GitHubIcon.displayName = "GitHubIcon"
