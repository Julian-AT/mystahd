"use server";

import { SupportTicketSchema } from "@/lib/validations/support";
import { z } from "zod";

export const actionSubmitSupportTicket = async (
  data: z.infer<typeof SupportTicketSchema>
) => {
  const { title, content, fullName, email } = data;
  const { DISCORD_WEBHOOK_URL } = process.env;

  if (!DISCORD_WEBHOOK_URL)
    return console.error("Discord Webhook URL is not set");

  const payload = {
    title: `Support Ticket - ${title}`,
    color: "Purple",
    embeds: [
      {
        title: `Support Ticket - ${title}`,
        description: content,
        fields: [
          {
            name: "**Email**",
            value: `\`\`\`${email}\`\`\``,
          },
        ],
        footer: {
          text: `Ticket by ${fullName}`,
        },
      },
    ],
  };

  const res = await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res) {
    return false;
  }

  return true;
};
