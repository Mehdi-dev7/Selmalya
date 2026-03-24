import ArticleBlocks from "@/components/Blog/ArticleBlocks";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getAllSlugs, getArticleBySlug } from "@/lib/articles";
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

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const article = getArticleBySlug(slug);
	if (!article) {
		return { title: "Article | Selmalya" };
	}
	return {
		title: `${article.title} | Selmalya`,
		description: article.excerpt,
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
