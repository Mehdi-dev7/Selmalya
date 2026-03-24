import data from "@/data/articles.json";

/** Article visible sur le site et dans le sitemap (absence du champ = publié). */
export function isArticlePublished(article) {
	return article.published !== false;
}

export function getAllArticles() {
	return [...data.articles]
		.filter(isArticlePublished)
		.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticleBySlug(slug) {
	const article = data.articles.find((a) => a.slug === slug) ?? null;
	if (!article || !isArticlePublished(article)) return null;
	return article;
}

export function getAllSlugs() {
	return data.articles.filter(isArticlePublished).map((a) => a.slug);
}
