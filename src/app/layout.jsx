import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Inter, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-poppins",
	display: "swap",
	preload: true,
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-inter",
});

// ✅ URL de base avec www
const BASE_URL = "https://www.selmalya-tiers-payant.fr";

export const metadata = {
	metadataBase: new URL(BASE_URL), // ✅ Avec www
	title: "Selmalya - Expert en Gestion de Tiers-Payant | Solutions Professionnelles",
	description:
		"Expert en gestion de tiers-payant avec 20 ans d'expérience. Solutions personnalisées pour pharmacies et professionnels de santé. Optimisation des remboursements, délais réduits, expertise mutuelle.",
	keywords:
		"tiers-payant, gestion tiers-payant, spécialiste du tiers-payant, externalisation du tiers-payant, solution pharmacie France, remboursement santé, logiciel tiers-payant, SESAM-Vitale, télétransmission",
	authors: [{ name: "Selmalya" }],
	
	// ✅ CANONICAL avec www
	alternates: {
		canonical: BASE_URL,
		languages: {
			"fr-FR": BASE_URL,
		},
	},
	
	// ✅ Open Graph avec www
	openGraph: {
		title: "Selmalya - Expert en Gestion de Tiers-Payant",
		description:
			"Expert en gestion de tiers-payant depuis 20 ans. Solutions personnalisées, délais optimisés, expertise mutuelle.",
		type: "website",
		locale: "fr_FR",
		url: BASE_URL, // ✅ Avec www
		siteName: "Selmalya",
		images: [
			{
				url: `${BASE_URL}/images/SelmalyaMeta.png`,
				width: 1200,
				height: 630,
				alt: "Selmalya - Gestion Tiers-Payant",
			},
		],
	},
	
	// ✅ Twitter Card
	twitter: {
		card: "summary_large_image",
		title: "Selmalya - Expert en Gestion de Tiers-Payant",
		description:
			"Solutions professionnelles de gestion tiers-payant pour le secteur médical",
		images: [`${BASE_URL}/images/SelmalyaMeta.png`],
	},
	
	// ✅ Robots
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	
	// ✅ Verification Google
	verification: {
		google: "YwecL98dGul6PAhjxjPQYImTrL6NJnt4rcmaL985UZU",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr" className="light" style={{ colorScheme: "light" }}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
				<link rel="manifest" href="/manifest.json" />
			</head>
			<body
				className={`${geistSans.variable} ${poppins.variable} ${inter.variable} antialiased overflow-x-hidden`}
			>
				{children}
				<SpeedInsights />
				
				{/* ✅ Schema.org JSON-LD avec www */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "LocalBusiness",
							name: "Selmalya",
							url: BASE_URL, // ✅ Avec www
							logo: `${BASE_URL}/images/selmalyapng.png`,
							description:
								"Expert en gestion de tiers-payant avec 20 ans d'expérience",
							image: `${BASE_URL}/images/SelmalyaMeta.png`,
							telephone: "0184210733",
							address: {
								"@type": "PostalAddress",
								streetAddress: "7, allée André Malraux",
								addressLocality: "Villetaneuse",
								postalCode: "93400",
								addressCountry: "FR",
							},
							geo: {
								"@type": "GeoCoordinates",
								latitude: 48.9611722,
								longitude: 2.3439698,
							},
							openingHoursSpecification: {
								"@type": "OpeningHoursSpecification",
								dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
								opens: "09:00",
								closes: "18:00",
							},
							contactPoint: {
								"@type": "ContactPoint",
								telephone: "0184210733",
								contactType: "customer service",
								availableLanguage: "French",
								areaServed: "FR",
							},
						}),
					}}
				/>
			</body>
		</html>
	);
}