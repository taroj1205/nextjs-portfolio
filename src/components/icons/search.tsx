import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { memo } from "react"

export const SearchIcon = memo(({ ...props }) => (
  <Icon icon={faSearch} color="red.500" size={30} {...props} />
))

SearchIcon.displayName = "SearchIcon"
