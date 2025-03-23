import Image from "next/image";
import BannerImage from "../../assets/Designer.svg";

export default function Banner() {
	return (
		<section className="bg-light/50 min-h-[1100px] flex items-center justify-center">
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 py-14 md:py-24">
				{/* banner text */}
				<div className="flex flex-col justify-center items-center lg:items-start w-full max-w-xl mx-auto lg:mx-0">
					<div className="text-center lg:text-left space-y-6 md:pr-6">
						<h1 className="text-4xl xl:text-[50px] md:text-5xl font-bold !leading-snug text-mint-dark mb-20">
							Qui sommes-nous ?
						</h1>
						<h2 className="text-xl md:text-2xl font-semibold">
							Votre Expert en Gestion du <span className="text-mint">Tiers-Payant</span>
						</h2>
						<p className="text-base sm:text-lg md:text-xl leading-relaxed">
							Avec 20 ans d'expérience en pharmacie, Selmalya est le partenaire
							de confiance des officines pour l'externalisation du tiers payant.
							Nous comprenons les défis quotidiens des pharmaciens et offrons
							des solutions sur mesure pour optimiser la gestion administrative
							et réduire les rejets de factures.
						</p>
					</div>
				</div>
				{/* banner image */}
				<div className="flex justify-center items-center w-full max-w-xl xl:max-w-4xl mx-auto lg:mx-0">
					<Image
						src={BannerImage}
						alt="banner"
						className="w-full max-w-md md:max-w-xl xl:w-[600px] h-auto"
					/>
				</div>
			</div>
		</section>
	);
}
