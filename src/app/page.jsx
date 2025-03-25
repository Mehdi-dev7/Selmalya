"use client";

import Banner from "@/components/Banner/Banner";
import Banner2 from "@/components/Banner2/Banner2";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ServicesBis from "@/components/Services/Services";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
	useEffect(() => {
		emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "USER_ID");
	}, []);

	return (
		<main className="relative">
			<Navbar />
			<div>
				{/* <section id="accueil">
					<Hero />
				</section>
				<section id="qui-sommes-nous">
					<Banner />
				</section> */}
				<section id="services">
					{/* <ServicesBis /> */}
					<Banner2 />
				</section>
				<section id="contact">
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
