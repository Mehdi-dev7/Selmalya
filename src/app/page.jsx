import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ServicesBis from "@/components/Services/ServicesBis";
import Banner2 from "@/components/Banner2/Banner2";
import Contact from "@/components/Contact/Contact";

export default function page() {
	return (
		<div className="relative">
			<Navbar />
			<div className="relative z-10">
				{/* Contenu de page */}
				<Hero />
				<Banner />
				<ServicesBis />
				<Banner2 />
				<Contact />
			</div>
		</div>
	);
}
