import Image from "next/image";
import Link from "next/link";
import LogoSelmalya from "../../assets/selmalyapng.png";

export default function Footer() {
	const foundingYear = 2023; 
	const currentYear = new Date().getFullYear();
	const copyrightYears =
		foundingYear === currentYear
			? currentYear
			: `${foundingYear}-${currentYear}`;
	return (
		<footer className="bg-mint-dark text-light py-10 px-4 md:px-8">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Première colonne - Logo et description */}
					<div className="flex flex-col items-center md:items-start">
						<div className="flex items-center mb-4">
							<Image
								src={LogoSelmalya}
								alt="Selmalya"
								className="logo w-20 h-20 border-2 border-black rounded-full object-contain bg-white"
							/>
							<h3 className="text-xl font-bold ml-3">Selmalya</h3>
						</div>
						<p className="text-sm text-center md:text-left mb-2">
							Spécialiste du tiers-payant pour les professionnels de santé. Nous
							simplifions votre gestion administrative.
						</p>
						<p className="text-xs text-center md:text-left">
							SIRET : 91025547000023
						</p>
					</div>

					{/* Deuxième colonne - Liens rapides */}
					<div className="flex flex-col items-center md:items-start">
						<h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
						<ul className="space-y-2 text-center md:text-left">
							<li>
								<Link href="/" className="hover:text-mint transition-colors">
									Accueil
								</Link>
							</li>
							<li>
								<Link
									href="#qui-sommes-nous"
									className="hover:text-mint transition-colors"
								>
									Qui sommes-nous ?
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="hover:text-mint transition-colors"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="hover:text-mint transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Troisième colonne - Coordonnées */}
					<div className="flex flex-col items-center md:items-start">
						<h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
						<address className="not-italic text-sm space-y-2 text-center md:text-left">
							<p>Email: selmalya.tierspayant@gmail.com</p>
							<p>Téléphone: 01 84 21 07 33</p>
							<p>Adresse: 7, allée André Malraux, 93430 Villetaneuse</p>
						</address>
					</div>
				</div>

				{/* Séparateur */}
				<div className="border-t border-white/20 my-6"></div>

				{/* Mentions légales et copyright */}
				<div className="flex flex-col md:flex-row justify-between items-center text-sm">
					<div className="mb-4 md:mb-0 text-center md:text-left">
						&copy; {copyrightYears} Selmalya. Tous droits réservés.
					</div>
					<div className="flex flex-wrap justify-center gap-4">
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
