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
			const templateParams = {
				from_name: data.name,
				from_email: data.email,
				to_name: "Selmalya",
				message: data.message,
				reply_to: data.email,
				to_email: "selmalya.tierspayant@gmail.com",
				time: new Date().toLocaleString(),
			};

			const result = await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				templateParams,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID
			);

			if (result.status === 200) {
				toast.success("Votre message a été envoyé avec succès !", {
					style: {
						backgroundColor: "var(--color-mint-dark)",
						color: "var(--color-light)",
						borderRadius: "0.5rem",
						border: "1px solid var(--color-light)",
						boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
					},
				});
				reset(); // Réinitialise le formulaire
			} else {
				toast.error("Une erreur s'est produite lors de l'envoi du message.", {
					style: {
						backgroundColor: "var(--color-red-500)",
						color: "var(--color-white)",
					},
				});
			}
		} catch (error) {
			console.error("Erreur d'envoi:", error);
			toast.error("Une erreur s'est produite lors de l'envoi du message.", {
				style: {
					backgroundColor: "var(--color-red-500)",
					color: "var(--color-white)",
				},
			});
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
						className={`w-full mt-8 rounded-lg border border-mint-dark hover:bg-mint-dark hover:text-light duration-300 bg-light h-12 font-bold text-xl cursor-pointer shadow-lg hover:shadow-xl transition-all ${
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
