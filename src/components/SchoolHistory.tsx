"use client";
import { useTranslations } from "next-intl";
import { Text, Tooltip } from "@yamada-ui/react";

export const SchoolHistory = () => {
	const t = useTranslations();
	return (
		<div className="w-full flex flex-col items-center">
			<div className="overflow-x-auto w-full font-normal">
				<table className="w-full max-w-4xl table-auto rounded-lg border-collapse whitespace-nowrap shadow-md hover:shadow-lg text-base md:text-lg">
					<thead>
						<tr className="bg-teal-700 text-white">
							<th className="py-2 px-4 rounded-tl-lg">
								{t("education.headings.period")}
							</th>
							<th className="py-2 px-4">
								{t("education.headings.schoolName")}
							</th>
							<th className="py-2 px-4 rounded-tr-lg">
								{t("education.headings.location")}
							</th>
						</tr>
					</thead>
					<tbody>
						{Array.from(Array(11).keys()).map((index) => (
							<tr
								key={index}
								className={
									index % 2 === 0
										? "bg-gray-100 first-table-row"
										: "bg-gray-200 second-table-row"
								}
								style={{ transition: "background-color 0.3s" }}>
								<td
									className={`py-2 px-4 cursor-pointer ${
										index === 10 ? "rounded-bl-lg" : ""
									}`}>
									<Tooltip
										label={`${t(`education.schools.${index}.start`)} - ${t(
											`education.schools.${index}.end`
										)}`}
										placement="top-start">
										<Text>{t(`education.schools.${index}.duration`)}</Text>
									</Tooltip>
								</td>
								<td
									className={`py-2 px-4 flex items-center ${
										index === 7 ? "" : "cursor-pointer"
									}`}>
									<Tooltip
										label={t(`education.schools.${index}.grade`)}
										placement="top-start"
										hidden={index === 7}>
										<Text>{t(`education.schools.${index}.name`)}</Text>
									</Tooltip>
								</td>
								<td
									className={`py-2 px-4 cursor-pointer ${
										index === 10 ? "rounded-br-lg" : ""
									}`}>
									<Tooltip
										label={t(`education.schools.${index}.location.region`)}
										placement="top-start">
										<Text>{t(`education.schools.${index}.location.country`)}</Text>
									</Tooltip>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
