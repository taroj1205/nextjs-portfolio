import { Box, Heading, Text } from "@yamada-ui/react";
import { useTranslations } from "next-intl";

export const Languages = () => {
	const t = useTranslations("languages");
	return (
		<Box className="mt-4 space-y-4">
			<Heading as="h3" fontSize="2xl">
				{t("heading")}
			</Heading>
			<Text fontSize="lg">
				JavaScript, TypeScript, HTML, CSS, Markdown, Python
			</Text>

			<Heading as="h3" fontSize="2xl">
				{t("framework")}
			</Heading>
			<Text fontSize="lg">
				Next.js, Express, React.js, Node.js, Flask, Tailwind CSS
			</Text>

			<Heading as="h3" fontSize="2xl">
				UI {t("library")}
			</Heading>
			<Text fontSize="lg">
				Next UI, Chakra UI, Material UI, Joy UI, Yamada UI
			</Text>

			<Heading as="h3" fontSize="2xl">
				SQL
			</Heading>
			<Text fontSize="lg">MySQL, SQLite, PostgreSQL</Text>

			<Heading as="h3" fontSize="2xl">
				{t("third party")}
			</Heading>
			<Text fontSize="lg">
				Supabase, Vercel, Netlify, GitHub, Auth0, Clerk
			</Text>
		</Box>
	);
};
