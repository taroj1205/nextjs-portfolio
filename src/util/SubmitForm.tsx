"use server";

const WEBHOOK_URL = process.env.WEBHOOK_URL as string;

export const SubmitForm = async (formData: FormData) => {
	console.log((formData.get("image") as File).name);

	try {
		console.log("Started sending form data.");

		let link = String(formData.get("link"));
		if (!link.startsWith("http://") && !link.startsWith("https://")) {
			link = "https://" + link;
    }
    
    const formWithImage = new FormData();
		formWithImage.append("image", formData.get("image") as File);
		formWithImage.append(
			"payload_json",
			JSON.stringify({
				embeds: [
					{
						title: formData.get("title"),
						description: `${formData.get("description")} \n ${link}`,
						image: {
							url: `attachment://${(formData.get("image") as File).name}`,
            },
            timestamp: new Date().toISOString(),
					},
				],
			})
		);

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      body: formWithImage,
    });

    if (!response.ok) {
      console.log("Status", response.status);
      console.log("Body", response.body);
      
			throw new Error("Failed to send form data");
		}

		console.log("Successfully sent form data.");
		return Promise.resolve({ success: true });
	} catch (error) {
		console.error(error);
		return Promise.resolve({ success: false });
	}
};
