"use client"
import {
  Carousel,
  CarouselSlide,
  CarouselIndicators,
} from "@yamada-ui/carousel"
import { Center, Image, Box } from "@yamada-ui/react"
import { memo } from "react"

const images = [
  {
    src: "/carousel/juggling.webp",
    alt: "Me juggling",
  },
  {
    src: "/carousel/profile.webp",
    alt: "Me with Kendama",
  },
  {
    src: "/carousel/pfp.webp",
    alt: "My profile picture",
  },
  {
    src: "/carousel/westlake_me.webp",
    alt: "Westlake Boys High School",
  },
]

export const CarouselComponent = memo(() => {
  return (
    <Box maxW="90vw" w="24rem" h="24rem" aspectRatio="1/1">
      <Carousel
        speed={5}
        animationDuration="slow"
        delay={4000}
        autoplay
        stopMouseEnterAutoplay={true}
        slideSize="full"
      >
        {images.map((image, index) => (
          <CarouselSlide key={index} as={Center}>
            <Image
              className="rounded-md aspect-square"
              src={image.src}
              alt={image.alt}
            />
          </CarouselSlide>
        ))}
        <CarouselIndicators display="hidden" />
      </Carousel>
    </Box>
  )
})

CarouselComponent.displayName = "CarouselComponent"
