export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				// Bloquer les assets internes Next.js que Google n'a pas besoin d'indexer
				disallow: ["/_next/static/", "/api/"],
			},
		],
		sitemap: "https://www.selmalya-tiers-payant.fr/sitemap.xml",
		host: "https://www.selmalya-tiers-payant.fr",
	};
}
