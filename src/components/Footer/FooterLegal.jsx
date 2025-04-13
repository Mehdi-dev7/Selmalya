import Link from "next/link";

export default function FooterLegal() {
	return (
		<footer className="bg-mint-dark text-light py-6 px-4">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center text-sm">
					<div className="mb-4 md:mb-0">
						&copy; {new Date().getFullYear()} Selmalya. Tous droits réservés.
					</div>
					<div className="flex flex-wrap justify-center gap-4">
						<Link href="/" className="hover:text-mint transition-colors">
							Retour à l'accueil
						</Link>
						<Link
							href="/mentions/mentions-legales"
							className="hover:text-mint transition-colors"
						>
							Mentions légales
						</Link>
						<Link
							href="/mentions/politique-confidentialite"
							className="hover:text-mint transition-colors"
						>
							Politique de confidentialité
						</Link>
						<Link
							href="/mentions/cgv"
							className="hover:text-mint transition-colors"
						>
							CGV
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
