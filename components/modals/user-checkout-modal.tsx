"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { boolean, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IconSpinner } from "../icons";
import { CartItem } from "@/lib/provider/shopping-cart-context";

interface UserEmailModalProps {
  products: CartItem[];
  getPaymentLinkForProducts: (
    products: CartItem[],
    email: string
  ) => Promise<string | undefined>;
}

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
});

const UserCheckoutModal = ({
  products,
  getPaymentLinkForProducts,
}: UserEmailModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    const link = await getPaymentLinkForProducts(products, data.email);
    if (!link) {
      setIsLoading(false);
      return toast.error("Failed to create payment link", {
        description: "Please try again later",
      });
    }

    setIsLoading(false);
    router.replace(link);
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"default"} className=" w-full">
            Checkout
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-900">
          <DialogHeader>
            <DialogTitle>Enter your Email.</DialogTitle>
            <DialogDescription>
              We will send you a payment confirmation link to your email.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
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
              <Button type="submit" disabled={isLoading}>
                {isLoading && <IconSpinner className="animate-spin mr-1.5" />}
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserCheckoutModal;
