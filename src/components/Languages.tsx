import { Box, Heading, Text } from "@yamada-ui/react";
import { useTranslations } from "next-intl";

export const Languages = () => {
	const t = useTranslations("languages");
  return (
		<Box className="mt-8 space-y-4">
			<Heading as={"h2"} size={"lg"}>{t("heading")}</Heading>
			<Text className="text-lg">
				JavaScript, TypeScript, HTML, CSS, Markdown, C# (with Unity), Python
			</Text>

			<Heading as={"h2"} size={"lg"}>{t("framework")}</Heading>
			<Text className="text-lg">
				Next.js, Express, React.js, Node.js, Flask, Tailwind CSS
			</Text>

			<Heading as={"h2"} size={"lg"}>UI {t("library")}</Heading>
			<Text className="text-lg">Next UI, Chakra UI, Material UI, Joy UI, Yamada UI</Text>

			<Heading as={"h2"} size={"lg"}>SQL</Heading>
			<Text className="text-lg">MySQL, SQLite, PostgreSQL</Text>

			<Heading as={"h2"} size={"lg"}>{t("third party")}</Heading>
			<Text className="text-lg">Supabase, Vercel, Netlify, GitHub, Auth0, Clerk</Text>
		</Box>
	);
}