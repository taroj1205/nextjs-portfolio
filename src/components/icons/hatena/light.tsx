import { Image } from "@yamada-ui/react"

export const LightHatenaIcon = ({ ...props }) => (
  <Image
    alt="hatenablog icon"
    display={["block", "none"]}
    height={30}
    width={30}
    src="/svg/blog/hatenablog.svg"
    {...props}
  />
)
