"use client";

import Banner from "@/components/Banner/Banner";
import Banner2 from "@/components/Banner2/Banner2";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
	useEffect(() => {
		const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
		if (!userId) {
			console.error(
				"EmailJS USER_ID non trouvé dans les variables d'environnement"
			);
			return;
		}

		try {
			emailjs.init(userId);
			console.log("EmailJS initialisé avec succès");
		} catch (error) {
			console.error("Erreur lors de l'initialisation d'EmailJS:", error);
		}
	}, []);

	return (
		<main className="relative w-full">
			<Navbar />
			<div className="w-full">
				<section id="accueil" className="w-full">
					<Hero />
				</section>
				<section id="qui-sommes-nous" className="w-full">
					<Banner />
				</section>
				<section id="services" className="w-full">
					<Services />
					<Banner2 />
				</section>
				<section id="contact" className="w-full">
					<Contact />
				</section>
				<Footer />
			</div>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</main>
	);
}
