import { Image } from "@yamada-ui/react"
import { memo } from "react"

export const LightHatenaIcon = memo(({ ...props }) => (
  <Image
    alt="hatenablog icon"
    display={["block", "none"]}
    height={30}
    width={30}
    src="/svg/blog/hatenablog.svg"
    {...props}
  />
))

LightHatenaIcon.displayName = "LightHatenaIcon"
