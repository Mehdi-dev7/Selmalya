import ArticleBlocks from "@/components/Blog/ArticleBlocks";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getAllSlugs, getArticleBySlug } from "@/lib/articles";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function formatDate(iso) {
	try {
		return new Intl.DateTimeFormat("fr-FR", {
			day: "numeric",
			month: "long",
			year: "numeric",
		}).format(new Date(iso));
	} catch {
		return iso;
	}
}

export async function generateStaticParams() {
	return getAllSlugs().map((slug) => ({ slug }));
}

const SITE_URL = "https://www.selmalya-tiers-payant.fr";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const article = getArticleBySlug(slug);
	if (!article) {
		return { title: "Article | Selmalya" };
	}

	const url = `${SITE_URL}/blog/${slug}`;
	const imageUrl = article.image ? `${SITE_URL}${article.image}` : undefined;

	return {
		title: `${article.title} | Selmalya`,
		description: article.excerpt,
		alternates: {
			canonical: `/blog/${slug}`,
		},
		// Carte riche pour partages Facebook, LinkedIn, WhatsApp...
		openGraph: {
			type: "article",
			url,
			title: article.title,
			description: article.excerpt,
			siteName: "Selmalya",
			locale: "fr_FR",
			publishedTime: article.date,
			authors: ["Selmalya"],
			images: imageUrl
				? [{ url: imageUrl, alt: article.title }]
				: undefined,
		},
		// Carte Twitter / X
		twitter: {
			card: "summary_large_image",
			title: article.title,
			description: article.excerpt,
			images: imageUrl ? [imageUrl] : undefined,
		},
	};
}

export default async function BlogArticlePage({ params }) {
	const { slug } = await params;
	const article = getArticleBySlug(slug);
	if (!article) notFound();

	return (
		<>
			<Navbar />
			<main className="bg-light min-h-screen pt-24 pb-16">
				<div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
					<nav aria-label="Fil d'Ariane" className="mb-8">
						<Link
							href="/#blog"
							className="text-mint-dark font-semibold hover:underline underline-offset-4"
						>
							← Blog
						</Link>
						<span className="text-gray-400 mx-2">/</span>
						<span className="text-gray-600 line-clamp-1">{article.title}</span>
					</nav>

					<header className="mb-10">
						<time
							dateTime={article.date}
							className="text-sm text-gray-500 block mb-3"
						>
							{formatDate(article.date)}
							{article.readTime ? (
								<span className="text-gray-400"> · {article.readTime}</span>
							) : null}
						</time>
						<h1 className="text-3xl md:text-4xl xl:text-[2.75rem] font-bold text-mint-dark leading-tight">
							{article.title}
						</h1>
						<p className="text-lg text-gray-600 mt-4 leading-relaxed">
							{article.excerpt}
						</p>
					</header>

					{/* Image de couverture de l'article (si présente) */}
					{article.image ? (
						<figure className="mb-10 overflow-hidden rounded-2xl shadow-md">
							<Image
								src={article.image}
								alt={article.title}
								width={1200}
								height={675}
								priority
								className="w-full h-auto object-cover"
							/>
						</figure>
					) : null}

					<ArticleBlocks blocks={article.blocks} />

					<div className="mt-14 pt-8 border-t border-mint/30">
						<Link
							href="/#blog"
							className="inline-flex primary-btn px-8 py-3 text-base md:text-lg"
						>
							Retour au blog
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
