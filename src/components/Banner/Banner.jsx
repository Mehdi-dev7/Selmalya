import { motion } from "framer-motion";
import Image from "next/image";
import BannerImage from "../../assets/Designer.svg";

export default function Banner() {
	return (
		<section className="bg-light/50 min-h-[800px] sm:min-h-[1000px] flex items-center justify-center py-10 sm:py-16">
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 py-8 md:py-24">
				{/* banner text */}
				<div className="flex flex-col justify-center items-center lg:items-start w-full max-w-xl mx-auto order-2 lg:order-1">
					<div className="text-center lg:text-left space-y-4 sm:space-y-6">
						<motion.h1
							className="text-3xl xl:text-[50px] md:text-5xl lg:text-[40px] font-bold leading-tight text-mint-dark mb-8 sm:mb-12 md:mb-16"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ amount: 0.3, once: true }}
							transition={{ duration: 0.5 }}
						>
							Qui sommes-nous ?
						</motion.h1>
						<motion.h2
							className="text-xl md:text-2xl font-semibold"
							initial={{ y: 50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ amount: 0.3, once: true }}
							transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
						>
							Spécialiste de l'externalisation du{" "}
							<span className="text-mint">Tiers-Payant</span>
						</motion.h2>
						<motion.p
							className="text-base text-start sm:text-lg md:text-xl leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ amount: 0.3, once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							Avec 20 ans d'expérience en pharmacie,{" "}
							<span className="text-mint font-semibold md:text-2xl text-xl">
								Selmalya
							</span>{" "}
							est le partenaire de confiance des pharmacies pour
							l'externalisation du tiers payant. Nous comprenons les défis
							quotidiens des pharmaciens et offrons des solutions sur mesure
							pour optimiser la gestion administrative et réduire les rejets de
							factures.
						</motion.p>
					</div>
				</div>

				{/* banner image */}
				<motion.div
					className="flex justify-center items-center w-full max-w-xl mx-auto lg:pl-8 order-1 lg:order-2"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ amount: 0.3, once: true }}
					transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
				>
					<Image
						src={BannerImage}
						alt=""
						className="w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:w-[100%] h-auto"
						quality={75}
					/>
				</motion.div>
			</div>
		</section>
	);
}
