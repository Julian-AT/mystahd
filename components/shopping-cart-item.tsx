import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/lib/utils";

export enum ProductGrade {
  PREMIUM_PLUS = "Premium+",
  PREMIUM = "Premium",
  ESP_ONLY = "ESP Only",
}

interface ProductCardProps {
  product: Product;
  removeFromCard: (productId: number) => void;
}

const ShoppingCartItem = ({ product, removeFromCard }: ProductCardProps) => {
  const {
    id,
    title,
    description,
    price,
    image_attachment,
    recurring_interval,
    recurring_interval_count,
  } = product;
  const image =
    image_attachment && image_attachment.cloudflare_image_id
      ? `https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${image_attachment.cloudflare_image_id}/shopitem`
      : undefined;
  const grade = title.includes("Premium Plus")
    ? ProductGrade.PREMIUM_PLUS
    : title.includes("Premium")
    ? ProductGrade.PREMIUM
    : ProductGrade.ESP_ONLY;

  const validityPeriod = `${recurring_interval_count} ${recurring_interval}${
    recurring_interval_count > 1 ? "S" : ""
  }`;

  return (
    <div className="relative mx-auto w-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative inline-block duration-300 ease-in-out transition-transform transform w-full cursor-pointer">
            <div className="shadow p-4 rounded-lg bg-card border border-border">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                <div className="transition-transform duration-500 transform ease-in-out  w-full">
                  <div
                    className={cn(
                      "absolute inset-0 bg-secondary",
                      !image && "opacity-20"
                    )}
                  >
                    {image && (
                      <Image src={image} alt={title} fill objectFit="cover" />
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 text-secondary-foreground">
                <h2 className="font-semibold text-base md:text-lg line-clamp-1">
                  {title}
                </h2>
                <p className="mt-2 text-sm line-clamp-1 text-muted-foreground">
                  {description}
                </p>
              </div>

              <div className="flex justify-between mt-8">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {validityPeriod}
                  </Badge>
                  <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {grade}
                  </Badge>
                </div>
                <div className="flex justify-end">
                  <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-lg uppercase">€</span>
                    <span className="text-lg">{price},-</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="py-3">
              <div className="flex items-center space-x-3">
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  {validityPeriod}
                </Badge>
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  {grade}
                </Badge>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-5">
            <div className="whitespace-pre-wrap">{description}</div>
            <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
              <div className="transition-transform duration-500 transform ease-in-out w-full">
                <div
                  className={cn(
                    "absolute inset-0 bg-secondary",
                    !image && "opacity-20"
                  )}
                >
                  {image && (
                    <Image src={image} alt={title} fill objectFit="cover" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="flex w-full justify-between">
            <div className="w-full">
              <span className="text-lg uppercase">€</span>
              <span className="text-lg">{price},-</span>
            </div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                removeFromCard(id);
              }}
            >
              Remove from Cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShoppingCartItem;
