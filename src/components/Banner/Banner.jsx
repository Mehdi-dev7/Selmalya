import Image from "next/image";
import BannerImage from "../../assets/Designer.svg";


export default function Banner() {
	return (
		<section className="bg-light/50 min-h-screen flex items-center justify-center">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 py-14 md:py-24 items-center justify-center">
				{/* banner text */}
				<div className="flex flex-col justify-center items-center md:items-start w-full max-w-xl">
					<div className="text-center md:text-left space-y-6 md:mr-10">
						<h1 className="text-4xl md:text-[50px] font-bold !leading-snug text-mint-dark mb-20">Qui sommes-nous ?</h1>
						<h2 className="text-xl md:text-2xl font-semibold">Votre Expert en Gestion du Tiers-Payant</h2>
            <p className="text-lg md:text-xl leading-relaxed">Avec 20 ans d'expérience en pharmacie, Selmalya est le partenaire de confiance des officines pour l'externalisation du tiers payant. Nous comprenons les défis quotidiens des pharmaciens et offrons des solutions sur mesure pour optimiser la gestion administrative et réduire les rejets de factures.</p>
					</div>
				</div>
				{/* banner image */}
				<div className="flex justify-center items-center w-full max-w-xl xl:max-w-4xl">
					<Image src={BannerImage} alt="banner" className="w-full max-w-md md:max-w-xl xl:w-[600px] h-auto" />
				</div>
			</div>
		</section>
	);
}
