/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "evgeny-nextjs-demo-meals-images.s3.amazonaws.com",
				port: "",
				pathname: "/**"
			},
		],
	},
}

module.exports = nextConfig
