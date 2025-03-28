import email from "@/assets/Emails.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactInfo from "./ContactInfo";

export default function ContactRight() {
	return (
		<div className="flex flex-col items-center justify-center gap-12 w-full lg:w-[30%] mb-10 md:mb-30">
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
			>
				<Image src={email} alt="" className="max-w-[300px]" />
			</motion.div>
			<ContactInfo />
		</div>
	);
}
