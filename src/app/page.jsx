import Banner from "@/components/Banner/Banner";
import Banner2 from "@/components/Banner2/Banner2";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ServicesBis from "@/components/Services/ServicesBis";
import ToastProvider from "@/components/ToastProvider";

export default function Page() {
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
					<ServicesBis />
					<Banner2 />
				</section>
				<section className="w-full">
					<Blog />
				</section>
				<section id="contact" className="w-full">
					<Contact />
				</section>
				<Footer />
			</div>
			<ToastProvider />
		</main>
	);
}
