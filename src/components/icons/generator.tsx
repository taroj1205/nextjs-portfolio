

import {
  faMagic,
} from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const GeneratorIcon = memo(({ ...props }) => (
  <Icon icon={faMagic} color="blue.300" size={30} {...props} />
))

GeneratorIcon.displayName = "GeneratorIcon"
