import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function page() {
	return (
		<div className="relative">
			<Navbar />
			<div className="relative z-10">
				{/* Contenu de page */}
				<Hero />
				<Banner />
			</div>
		</div>
	);
}
