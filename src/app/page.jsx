import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function page() {
	return (
		<div>
			<Navbar />
			{/* Contenu de page */}
			<Hero />
			<Banner />
		
		</div>
	);
}
