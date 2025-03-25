import { motion } from "framer-motion";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Blob from "../../assets/blob-selmalya.svg";
import HeroPng from "../../assets/selmalyapng.png";

export const FadeUp = (delay) => {
	return {
		initial: {
			opacity: 0,
			y: 50,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				duration: 0.5,
				delay: delay,
				ease: "easeInOut",
			},
		},
	};
};

export default function Hero() {
	const handleContactClick = () => {
		// Vous pouvez ajouter d'autres actions ici si nécessaire
		console.log("Navigation vers la section contact");
	};

	const MotionImage = motion(Image);

	return (
		<section className="bg-light min-h-[800px] sm:min-h-screen flex items-center justify-center py-10 sm:py-16">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 2xl:space-x-50 gap-16 lg:gap-15 xl:gap-30 px-4 sm:px-6 md:px-10 mt-10 lg:mt-0">
				{/* Blob et Image */}
				<div className="flex justify-center items-center px-4 md:px-10">
					<MotionImage
						src={Blob}
						alt="blob"
						className="absolute w-[580px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] opacity-70"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
					/>

					<motion.div
						className="relative w-[170px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] h-[170px] sm:h-[250px] md:h-[250px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-lg"
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
					>
						<Image
							src={HeroPng}
							alt="hero"
							className="absolute inset-0 w-full h-full object-contain bg-white"
						/>
					</motion.div>
				</div>

				{/* Texte */}
				<div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 px-4 md:px-8 mt-10 lg:mt-0 2xl:mt-10">
					<motion.h1
						className="text-5xl md:text-6xl lg:text-[80px] xl:text-8xl 2xl:text-9xl font-bold"
						initial="initial"
						animate="animate"
						variants={FadeUp(0.5)}
					>
						Selmalya
					</motion.h1>
					<motion.p
						className="text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-semibold"
						initial="initial"
						animate="animate"
						variants={FadeUp(0.6)}
					>
						Spécialiste du <span className="text-mint">Tiers-Payant</span>
					</motion.p>
					<motion.div
						initial="initial"
						animate="animate"
						variants={FadeUp(0.7)}
					>
						<ScrollLink
							to="contact"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
							onClick={handleContactClick}
							className="primary-btn flex items-center gap-2 mt-5 md:mt-15 px-10 py-3 text-lg md:text-xl lg:text-2xl cursor-pointer hover:shadow-xl hover:scale-101 transition-all"
						>
							Contactez-nous
						</ScrollLink>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
