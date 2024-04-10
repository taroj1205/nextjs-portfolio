import { Box } from "@yamada-ui/react"
import { memo } from "react"
import "./dropdown.css"

export const AnimatedTriangle = memo(({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box
      h="2"
      w="2"
      transform="rotate(90deg) scale(0.7)"
      _before={{
        content: "''",
        position: "absolute",
        right: 0,
        width: "10px",
        height: "2px",
        transition: "transform 0.3s ease-in-out",
        transform: isOpen
          ? "translateY(3px) rotate(45deg)"
          : "translateY(-3px) rotate(45deg)",
      }}
      _after={{
        content: "''",
        position: "absolute",
        right: 0,
        width: "10px",
        height: "2px",
        transition: "transform 0.3s ease-in-out",
        transform: isOpen
          ? "translateY(-3px) rotate(-45deg)"
          : "translateY(3px) rotate(-45deg)",
      }}
    />
  )
})

AnimatedTriangle.displayName = "AnimatedTriangle"
