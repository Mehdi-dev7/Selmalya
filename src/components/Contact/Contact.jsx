import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import { motion } from "framer-motion";
export default function Contact() {
	return (
		<section className="bg-light min-h-[1600px] lg:min-h-[1100px]">
			<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 pt-20">
				<motion.h1 
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="text-3xl text-center lg:text-left xl:text-[50px] lg:text-[40px] md:text-5xl font-bold !leading-snug text-mint-dark mb-10">
					Contactez-nous
				</motion.h1>
				<div className="flex flex-col lg:flex-row bg-mint/70 rounded-lg p-8 md:p-10 gap-8 lg:gap-24 justify-between shadow-xl ">
					<ContactLeft />
					<ContactRight />
				</div>
			</div>
		</section>
	);
}
