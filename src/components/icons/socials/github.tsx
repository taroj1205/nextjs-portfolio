import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"

export const GitHubIcon = ({
  size = 30,
  ...props
}: {
  size?: number | string
}) => <Icon icon={faGithub} size={size} {...props} />
