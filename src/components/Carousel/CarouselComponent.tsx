"use client"
import { Carousel, CarouselSlide } from "@yamada-ui/carousel"
import { Center, Box } from "@yamada-ui/react"
import Image from "next/image"
import { memo } from "react"
import jugglingImg from "../../assets/carousel/juggling.webp"
import pfpImg from "../../assets/carousel/pfp.webp"
import profileImg from "../../assets/carousel/profile.webp"
import westlakeImg from "../../assets/carousel/westlake_me.webp"

const images = [
  {
    src: jugglingImg,
    alt: "Me juggling",
  },
  {
    src: profileImg,
    alt: "Me with Kendama",
  },
  {
    src: pfpImg,
    alt: "My profile picture",
  },
  {
    src: westlakeImg,
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
              style={{
                borderRadius: "calc(1rem - 2px)",
                aspectRatio: "1/1",
                objectFit: "cover",
                width: "100%",
              }}
              src={image.src}
              alt={image.alt}
              height={384}
              width={384}
            />
          </CarouselSlide>
        ))}
      </Carousel>
    </Box>
  )
})

CarouselComponent.displayName = "CarouselComponent"
