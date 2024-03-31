"use server";

import { SupportTicketSchema } from "@/lib/validations/support";
import { z } from "zod";

const submitSupportTicket = (data: z.infer<typeof SupportTicketSchema>) => {
  console.log(data);
};
