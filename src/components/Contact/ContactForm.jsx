"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { contactSchema } from "./schema";

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const formRef = useRef();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = async (data) => {
		setIsSubmitting(true);

		try {
			// Vérification des variables requises
			const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
			const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
			const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

			if (!serviceId || !templateId || !userId) {
				console.error("Variables EmailJS manquantes:", {
					serviceId: !!serviceId,
					templateId: !!templateId,
					userId: !!userId,
				});
				throw new Error("Configuration EmailJS incomplète");
			}

			console.log("Configuration EmailJS:", {
				serviceId: "✓ Présent",
				templateId: "✓ Présent",
				userId: "✓ Présent",
			});

			const result = await emailjs.sendForm(
				serviceId,
				templateId,
				formRef.current,
				userId
			);

			console.log(
				"Statut de l'envoi:",
				result.status === 200 ? "Succès" : "Échec"
			);

			if (result.status === 200) {
				toast.success("Votre message a été envoyé avec succès !");
				reset();
			} else {
				throw new Error("Erreur de statut: " + result.status);
			}
		} catch (error) {
			console.error("Type d'erreur:", error.name);
			console.error(
				"Message d'erreur:",
				error.message.replace(
					new RegExp(process.env.NEXT_PUBLIC_EMAILJS_USER_ID, "g"),
					"****"
				)
			);

			toast.error(
				error.message === "Configuration EmailJS incomplète"
					? "Erreur de configuration du formulaire"
					: "Une erreur s'est produite lors de l'envoi du message."
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	const formAnimation = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const inputAnimation = {
		hidden: {
			opacity: 0,
			x: -20,
			y: 50,
		},
		show: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				duration: 0.5,
				ease: "easeInOut",
			},
		},
	};

	return (
		<div className="w-full">
			<motion.form
				ref={formRef}
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4 w-full mb-10 lg:mb-30"
				variants={formAnimation}
				initial="hidden"
				whileInView="show"
				viewport={{ amount: 0.3, once: true }}
			>
				<motion.div
					variants={inputAnimation}
					viewport={{ amount: 0.3, once: true }}
				>
					<input
						name="user_name"
						type="text"
						placeholder="Votre Nom ou Société"
						required
						className={`h-12 rounded-lg bg-light px-2 w-full border ${
							errors.name ? "border-red-500" : "border-transparent"
						} border-transparent focus:outline-none focus:border-mint-dark duration-200`}
						{...register("name")}
					/>
					{errors.name && (
						<p className="text-red-500 text-sm">{errors.name.message}</p>
					)}
				</motion.div>

				<motion.div
					variants={inputAnimation}
					viewport={{ amount: 0.3, once: true }}
				>
					<input
						name="user_email"
						placeholder="Votre Email"
						className={`h-12 rounded-lg bg-light px-2 w-full border ${
							errors.email ? "border-red-500" : "border-transparent"
						} border-transparent focus:outline-none focus:border-mint-dark duration-200`}
						{...register("email")}
					/>
					{errors.email && (
						<p className="text-red-500 text-sm">{errors.email.message}</p>
					)}
				</motion.div>

				<motion.div
					variants={inputAnimation}
					viewport={{ amount: 0.3, once: true }}
				>
					<textarea
						name="message"
						type="text"
						placeholder="Votre Message"
						rows={9}
						cols={50}
						required
						className={`rounded-lg bg-light p-2 w-full border ${
							errors.message ? "border-red-500" : "border-transparent"
						} border-transparent focus:outline-none focus:border-mint-dark duration-200 resize-none`}
						{...register("message")}
					/>
					{errors.message && (
						<p className="text-red-500 text-sm">{errors.message.message}</p>
					)}
				</motion.div>
				<motion.div
					variants={inputAnimation}
					viewport={{ amount: 0.3, once: true }}
				>
					<button
						type="submit"
						disabled={isSubmitting}
						className={`w-full mt-8 rounded-lg border border-mint-dark hover:bg-mint-dark hover:text-light duration-300 bg-light h-12 font-bold text-xl cursor-pointer shadow-lg hover:shadow-xl hover:scale-101 transition-all ${
							isSubmitting ? "opacity-50 cursor-not-allowed" : ""
						}`}
					>
						{isSubmitting ? "Envoi en cours..." : "Envoyer"}
					</button>
				</motion.div>
			</motion.form>
		</div>
	);
}
