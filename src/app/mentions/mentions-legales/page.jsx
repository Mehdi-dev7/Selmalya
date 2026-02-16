import FooterLegal from "@/components/Footer/FooterLegal";
import NavbarLegal from "@/components/Navbar/NavbarLegal";

export const metadata = {
	title: "Mentions Légales | Selmalya",
	description:
		"Mentions légales de Selmalya, expert en gestion de tiers-payant pour les pharmacies et professionnels de santé.",
	alternates: {
		canonical:
			"https://www.selmalya-tiers-payant.fr/mentions/mentions-legales",
	},
	robots: { index: true, follow: true },
};

export default function MentionsLegales() {
	return (
		<>
			<NavbarLegal />
			<main className="container mx-auto p-6 bg-light min-h-screen">
				<h1 className="text-3xl font-bold mb-6 pt-20">Mentions Légales</h1>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">
						1. Éditeur du site
					</h2>
					<div className="mt-2">
						<p>
							<strong>Nom de l'entreprise :</strong> Selmalya
						</p>
						<p>
							<strong>Activité :</strong> Gestionnaire du tiers-payant - Service
							administratif
						</p>
						<p>
							<strong>Adresse :</strong> 7, allée André Malraux, 93400
							Villetaneuse
						</p>
						<p>
							<strong>Téléphone :</strong> 01 84 21 07 33 / 06 64 76 92 30
						</p>
						<p>
							<strong>Email :</strong> contact@selmalya.tierspayant.com
						</p>
						<p>
							<strong>SIRET :</strong> 91025547000023
						</p>
					</div>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">
						2. Directeur de la publication
					</h2>
					<p className="mt-2">Nom du responsable : Derfoufi Ilham</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">
						3. Développement du site
					</h2>
					<p className="mt-2">
						Développeur : Didou Wilfrid (Mehdi-dev7 - GitHub :
						github.com/Mehdi-dev7)
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">
						4. Hébergeur du site
					</h2>
					<div className="mt-2">
						<p>
							<strong>Nom : OVHcloud</strong>
						</p>
						<p>
							<strong>Adresse :</strong> 2 rue Kellermann - 59100 Roubaix -
							France
						</p>
						<p>
							<strong>Téléphone :</strong> +33 (0)9 72 10 10 07
						</p>
						<p>
							<strong>Email :</strong> support@ovhcloud.com
						</p>
						<p>
							<strong>Site web :</strong> https://www.ovhcloud.com
						</p>
					</div>
				</section>

				<section className="mb-20">
					<h2 className="text-xl font-semibold text-mint-dark">
						5. Propriété intellectuelle
					</h2>
					<p className="mt-2">
						L'ensemble du contenu du site Selmalya (textes, images, logos, etc.)
						est protégé par le droit d'auteur et la propriété intellectuelle.
						Toute reproduction ou exploitation non autorisée est interdite.
					</p>
				</section>
			</main>
			<FooterLegal />
		</>
	);
}
