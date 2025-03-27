import { Geist, Inter, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

// Poppins
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-poppins",
});

// Inter
const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-inter",
});

export const metadata = {
	title: "Selmalya - Gestion Professionnelle de Tiers-Payant",
	description:
		"Expert en gestion de tiers-payant avec 20 ans d'expérience. Selmalya propose des solutions personnalisées pour pharmacies et professionnels de santé. Optimisez vos remboursements et simplifiez votre gestion administrative.",
	keywords:
		"tiers-payant, gestion tiers-payant, solution médicale, gestion santé, pharmacie, professionnel santé, mutuelle santé, remboursement santé, gestion pharmacie, tiers payant pharmacie, expert tiers-payant",
	authors: [{ name: "Selmalya" }],
	metadataBase: new URL("https://selmalya-tiers-payant.fr"),
	openGraph: {
		title: "Selmalya - Expert en Gestion de Tiers-Payant",
		description:
			"Solutions professionnelles de gestion tiers-payant pour le secteur médical",
		type: "website",
		locale: "fr_FR",
		images: [
			{
				url: "/images/SelmalyaMeta.png", // Assurez-vous d'avoir cette image
				width: 1200,
				height: 630,
				alt: "Selmalya - Gestion Tiers-Payant",
			},
		],
		siteName: "Selmalya",
		url: "https://selmalya-tiers-payant.fr",
	},
	twitter: {
		card: "summary_large_image",
		title: "Selmalya - Expert en Gestion de Tiers-Payant",
		description:
			"Solutions professionnelles de gestion tiers-payant pour le secteur médical",
		images: ["/images/SelmalyaMeta.png"], // Assurez-vous d'avoir cette image
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
			notranslate: false,
		},
		nocache: false,
	},
	verification: {
		google: "YwecL98dGul6PAhjxjPQYImTrL6NJnt4rcmaL985UZU",
		yandex: "",
	},
	alternates: {
		canonical: "https://selmalya-tiers-payant.fr",
		languages: {
			"fr-FR": "https://selmalya-tiers-payant.fr",
		},
	},
	other: {
		"application-name": "Selmalya",
		"theme-color": "#88cfac",
		"apple-mobile-web-app-capable": "yes",
		"apple-mobile-web-app-status-bar-style": "default",
		"format-detection": "telephone=no",
		"mobile-web-app-capable": "yes",
		"msapplication-TileColor": "#88cfac",
		"msapplication-config": "/browserconfig.xml",
	},
	social: {
		linkedin: "url-de-votre-page-linkedin",
	},
	localBusiness: {
		"@type": "LocalBusiness",
		name: "Selmalya",
		image: "/images/SelmalyaMeta.png",
		"@id": "https://selmalya-tiers-payant.fr",
		url: "https://selmalya-tiers-payant.fr",
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
			latitude: "48.9611722",
			longitude: "2.3439698",
		},
		openingHoursSpecification: {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "09:00",
			closes: "18:00",
		},
	},
	article: {
		"@type": "Organization",
		name: "Selmalya",
		description: "Expert en gestion de tiers-payant avec 20 ans d'expérience",
		logo: "/images/SelmalyaMeta.png",
		sameAs: ["url-linkedin", "autres-reseaux-sociaux"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="fr"
			className="light"
			style={{ colorScheme: "light" }}
			{...(process.env.NODE_ENV === "development"
				? { suppressHydrationWarning: true }
				: {})}
		>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
				<meta name="format-detection" content="telephone=no" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
			</head>
			<body
				className={`${geistSans.variable} ${poppins.variable} ${inter.variable} antialiased overflow-x-hidden`}
			>
				{children}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Selmalya",
							url: "https://selmalya-tiers-payant.fr",
							logo: "/images/selmalyapng.png",
							contactPoint: {
								"@type": "ContactPoint",
								telephone: "0184210733",
								contactType: "customer service",
								availableLanguage: ["French"],
							},
						}),
					}}
				/>
			</body>
		</html>
	);
}
