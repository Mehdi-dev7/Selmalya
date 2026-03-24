import { getAllArticles } from "@/lib/articles";

const BASE_URL = "https://www.selmalya-tiers-payant.fr";

export default function sitemap() {
	const articles = getAllArticles();

	const blogEntries = articles.map((article) => ({
		url: `${BASE_URL}/blog/${article.slug}`,
		lastModified: article.date ? new Date(article.date) : new Date(),
		changeFrequency: "weekly",
		priority: 0.75,
	}));

	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		...blogEntries,
		{
			url: `${BASE_URL}/mentions/cgv`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/mentions/mentions-legales`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/mentions/politique-confidentialite`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];
}