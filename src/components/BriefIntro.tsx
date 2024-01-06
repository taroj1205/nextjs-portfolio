"use client";
import {
	Drawer,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	Button,
	useDisclosure,
	Image,
	Text,
} from "@yamada-ui/react";

export const BriefIntro = () => {
	return (
		<div className="mt-8 space-y-4">
			<h2 className="text-3xl font-bold">Brief Introduction</h2>
			<ul className="list-disc list-inside text-lg">
				<li>
					I&apos;m{" "}
					<DrawerComponent title="Shintaro Jokagi" description="Had ACL injury twice." imageRef={images.me} />.
				</li>
				<li>Born in Japan (Tokyo) on 2005.</li>
				<li>18 years old.</li>
				<li>Graduated Westlake Boys High School in 2023 (New Zealand).</li>
				<li>University of Auckland starting January 2023.</li>
				<li>Been to 11 schools by the end of 2023.</li>
			</ul>
			<h3 className="text-2xl font-bold">Lived in</h3>
			<ul className="list-disc list-inside text-lg">
				<li>Japan (Approx 10 years), Tokyo/Ehime</li>
				<li>The Philippines (A year and 3 months), Cebu</li>
				<li>New Zealand (A year in 2017 and 5 years since 2018), Auckland</li>
			</ul>
			<h3 className="text-2xl font-bold">Hobbies</h3>
			<ul className="list-disc list-inside text-lg">
				<li>Football (Soccer)</li>
				<li>
					<DrawerComponent
						title="Kendama (けん玉)"
						description="Japanese Traditional Toy like Yo-yo"
						imageRef={images.kendama}
					/>{" "}
					(Japanese Traditional Toy like Yo-yo)
				</li>
				<li>Programming</li>
				<li>Shorinji Kempo</li>
				<li>Table Tennis</li>
			</ul>
		</div>
	);
};

const images: { [key: string]: { video?: string; image?: string } } = {
	me: { image: "/carousel/profile.webp" },
	kendama: {
		video: "9Y-NWFB--f8?si=nPJ67wLlpHJr_G4B",
	},
};

type DrawerComponentProps = {
	title: string;
	description?: string;
	imageRef: { image?: string; video?: string };
};

const DrawerComponent: React.FC<DrawerComponentProps> = ({
	title,
	description,
	imageRef,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<button onClick={onOpen} className="underline hover:no-underline">
				{title}
			</button>
			<Drawer placement="bottom" isOpen={isOpen} size="sm" onClose={onClose}>
				<div className="max-w-3xl mx-auto">
					<DrawerHeader>{title}</DrawerHeader>

					<DrawerBody>
						{description && <Text>{description}</Text>}
						{imageRef.video ? (
							<iframe
								width="315"
								height="560"
								src={`https://www.youtube.com/embed/${imageRef.video}`}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen></iframe>
						) : imageRef.image ? (
							<Image
								className="max-h-[300px]"
								src={imageRef.image}
								alt={title}
							/>
						) : null}
					</DrawerBody>

					<DrawerFooter>
						<Button
							className="mx-auto"
							variant="solid"
							colorScheme="gray"
							onClick={onClose}>
							Close
						</Button>
					</DrawerFooter>
				</div>
			</Drawer>
		</>
	);
};
