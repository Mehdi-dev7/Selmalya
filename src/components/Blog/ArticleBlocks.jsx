import Link from "next/link";
import { Fragment } from "react";

/**
 * Met en avant « Selmalya » (gras, vert mint-dark) et remplace {{SERVICES}} par un lien vers #services.
 */
function RichText({ text }) {
	if (typeof text !== "string") return text;

	const nodes = [];
	let pos = 0;
	let key = 0;
	const len = text.length;

	while (pos < len) {
		const rest = text.slice(pos);
		const idxServices = rest.indexOf("{{SERVICES}}");
		const lowerRest = rest.toLowerCase();
		const idxSelmalya = lowerRest.indexOf("selmalya");

		if (idxServices < 0 && idxSelmalya < 0) {
			nodes.push(<Fragment key={key++}>{text.slice(pos)}</Fragment>);
			break;
		}

		const useServices =
			idxServices >= 0 &&
			(idxSelmalya < 0 || idxServices <= idxSelmalya);
		const useSelmalya = idxSelmalya >= 0 && !useServices;

		if (useServices) {
			if (idxServices > 0) {
				nodes.push(
					<Fragment key={key++}>{text.slice(pos, pos + idxServices)}</Fragment>
				);
			}
			nodes.push(
				<Link
					key={key++}
					href="/#services"
					className="font-semibold text-mint-dark underline underline-offset-2 decoration-mint/60 hover:decoration-mint-dark"
				>
					nos services
				</Link>
			);
			pos += idxServices + "{{SERVICES}}".length;
			continue;
		}

		if (useSelmalya) {
			if (idxSelmalya > 0) {
				nodes.push(
					<Fragment key={key++}>{text.slice(pos, pos + idxSelmalya)}</Fragment>
				);
			}
			nodes.push(
				<strong key={key++} className="font-bold text-mint-dark">
					Selmalya
				</strong>
			);
			pos += idxSelmalya + "selmalya".length;
			continue;
		}

		nodes.push(<Fragment key={key++}>{text.slice(pos)}</Fragment>);
		break;
	}

	return <>{nodes}</>;
}

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
							<RichText text={block.text} />
						</h2>
					);
				}
				if (block.type === "p") {
					return (
						<p
							key={i}
							className="text-base md:text-lg text-gray-700 leading-relaxed mb-4"
						>
							<RichText text={block.text} />
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
								<li key={j}>
									<RichText text={item} />
								</li>
							))}
						</ul>
					);
				}
				return null;
			})}
		</div>
	);
}
