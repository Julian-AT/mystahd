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
import { ScrollArea } from "./ui/scroll-area";

export enum ProductGrade {
  PREMIUM_PLUS = "Premium+",
  PREMIUM = "Premium",
  ESP_ONLY = "ESP Only",
}

interface ProductCardProps {
  product: Product;
  disableAnimations?: boolean;
}

const ProductCard = ({ product, disableAnimations }: ProductCardProps) => {
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
    <div
      className={cn(
        "relative inline-block duration-300 ease-in-out transition-transform transform w-full cursor-pointer",
        !disableAnimations && "hover:-translate-y-2"
      )}
    >
      <div className="shadow p-4 rounded-lg bg-card border border-border">
        <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
          <div
            className={cn(
              "transition-transform duration-500 transform ease-in-out w-full",
              !disableAnimations && "hover:scale-110"
            )}
          >
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
  );
};

export default ProductCard;
