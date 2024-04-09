import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"

export const SearchIcon = ({ ...props }) => (
  <Icon icon={faSearch} color="red.500" size={30} {...props} />
)
