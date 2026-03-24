export default function ArticleBlocks({ blocks }) {
	if (!blocks?.length) return null;

	return (
		<div className="max-w-3xl">
			{blocks.map((block, i) => {
				if (block.type === "h2") {
					return (
						<h2
							key={i}
							className="text-2xl md:text-3xl font-bold text-mint-dark mt-10 mb-4 first:mt-0"
						>
							{block.text}
						</h2>
					);
				}
				if (block.type === "p") {
					return (
						<p
							key={i}
							className="text-base md:text-lg text-gray-700 leading-relaxed mb-4"
						>
							{block.text}
						</p>
					);
				}
				if (block.type === "ul" && Array.isArray(block.items)) {
					return (
						<ul
							key={i}
							className="list-disc pl-6 mb-6 space-y-2 text-gray-700 text-base md:text-lg"
						>
							{block.items.map((item, j) => (
								<li key={j}>{item}</li>
							))}
						</ul>
					);
				}
				return null;
			})}
		</div>
	);
}
