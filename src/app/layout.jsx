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
		google: "votre-code-verification-google",
		yandex: "votre-code-yandex",
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
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body
				className={`${geistSans.variable} ${poppins.variable} ${inter.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
