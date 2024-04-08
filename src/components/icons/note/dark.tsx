import { Image } from "@yamada-ui/react"
import { memo } from "react"

export const DarkNoteIcon = memo(({ ...props }) => (
  <Image
    alt="note icon"
    display={["none", "block"]}
    height={30}
    width={30}
    src="/svg/blog/note_white.svg"
    {...props}
  />
))

DarkNoteIcon.displayName = "DarkNoteIcon"
