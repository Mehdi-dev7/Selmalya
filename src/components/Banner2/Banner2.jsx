import Image from "next/image";
import BannerImage from "../../assets/Agreement.svg";

export default function Banner2() {
	return (
		<section className="bg-light/50 min-h-[800px] sm:min-h-[1000px] flex items-center justify-center py-10 sm:py-16">
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 py-8 md:py-24">
				{/* banner image  */}
				<div className="flex justify-center items-center w-full max-w-xl mx-auto lg:pr-8 order-1 lg:order-1">
					<Image
						src={BannerImage}
						alt="Selmalya partenariat"
						className="w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:w-[100%] h-auto"
					/>
				</div>

				{/* banner text */}
				<div className="flex flex-col justify-center items-center lg:items-start w-full max-w-xl mx-auto order-2 lg:order-2">
					<div className="text-center lg:text-left space-y-4 sm:space-y-6">
						<h1 className="text-3xl sm:text-4xl xl:text-[50px] md:text-5xl font-bold leading-tight text-mint-dark mb-8 sm:mb-12 md:mb-16">
							Pourquoi choisir Selmalya ?
						</h1>
						<ul className="space-y-4 sm:space-y-6 pl-0 text-base sm:text-lg md:text-xl leading-relaxed">
							<li className="flex items-start">
								<div className="mt-1 mr-2 sm:mr-3 flex-shrink-0">
									<div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-mint text-white">
										<span className="text-center">›</span>
									</div>
								</div>
								<div className="flex-1">
									Une approche personnalisée et un suivi régulier
								</div>
							</li>
							<li className="flex items-start">
								<div className="mt-1 mr-2 sm:mr-3 flex-shrink-0">
									<div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-mint text-white">
										<span className="text-center">›</span>
									</div>
								</div>
								<div className="flex-1">
									Une maîtrise approfondie des réglementations en vigueur
								</div>
							</li>
							<li className="flex items-start">
								<div className="mt-1 mr-2 sm:mr-3 flex-shrink-0">
									<div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-mint text-white">
										<span className="text-center">›</span>
									</div>
								</div>
								<div className="flex-1">
									Un gain de temps précieux pour vous concentrer sur vos
									patients
								</div>
							</li>
						</ul>
						<div className="text-base sm:text-lg md:text-xl leading-relaxed mt-6">
							<p>
								<span className="text-mint font-semibold text-xl sm:text-2xl md:text-3xl block sm:inline mb-2 sm:mb-0">
									Chez Selmalya
								</span>
								<span className="inline sm:inline">, </span>
								nous privilégions une relation de proximité et de confiance.
								Contrairement aux grandes structures impersonnelles, nous sommes
								une entreprise à taille humaine, proche de nos clients, et
								toujours à l'écoute de leurs besoins. Avec nous, vous n'êtes pas
								un simple numéro, mais un partenaire avec qui nous construisons
								une relation durable et familiale. Ne laissez plus les problèmes
								de tiers payant freiner votre activité.
							</p>
							<p className="mt-4 sm:mt-6">
								<span className="text-mint font-semibold text-xl sm:text-2xl md:text-3xl block sm:inline mb-2 sm:mb-0">
									Contactez-nous
								</span>
								<span className="inline sm:inline"> </span>
								dès aujourd'hui pour une solution adaptée à vos besoins !
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
