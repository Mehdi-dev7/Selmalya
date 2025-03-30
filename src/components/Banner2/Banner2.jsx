import { motion } from "framer-motion";
import Image from "next/image";
import BannerImage from "../../assets/Agreement.svg";
export default function Banner2() {
	const listAnimation = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemAnimation = {
		hidden: { opacity: 0, x: -20 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				duration: 0.5,
				bounce: 0.3,
			},
		},
	};

	return (
		<section className="bg-light/50 min-h-[800px] sm:min-h-[1000px] flex items-center justify-center py-10 sm:py-16">
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 py-8 md:py-24">
				{/* banner image  */}
				<motion.div
					className="flex justify-center items-center w-full max-w-xl mx-auto lg:pr-8 order-1 lg:order-1"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ amount: 0.3, once: true }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<Image
						src={BannerImage}
						alt=""
						className="w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:w-[100%] h-auto"
						quality={75}
					/>
				</motion.div>

				{/* banner text */}
				<div className="flex flex-col justify-center items-center lg:items-start w-full max-w-xl mx-auto order-2 lg:order-2">
					<div className="text-center lg:text-left space-y-4 sm:space-y-6">
						<motion.h1
							className="text-3xl xl:text-[50px] lg:text-[40px] md:text-5xl font-bold leading-tight text-mint-dark mb-8 sm:mb-12 md:mb-16"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ amount: 0.3, once: true }}
							transition={{ duration: 0.5 }}
						>
							Pourquoi choisir Selmalya ?
						</motion.h1>
						<motion.ul
							className="space-y-4 sm:space-y-6 pl-0 text-base sm:text-lg md:text-xl leading-relaxed"
							variants={listAnimation}
							initial="hidden"
							whileInView="show"
							viewport={{ amount: 0.3, once: true }}
						>
							{/* Liste d'items avec animation */}
							<motion.li variants={itemAnimation} className="flex items-start">
								<div className="mt-[3px] lg:mt-1 mr-2 sm:mr-3 flex-shrink-0">
									<div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-mint text-light">
										<span className="text-center translate-y-[-1px]">›</span>
									</div>
								</div>
								<div className="flex-1 text-start">
									Une approche personnalisée et un suivi régulier
								</div>
							</motion.li>
							<motion.li variants={itemAnimation} className="flex items-start">
								<div className="mt-[3px] lg:mt-1 mr-2 sm:mr-3 flex-shrink-0">
									<div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-mint text-light">
										<span className="text-center translate-y-[-1px]">›</span>
									</div>
								</div>
								<div className="flex-1 text-start">
									Une maîtrise approfondie des réglementations en vigueur
								</div>
							</motion.li>
							<motion.li variants={itemAnimation} className="flex items-start">
								<div className="mt-[3px] lg:mt-1 mr-2 sm:mr-3 flex-shrink-0">
									<div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-mint text-light">
										<span className="text-center translate-y-[-1px]">›</span>
									</div>
								</div>
								<div className="flex-1 text-start">
									Un gain de temps précieux pour vous concentrer sur vos
									patients
								</div>
							</motion.li>
						</motion.ul>
						<motion.div
							className="text-base sm:text-lg md:text-xl leading-relaxed mt-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ amount: 0.3, once: true }}
							transition={{ duration: 0.6, delay: 0.8 }}
						>
							<div className="text-start">
								<span className="text-mint font-semibold text-xl sm:text-2xl md:text-3xl block sm:inline mb-2 sm:mb-0">
									Chez Selmalya,
								</span>
								<p className="">
									nous privilégions une relation de proximité et de confiance.
									Contrairement aux grandes structures impersonnelles, nous
									sommes une entreprise à taille humaine, proche de nos clients,
									et toujours à l'écoute de leurs besoins. Avec nous, vous
									n'êtes pas un simple numéro, mais un partenaire avec qui nous
									construisons une relation durable et familiale. Ne laissez
									plus les problèmes de tiers payant freiner votre activité.
								</p>
							</div>
							<p className="mt-4 sm:mt-6 text-start">
								<span className="text-mint font-semibold text-xl sm:text-2xl md:text-3xl block sm:inline mb-2 sm:mb-0">
									Contactez-nous
								</span>
								<span className="inline sm:inline"> </span>
								dès aujourd'hui pour une solution adaptée à vos besoins !
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
