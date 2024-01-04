import { UoALinks } from "@/components/UoALinks";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "UoA Links",
	description: "Useful links for UoA",
};

export default function Home() {
	return (
		<div className="max-w-5xl mx-auto flex flex-col space-y-2">
			<h1 className="text-3xl">Useful links for UoA</h1>
			<UoALinks />
		</div>
	);
}
