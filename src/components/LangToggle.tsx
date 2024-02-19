import { usePathname, useRouter } from "@/lib/next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";

export const LangToggle = () => {
	const pathname = usePathname();
	const locale = useLocale();
	const router = useRouter();
	return (
		<div className="relative inline-block text-left">
			<button
				onClick={() => {
					router.replace(pathname, { locale: locale === "en" ? "ja" : "en" });
				}}
				className={`flex items-center justify-center w-fit p-2 mr-1 md:mr-0 rounded-full active:scale-95 duration-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50`}>
				<Image
					src="/svg/flag/jp.svg"
					alt="Theme"
					width={24}
					height={24}
					className="w-6 h-6 toENG"
				/>
				<Image
					src="/svg/flag/nz.svg"
					alt="Theme"
					width={24}
					height={24}
					className="w-6 h-6 toJPN"
				/>
			</button>
		</div>
	);
};
