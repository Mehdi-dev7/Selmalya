import { z } from "zod";

export const contactSchema = z.object({
	name: z
		.string()
		.min(3, { message: "Le nom doit contenir au moins 3 caractères" }),
	email: z
		.string()
		.email({ message: "Format d'email invalide" }) // Validation email de base de Zod
		.refine(
			(email) => {
				// Regex plus stricte pour les domaines
				const strictEmailRegex =
					/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(fr|com|net|org|edu|gov|mil|biz|info|io|co|uk|de|eu)$/;
				return strictEmailRegex.test(email);
			},
			{
				message:
					"L'email doit se terminer par un domaine valide (.fr, .com, etc.)",
			}
		),
	message: z
		.string()
		.min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});
