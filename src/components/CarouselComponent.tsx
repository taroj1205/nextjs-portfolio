"use client";
import {
	Carousel,
	CarouselSlide,
	CarouselControlNext,
	CarouselControlPrev,
	CarouselIndicators,
} from "@yamada-ui/carousel";
import { Center, Image, useBreakpointValue } from "@yamada-ui/react";

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
];


export const CarouselComponent = () => {
	const size = useBreakpointValue({ base: "full", md: "50%" });
	return (
		<Carousel
			speed={50}
			delay={2000}
			autoplay
			stopMouseEnterAutoplay={true}
			slideSize={"100%"}>
			{images.map((image, index) => (
				<CarouselSlide key={index} as={Center}>
					<Image
						className="rounded-md w-[24rem] aspect-square"
						src={image.src}
						alt={image.alt}
					/>
				</CarouselSlide>
			))}
		</Carousel>
	);
};
