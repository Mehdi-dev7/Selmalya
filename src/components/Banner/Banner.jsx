import { motion } from "framer-motion";
import Image from "next/image";
import BannerImage from "../../assets/Designer.svg";

export default function Banner() {
	return (
		<section className="bg-light/50 w-full min-h-[1100px]">
			<div className="container mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-24">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* banner text */}
					<div className="flex flex-col justify-center items-center lg:items-start w-full max-w-xl mx-auto lg:mx-0">
						<div className="text-center lg:text-left space-y-6 md:pr-6">
							<motion.h1
								className="text-4xl xl:text-[50px] md:text-5xl font-bold !leading-snug text-mint-dark mb-20"
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ amount: 0.3, once: true }}
								transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
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
								Votre Expert en Gestion du{" "}
								<span className="text-mint">Tiers-Payant</span>
							</motion.h2>
							<motion.p
								className="text-base sm:text-lg md:text-xl leading-relaxed"
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ amount: 0.3, once: true }}
								transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
							>
								Avec 20 ans d'expérience en pharmacie, Selmalya est le
								partenaire de confiance des officines pour l'externalisation du
								tiers payant. Nous comprenons les défis quotidiens des
								pharmaciens et offrons des solutions sur mesure pour optimiser
								la gestion administrative et réduire les rejets de factures.
							</motion.p>
						</div>
					</div>
					{/* banner image */}
					<motion.div
						className="flex justify-center items-center w-full max-w-xl xl:max-w-4xl mx-auto lg:mx-0"
						initial={{ x: 50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ amount: 0.3, once: true }}
						transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
					>
						<Image
							src={BannerImage}
							alt="banner"
							className="w-full max-w-md md:max-w-xl xl:w-[600px] h-auto"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
