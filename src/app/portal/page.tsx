import { UoALinks } from "@/components/UoALinks";

export default function Home() {
	return (
		<div className="max-w-5xl mx-auto flex flex-col space-y-2">
			<h1 className="text-3xl">Useful links for UoA</h1>
			<UoALinks />
		</div>
	);
}
