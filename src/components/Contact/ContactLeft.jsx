import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactLeft() {
	return (
		<div className="w-full lg:w-[70%]">
			<motion.div
				className="mb-6"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ amount: 0.3, once: true }}
				transition={{ duration: 0.5 }}
			>
				<h2 className="text-2xl md:text-3xl font-semibold text-mint-dark mb-10 md:mb-15">
					Obtenir un devis
				</h2>
			</motion.div>
			<ContactForm />
		</div>
	);
}
