import { Image } from "@yamada-ui/react"

export const DarkNoteIcon = ({ ...props }) => (
  <Image
    alt="note icon"
    display={["none", "block"]}
    height={30}
    width={30}
    src="/svg/blog/note_white.svg"
    {...props}
  />
)
