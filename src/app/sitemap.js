export default function sitemap() {
	return [
		{
			url: "https://selmalya-tiers-payant.fr",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://selmalya-tiers-payant.fr/mentions/cgv",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://selmalya-tiers-payant.fr/mentions/mentions-legales",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://selmalya-tiers-payant.fr/mentions/politique-confidentialite",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];
}
