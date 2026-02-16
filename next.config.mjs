/** @type {import('next').NextConfig} */
const nextConfig = {
	// Compression activée par défaut en production
	compress: true,

	// Redirection non-www → www (résout le problème de page en double)
	async redirects() {
		return [
			{
				source: "/:path*",
				has: [{ type: "host", value: "selmalya-tiers-payant.fr" }],
				destination: "https://www.selmalya-tiers-payant.fr/:path*",
				permanent: true, // 301
			},
		];
	},

	// Configuration des en-têtes HTTP
	async headers() {
		return [
			{
				// Pour les images
				source: "/images/:all*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				// Pour les polices
				source: "/fonts/:all*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				// Pour les assets statiques
				source: "/assets/:all*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},

	// Configuration des images
	images: {
		domains: ["www.selmalya-tiers-payant.fr"], // Ajoutez vos domaines d'images
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		formats: ["image/webp"],
	},

	// Optimisations de production
	productionBrowserSourceMaps: false,

	// Configuration du comportement strict
	reactStrictMode: true,

	
};

export default nextConfig;
