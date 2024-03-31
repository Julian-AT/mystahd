"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SupportTicketSchema } from "@/lib/validations/support";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { IconSpinner } from "../icons";
import { actionSubmitSupportTicket } from "@/actions/discord";
import { toast } from "sonner";

const SupportForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof SupportTicketSchema>>({
    resolver: zodResolver(SupportTicketSchema),
    defaultValues: {
      title: "",
      content: "",
      fullName: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SupportTicketSchema>) {
    setIsLoading(true);
    const res = await actionSubmitSupportTicket(values);
    setIsLoading(false);
    if (!res) {
      return toast.error("Failed to submit ticket.", {
        description: "Please try again later.",
      });
    } else {
      return toast.success("Ticket submitted successfully", {
        description: "We will get back to you as soon as possible.",
      });
    }
  }

  return (
    <div className="relative py-28">
      <div className="relative z-10 max-w-screen-xl mx-auto text-muted-foreground sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h3 className="text-cyan-400 font-semibold">Get in Touch</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Support
          </p>
          <p className="text-muted-foreground">
            Submit a support ticket and <br /> we will get back to you as soon
            as possible.
          </p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-gray-900 border border-gray-800 sm:max-w-lg sm:px-8 sm:rounded-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Example Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Ticket Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        cols={4}
                        maxLength={500}
                        className="resize-none h-24"
                        placeholder="Your message here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && <IconSpinner className="animate-spin mr-1.5" />}
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      />
    </div>
  );
};

export default SupportForm;
