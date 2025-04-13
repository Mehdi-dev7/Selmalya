import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-light">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-mint-dark mb-4">404</h1>
				<h2 className="text-2xl font-semibold mb-4">Page non trouvée</h2>
				<p className="mb-8">
					Désolé, la page que vous recherchez n'existe pas.
				</p>
				<Link
					href="/"
					className="bg-mint hover:bg-mint-dark text-white font-semibold py-2 px-6 rounded-full transition-colors"
				>
					Retour à l'accueil
				</Link>
			</div>
		</div>
	);
}
