"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getAllArticles } from "@/lib/articles";

const PAGE_SIZE = 6;

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

export default function Blog() {
	const articles = useMemo(() => getAllArticles(), []);
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
	const visibleArticles = articles.slice(0, visibleCount);
	const hasMore = visibleCount < articles.length;

	const loadMore = () => {
		setVisibleCount((n) => Math.min(n + PAGE_SIZE, articles.length));
	};

	return (
		<section
			id="blog"
			className="bg-light min-h-[600px] flex items-center justify-center py-10 sm:py-16 scroll-mt-[72px]"
		>
			<div className="container mx-auto px-4 sm:px-6 md:px-8">
				<motion.h2
					className="text-3xl text-center lg:text-left xl:text-[50px] lg:text-[40px] md:text-5xl font-bold !leading-snug text-mint-dark mb-6 lg:ml-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Blog
				</motion.h2>
				<motion.p
					className="text-center lg:text-left text-gray-600 text-base md:text-lg max-w-3xl mb-12 lg:ml-2 lg:mb-14"
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45, delay: 0.05 }}
				>
					Actualités et repères sur le tiers payant, la télétransmission et la
					gestion en officine.
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
					{visibleArticles.map((article) => (
						<motion.div
							key={article.slug}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{ duration: 0.35, ease: "easeOut" }}
						>
							<Link
								href={`/blog/${article.slug}`}
								className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-dark focus-visible:ring-offset-2 focus-visible:ring-offset-light/50"
							>
								<article className="bg-mint/20 rounded-2xl overflow-hidden h-full flex flex-col hover:bg-light/90 hover:scale-[1.02] duration-300 hover:shadow-2xl border border-white/40">
									<div className="aspect-video bg-gradient-to-br from-mint/40 to-mint/15 relative flex items-center justify-center">
										{article.image ? (
											<Image
												src={article.image}
												alt=""
												fill
												className="object-cover"
												sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
											/>
										) : (
											<span className="text-sm font-medium text-mint-dark/45 px-4 text-center">
												Image à venir
											</span>
										)}
									</div>
									<div className="p-4 md:p-6 flex flex-col flex-1 text-left">
										<time
											dateTime={article.date}
											className="text-sm text-gray-500"
										>
											{formatDate(article.date)}
										</time>
										<h3 className="text-lg md:text-xl font-semibold text-mint-dark mt-2 group-hover:underline decoration-mint/60 underline-offset-4">
											{article.title}
										</h3>
										<p className="text-gray-600 text-sm md:text-base mt-2 grow line-clamp-3">
											{article.excerpt}
										</p>
										<span className="text-mint-dark font-semibold mt-4 inline-flex items-center gap-2">
											Lire l&apos;article
											<span aria-hidden className="transition-transform group-hover:translate-x-0.5">
												→
											</span>
										</span>
									</div>
								</article>
							</Link>
						</motion.div>
					))}
				</div>

				{hasMore ? (
					<div className="flex justify-center mt-10 md:mt-12">
						<button
							type="button"
							onClick={loadMore}
							className="primary-btn px-8 py-3 text-base md:text-lg"
						>
							Voir plus d&apos;articles
						</button>
					</div>
				) : null}
			</div>
		</section>
	);
}
