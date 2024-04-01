import {
  faTwitter,
  faFacebook,
  faYoutube,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import {
  faArchive,
  faCalendarAlt,
  faChartBar,
  faComments,
  faListAlt,
  faMagic,
  faSchool,
  faSearch,
  faGamepad,
  faKeyboard,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import Image from "next/image"

export const icons = {
  list: <Icon icon={faListAlt} color="yellow.600" size={30} />,
  archive: <Icon icon={faArchive} color="gray.600" size={30} />,
  chat: <Icon icon={faComments} color="yellow.600" size={30} />,
  ncea: <Icon icon={faSchool} color="green.600" size={30} />,
  search: <Icon icon={faSearch} color="red.500" size={30} />,
  analytics: <Icon icon={faChartBar} color="gray.500" size={30} />,
  generator: <Icon icon={faMagic} color="blue.300" size={30} />,
  plan: <Icon icon={faCalendarAlt} color="green.500" size={30} />,
  twitter: <Icon icon={faTwitter} color="blue.400" size={30} />,
  facebook: <Icon icon={faFacebook} color="blue.700" size={30} />,
  youtube: <Icon icon={faYoutube} color="red.600" size={30} />,
  github: <Icon icon={faGithub} size={30} />,
  linkedin: <Icon icon={faLinkedin} color="blue.500" size={30} />,
  instagram: <Icon icon={faInstagram} color="pink.600" size={30} />,
  connect4: <Icon icon={faGamepad} color="blue.600" size={30} />,
  typing: <Icon icon={faKeyboard} color="green.600" size={30} />,
  university: <Icon icon={faUniversity} color="blue.600" size={30} />,
  hatena: (
    <Image
      alt="hatenablog icon"
      className="hide-on-dark"
      height={30}
      width={30}
      src="/svg/blog/hatenablog.svg"
    />
  ),
  hatena_dark: (
    <Image
      alt="hatenablog icon"
      className="hide-on-light"
      height={30}
      width={30}
      src="/svg/blog/hatenablog_white.svg"
    />
  ),
  note: (
    <Image
      alt="note icon"
      className="hide-on-dark"
      height={30}
      width={30}
      src="/svg/blog/note.svg"
    />
  ),
  note_dark: (
    <Image
      alt="hatenablog icon"
      className="hide-on-light"
      height={30}
      width={30}
      src="/svg/blog/note_white.svg"
    />
  ),
}
