"use client";
import { faFile, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import {
	Card,
	CardHeader,
	CardBody,
	Image,
	Heading,
	Text,
	Button,
	HStack,
	VStack,
	IconButton,
	useDisclosure,
	Modal,
	ModalHeader,
	ModalBody,
	InputGroup,
	InputLeftAddon,
	FileInput,
	Input,
	FormControl,
	InputLeftElement,
	useLoading,
	Dialog,
	Wrap,
	Tag,
} from "@yamada-ui/react";
import Link from "next/link";
import type { Dispatch, SetStateAction} from "react";
import { useState } from "react";
import type { SubmitHandler} from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import { SubmitForm } from "@/util/SubmitForm";

const links = [
	{
		title: "Student Services Online",
		description: "This is the SSO for UoA.",
		thumbnail: "/images/uoa/logo.webp",
		video: false,
		owner: "University of Auckland",
		brief: "UoA",
		link: "https://www.student.auckland.ac.nz/",
		logo: "/images/uoa/logo.webp",
	},
	{
		title: "Canvas",
		description: "This is the Canvas for UoA.",
		thumbnail: "/images/uoa/canvas.webp",
		video: false,
		owner: "University of Auckland",
		brief: "UoA",
		link: "https://canvas.auckland.ac.nz/",
		logo: "/images/uoa/canvas.webp",
	},
];

interface Link {
	title: string;
	description: string;
	thumbnail: string;
	video: boolean;
	owner: string;
	brief: string;
	link: string;
	logo: string;
}

export const UoALinks: React.FC = () => {
	// 0 = default, 1 = loading, 2 = success, 3 = error
	const [sendingStatus, setSendingStatus] = useState<number>(0);
	const { isOpen, onOpen, onClose } = useDisclosure();
	type Data = {
		title: string;
		description: string;
		link: string;
		image: File[];
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		control,
	} = useForm<Data>();
	
	const { page } = useLoading();

	const onSubmit: SubmitHandler<Data> = async (data) => {
		console.log("submit:", data);
		setSendingStatus(2);
		page.start({ message: "Sending request..." });
		try {
			const formData = new FormData();
			formData.append("title", data.title);
			formData.append("description", data.description);
			formData.append("link", data.link);
			formData.append("image", data.image[0]);
			const response = await SubmitForm(formData);
			if (response.success) {
				page.finish();
				setSendingStatus(3);
			} else {
				throw new Error("Submission failed");
			}
		} catch (error) {
			page.finish();
			setSendingStatus(4);
		} finally {
			onClose();
		}
	};

	return (
		<>
			<Wrap gap="md">
				{links.map((link: Link, index: number) => (
					<Card
						as={Link}
						href={link.link}
						target="_blank"
						rel="noopener noreferrer"
						key={index}
						maxW="90vw"
						w="260px"
						h="350px"
						variant="outline">
						<CardHeader justifyContent="center">
							<Image
								src={link.thumbnail}
								alt={link.description}
								w="xs"
								rounded="md"
							/>
						</CardHeader>

						<CardBody>
							<Heading size="md">{link.title}</Heading>
							<Text>{link.description}</Text>
						</CardBody>
					</Card>
				))}
				<Card maxW="90vw" w="260px" h="350px" variant="none">
					<CardBody className="flex items-center justify-center">
						<IconButton
							onClick={onOpen}
							size="lg"
							zIndex={100}
							className="opacity-0 hover:opacity-100 cursor-pointer transition-opacity duration-300"
							icon={<FontAwesomeIcon icon={faPlus} />}
						/>
					</CardBody>
				</Card>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalHeader>Request to add a new link</ModalHeader>

					<ModalBody>
						<VStack as="form" onSubmit={handleSubmit(onSubmit)}>
							<FormControl
								isInvalid={!!errors.title}
								label="Title"
								errorMessage={errors.title ? errors.title.message : undefined}>
								<Input
									placeholder="Student Services Online"
									{...register("title", {
										required: { value: true, message: "This is required." },
									})}
								/>
							</FormControl>

							<FormControl
								isInvalid={!!errors.description}
								label="Description"
								errorMessage={
									errors.description ? errors.description.message : undefined
								}>
								<Input
									placeholder="This is the SSO for UoA"
									{...register("description", {
										required: { value: true, message: "This is required." },
									})}
								/>
							</FormControl>

							<FormControl
								isInvalid={!!errors.link}
								label="Link"
								errorMessage={errors.link ? errors.link.message : undefined}>
								<InputGroup>
									<InputLeftAddon>https://</InputLeftAddon>
									<Input
										placeholder="student.auckland.ac.nz"
										{...register("link", {
											required: { value: true, message: "This is required." },
										})}
									/>
								</InputGroup>
							</FormControl>

							<FormControl
								isInvalid={!!errors.image}
								label="Image"
								errorMessage={errors.image ? errors.image.message : undefined}>
								<InputGroup>
									<Controller
										name="image"
										control={control}
										rules={{
											required: { value: true, message: "This is required." },
										}}
										render={({ field }) => (
											<InputGroup>
												<InputLeftElement>
													<FontAwesomeIcon icon={faFile} color="gray.500" />
												</InputLeftElement>
												<FileInput
													{...register("image", {
														required: {
															value: true,
															message: "This is required.",
														},
													})}
													placeholder="Upload image"
													{...field}
													component={({ value: { name} }) => <Tag key={name}>{name}</Tag>}
													accept="image/png,image/jpeg"
												/>
											</InputGroup>
										)}
									/>
								</InputGroup>
							</FormControl>

							<HStack alignSelf="flex-end">
								<Button variant="ghost" onClick={onClose}>
									Close
								</Button>
								<Button type="submit">Submit</Button>
							</HStack>
						</VStack>
					</ModalBody>
				</Modal>
				<DialogComponent
					reset={reset}
					sendingStatus={sendingStatus}
					setSendingStatus={setSendingStatus}
					openModal={onOpen}
				/>
			</Wrap>
		</>
	);
};

const DialogComponent = ({
	reset,
	sendingStatus,
	setSendingStatus,
	openModal,
}: {
	reset: () => void;
	sendingStatus: number;
	setSendingStatus: Dispatch<SetStateAction<number>>;
	openModal: () => void;
}) => {
	const { isOpen, onOpen, onClose: close } = useDisclosure();

	const onClose = () => {
		if (sendingStatus === 3) {
			reset();
			setSendingStatus(0);
			close();
		} else {
			setSendingStatus(0);
			openModal();
			close();
		}
	};

	return (
		<Dialog
			isOpen={sendingStatus > 2}
			onClose={onClose}
			header={sendingStatus === 3 ? "Successfully sent!" : "Error occured."}
			success={{
				variant: "solid",
				colorScheme: sendingStatus === 3 ? "green" : "red",
				children: sendingStatus === 3 ? "Close" : "Retry",
			}}
			onSuccess={onClose}>
			{sendingStatus === 3
				? "Thank you for your request."
				: "Please try again."}
		</Dialog>
	);
};
