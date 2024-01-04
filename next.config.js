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
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.node$/,
			loader: "node-loader",
		});

		return config;
	},
};

module.exports = nextConfig;