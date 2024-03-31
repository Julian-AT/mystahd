import { z } from "zod";

export const SupportTicketSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  content: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
});
