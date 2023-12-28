/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github-profile-trophy.vercel.app",
			},
		],
	},
};

module.exports = nextConfig
