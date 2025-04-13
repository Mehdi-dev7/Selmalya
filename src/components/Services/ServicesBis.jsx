import { motion } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import { FaFileInvoiceDollar, FaHandHoldingUsd } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { PiVignette } from "react-icons/pi";
import { Link as ScrollLink } from "react-scroll";

export default function ServicesBis() {
	const services = [
		{
			id: 1,
			title: "Gestion des tiers payants",
			description: "Traitement complet de vos tiers payants",
			icon: <FaHandHoldingUsd className="text-mint-dark" />,
		},
		{
			id: 2,
			title: "Gestion des Crédits",
			description: "Suivi et optimisation de vos crédits",
			icon: <FaFileInvoiceDollar className="text-mint-dark" />,
		},
		{
			id: 3,
			title: "Gestion des vignettes avancées",
			description: "Traitement efficace des vignettes",
			icon: <PiVignette className="text-mint-dark" />,
		},
		{
			id: 4,
			title: "Satisfaction client",
			description: "Support client personnalisé",
			icon: <IoMdHappy className="text-mint-dark" />,
		},
		{
			id: 5,
			title: "Assistance",
			description: "Support technique dédié",
			icon: <BiSupport className="text-mint-dark" />,
		},
		{
			id: 6,
			title: "Confidentialité",
			description: "Sécurité des données garantie",
			icon: <MdSecurity className="text-mint-dark" />,
		},
	];

	const handleContactClick = () => {
		// Gérer le clic si nécessaire
	};

	return (
		<section className="bg-light py-16">
			<div className="container mx-auto px-4 sm:px-6 md:px-8">
				<motion.h1
					className="text-3xl text-center lg:text-left xl:text-[50px] lg:text-[40px] md:text-5xl font-bold !leading-snug text-mint-dark mb-20 lg:ml-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Notre Formule Complète
				</motion.h1>

				<motion.div
					className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					{/* En-tête de la formule */}
					<div className="bg-mint/50 p-8 text-center">
						<h2 className="text-3xl font-bold text-mint-dark mb-2">
							Pack Professionnel
						</h2>
						<p className="text-gray-600 mb-4">
							Solution complète pour votre gestion de tiers-payant
						</p>
						<div className="text-3xl font-bold text-mint-dark ml-2">
							À partir de 165€{" "}
							<span className="text-lg font-normal italic">/mois</span>
						</div>
					</div>

					{/* Liste des services */}
					<div className="p-8">
						<div className="border-2 border-mint rounded-xl p-6 bg-light/50">
							<div className="grid gap-6">
								{services.map((service) => (
									<motion.div
										key={service.id}
										className="flex items-start gap-4 p-4 hover:bg-mint/5 rounded-lg transition-colors"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: service.id * 0.1 }}
									>
										<div className="text-3xl flex-shrink-0">{service.icon}</div>
										<div>
											<h3 className="font-semibold text-lg text-mint-dark">
												{service.title}
											</h3>
											<p className="text-gray-600 mt-1">
												{service.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>

						{/* Bouton d'action */}
						<motion.div
							className="mt-8 text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3, duration: 0.6 }}
						>
							<ScrollLink
								to="contact"
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
								onClick={handleContactClick}
								className="inline-block primary-btn px-10 py-3 text-lg md:text-xl lg:text-2xl cursor-pointer hover:shadow-xl hover:scale-101 transition-all"
							>
								Contactez-nous
							</ScrollLink>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
