import { z } from "zod";

export const contactSchema = z.object({
	name: z
		.string()
		.min(3, { message: "Le nom doit contenir au moins 3 caractères" }),
	email: z
		.string()
		.min(1, { message: "L'email est requis" })
		.email({ message: "Format d'email invalide" })
		.regex(
			/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(fr|com|net|org|edu|gov|mil|biz|info|io|co|uk|de|eu)$/,
			{
				message:
					"L'email doit se terminer par une extension valide (.fr, .com, etc.)",
			}
		),
	message: z
		.string()
		.min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});
