import FooterLegal from "@/components/Footer/FooterLegal";
import NavbarLegal from "@/components/Navbar/NavbarLegal";

export const metadata = {
	title: "Politique de Confidentialité | Selmalya",
	description:
		"Politique de confidentialité et traitement des données personnelles de Selmalya, conforme au RGPD.",
	alternates: {
		canonical:
			"https://www.selmalya-tiers-payant.fr/mentions/politique-confidentialite",
	},
	robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialite() {
	return (
		<>
			<NavbarLegal />
			<main className="container mx-auto p-6 bg-light min-h-screen">
				<h1 className="text-3xl font-bold mb-6 pt-20">
					Politique de Confidentialité
				</h1>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">
						1. Collecte des données
					</h2>
					<p className="mt-2">
						Nous collectons des informations personnelles via nos formulaires de
						contact et lors de nos échanges avec les clients. Les données sont
						utilisées uniquement dans le cadre de la gestion administrative et
						commerciale de nos services.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">
						2. Utilisation des données
					</h2>
					<div className="mt-2">
						<p className="mb-2">
							Les informations collectées sont destinées à :
						</p>
						<ul className="list-disc pl-6 space-y-1">
							<li>La gestion des demandes clients</li>
							<li>L'envoi d'informations sur nos services</li>
							<li>L'amélioration de notre site et de nos services</li>
						</ul>
					</div>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">
						3. Confidentialité et sécurité
					</h2>
					<p className="mt-2">
						Nous mettons en place des mesures de sécurité pour protéger les
						données personnelles. Aucune information n'est cédée à des tiers
						sans autorisation explicite.
					</p>
				</section>

				<section className="mb-20">
					<h2 className="text-xl font-semibold text-mint-dark">
						4. Droits des utilisateurs
					</h2>
					<p className="mt-2">
						Conformément au RGPD, vous pouvez demander l'accès, la modification
						ou la suppression de vos données en nous contactant à{" "}
						<a
							href="mailto:contact@selmalya.tierspayant.com"
							className="text-mint-dark hover:text-mint underline transition-colors"
						>
							contact@selmalya.tierspayant.com
						</a>
						.
					</p>
				</section>
			</main>
			<FooterLegal />
		</>
	);
}
