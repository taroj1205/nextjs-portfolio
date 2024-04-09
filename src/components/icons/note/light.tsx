import { Image } from "@yamada-ui/react"

export const LightNoteIcon = ({ ...props }) => (
  <Image
    alt="note icon"
    display={["block", "none"]}
    height={30}
    width={30}
    src="/svg/blog/note.svg"
    {...props}
  />
)
