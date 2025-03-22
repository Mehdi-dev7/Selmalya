import Image from "next/image";
import BannerImage from "../../assets/Agreement.svg";

export default function Banner2() {
	return (
		<section className="bg-light/50 min-h-[1000px] flex items-center justify-center">
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 py-14 md:py-24">
				{/* banner image  */}
				<div className="flex justify-center items-center w-full max-w-xl xl:max-w-4xl mx-auto lg:pr-30">
					<Image
						src={BannerImage}
						alt="Selmalya partenariat"
						className="w-full max-w-md md:max-w-xl lg:w-[120%] md:w-[80%] xl:w-[600px] h-auto"
					/>
				</div>

				{/* banner text */}
				<div className="flex flex-col justify-center items-center lg:items-start w-full max-w-xl mx-auto">
					<div className="text-center lg:text-left space-y-6 md:pr-6">
						<h1 className="text-4xl xl:text-[50px] md:text-5xl font-bold !leading-snug text-mint-dark mb-20 2xl:whitespace-nowrap">
							Pourquoi choisir Selmalya ?
						</h1>
						<ul className="space-y-6 pl-0 text-lg md:text-xl leading-relaxed">
							<li className="flex items-start">
								<span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 mr-3 mt-1 rounded-full bg-mint text-white">
									›
								</span>
								<span>Une approche personnalisée et un suivi régulier</span>
							</li>
							<li className="flex items-start">
								<span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 mr-3 mt-1 rounded-full bg-mint text-white">
									›
								</span>
								<span>
									Une maîtrise approfondie des réglementations en vigueur
								</span>
							</li>
							<li className="flex items-start">
								<span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 mr-3 mt-1 rounded-full bg-mint text-white">
									›
								</span>
								<span>
									Un gain de temps précieux pour vous concentrer sur vos
									patients
								</span>
							</li>
						</ul>
						<div className="text-lg md:text-xl leading-relaxed">
							<p>
								<span className="text-mint font-semibold text-3xl">
									{" "}
									Chez Selmalya
								</span>
								, nous privilégions une relation de proximité et de confiance.
								Contrairement aux grandes structures impersonnelles, nous sommes
								une entreprise à taille humaine, proche de nos clients, et
								toujours à l'écoute de leurs besoins. Avec nous, vous n'êtes pas
								un simple numéro, mais un partenaire avec qui nous construisons
								une relation durable et familiale. Ne laissez plus les problèmes
								de tiers payant freiner votre activité.
							</p>
							<p className="mt-6">
								<span className="text-mint font-semibold text-3xl">
									Contactez-nous
								</span>
								{"  "}
								dès aujourd'hui pour une solution adaptée à vos besoins !
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
