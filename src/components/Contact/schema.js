import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(3, { message: "Le nom doit contenir au moins 2 caractères" }),
    email: z.string()
        .refine(
            (email) => {
                // Vérifie que l'email contient un @ et une extension de domaine valide
                const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
                return emailRegex.test(email);
            },
            { message: "L'adresse email est invalide" }
        ),
    message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});