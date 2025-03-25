import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
export default function ContactInfo() {
	return (
		<motion.div 
		initial={{ opacity: 0, y: 40 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.3 }}
		transition={{ duration: 0.4,delay: 0.6, ease: "easeOut" }}
		className="flex flex-col gap-4 font-semibold text-mint-dark">
			{/* Email avec lien mailto */}
			<div className="flex items-center gap-2 md:gap-4 justify-start">
				<HiOutlineMail className="text-3xl" />
				<a 
					href="mailto:selmalya.tierspayant@gmail.com" 
					target="_blank"
					className="hover:underline transition-all duration-200 hover:text-light"
				>
					selmalya.tierspayant@gmail.com
				</a>
			</div>
			
			{/* Téléphone avec lien tel: */}
			<div className="flex items-center gap-4 justify-start">
				<FiPhone className="text-3xl" />
				<a 
					href="tel:+33184210733"
					className="hover:underline transition-all duration-200 hover:text-light"
				>
					+33 1 84 21 07 33
				</a>
			</div>
			
			{/* WhatsApp avec lien WhatsApp */}
			<div className="flex items-center gap-4 justify-start">
				<FaWhatsapp className="text-3xl" />
				<a 
					href="https://wa.me/33664769230" 
					target="_blank" 
					rel="noopener noreferrer"
					className="hover:underline transition-all duration-200 hover:text-light"
				>
					+33 6 64 76 92 30
				</a>
			</div>
			
			{/* Adresse avec lien Google Maps */}
			<div className="flex items-center gap-4 justify-start">
				<IoLocationOutline className="text-3xl" />
				<a 
					href="https://maps.google.com/?q=7,+allée+André+Malraux,+93430+villetaneuse,+France" 
					target="_blank" 
					rel="noopener noreferrer"
					className="hover:underline transition-all duration-200 hover:text-light"
				>
					7, allée André Malraux, 93430 villetaneuse
				</a>
			</div>
		</motion.div>
	);
}