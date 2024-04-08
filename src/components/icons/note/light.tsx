import { Image } from "@yamada-ui/react"
import { memo } from "react"

export const LightNoteIcon = memo(({ ...props }) => (
  <Image
    alt="note icon"
    display={["block", "none"]}
    height={30}
    width={30}
    src="/svg/blog/note.svg"
    {...props}
  />
))

LightNoteIcon.displayName = "LightNoteIcon"
