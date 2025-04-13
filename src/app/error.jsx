"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-light">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-mint-dark mb-4">
					Une erreur est survenue
				</h1>
				<p className="mb-8">Nous nous excusons pour ce désagrément.</p>
				<button
					onClick={reset}
					className="bg-mint hover:bg-mint-dark text-white font-semibold py-2 px-6 rounded-full transition-colors"
				>
					Réessayer
				</button>
			</div>
		</div>
	);
}
