import { Image } from "@yamada-ui/react"

export const DarkHatenaIcon = ({ ...props }) => (
  <Image
    alt="hatenablog icon"
    display={["none", "block"]}
    height={30}
    width={30}
    src="/svg/blog/hatenablog_white.svg"
    {...props}
  />
)
