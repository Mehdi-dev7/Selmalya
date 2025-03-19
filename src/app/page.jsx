import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Banner2 from "@/components/Banner2/Banner2";
export default function page() {
	return (
		<div className="relative">
			<Navbar />
			<div className="relative z-10">
				{/* Contenu de page */}
				<Hero />
				<Banner />
				<Services />
				<Banner2 />
			</div>
		</div>
	);
}
