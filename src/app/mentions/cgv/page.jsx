import FooterLegal from "@/components/Footer/FooterLegal";
import NavbarLegal from "@/components/Navbar/NavbarLegal";

export const metadata = {
	title: "Conditions Générales de Vente | Selmalya",
	description:
		"Consultez les conditions générales de vente des services de gestion de tiers-payant proposés par Selmalya.",
	alternates: {
		canonical: "https://www.selmalya-tiers-payant.fr/mentions/cgv",
	},
	robots: { index: true, follow: true },
};

export default function CGV() {
	return (
		<>
			<NavbarLegal />
			<main className="container mx-auto p-6 bg-light min-h-screen">
				<h1 className="text-3xl font-bold mb-6 pt-20">
					Conditions Générales de Vente (CGV)
				</h1>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">1. Objet</h2>
					<p className="mt-2">
						Les présentes CGV définissent les conditions de fourniture des
						services de gestion de tiers-payant proposés par Selmalya.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">
						2. Services proposés
					</h2>
					<p className="mt-2">
						Selmalya offre des prestations d'externalisation et de gestion du
						tiers-payant pour les officines pharmaceutiques.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">
						3. Tarification et paiement
					</h2>
					<p className="mt-2">
						Les tarifs sont communiqués sur demande. Le règlement s'effectue
						selon les modalités définies dans le contrat.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">
						4. Responsabilité
					</h2>
					<p className="mt-2">
						Selmalya s'engage à fournir un service conforme aux attentes de ses
						clients, mais ne peut être tenu responsable des erreurs imputables
						aux organismes de tiers-payant.
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold text-mint-dark">
						5. Résiliation
					</h2>
					<p className="mt-2">
						Tout contrat peut être résilié selon les modalités prévues dans les
						conditions particulières signées entre les parties.
					</p>
				</section>

				<section className="mb-20">
					<h2 className="text-xl font-semibold text-mint-dark">6. Litiges</h2>
					<p className="mt-2">
						En cas de litige, une solution amiable sera recherchée en priorité.
						À défaut, le tribunal compétent sera celui du ressort de notre siège
						social.
					</p>
				</section>
			</main>
			<FooterLegal />
		</>
	);
}
