import { Image } from "@yamada-ui/react"
import { memo } from "react"

export const DarkHatenaIcon = memo(({ ...props }) => (
  <Image
    alt="hatenablog icon"
    display={["none", "block"]}
    height={30}
    width={30}
    src="/svg/blog/hatenablog_white.svg"
    {...props}
  />
))

DarkHatenaIcon.displayName = "DarkHatenaIcon"
