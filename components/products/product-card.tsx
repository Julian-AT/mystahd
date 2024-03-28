import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export enum ProductGrade {
  PREMIUM_PLUS,
  PREMIUM,
  ESP_ONLY,
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
    price_display: price,
    image_attachment,
    recurring_interval,
    recurring_interval_count,
  } = product;
  const image =
    image_attachment && image_attachment.cloudflare_image_id
      ? `https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${image_attachment.cloudflare_image_id}/shopitem`
      : undefined;
  const grade = product.grade;

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
      <div className="relative rounded-xl">
        <div className="absolute top-0 flex w-full justify-center">
          <div className="left-0 h-[1.5px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-[#b439ad] to-[rgba(17,17,17,0)] transition-all duration-[750]" />
        </div>
        <div className="border rounded-lg p-2 bg-gradient-to-b">
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
              <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-normal">
                {validityPeriod}
              </Badge>
              {grade === ProductGrade.PREMIUM_PLUS ? (
                <Badge className="hover:bg-gray-950/80 inline-flex cursor-pointer items-center justify-center border border-gray-800 bg-gray-950 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl">
                  <span className="bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent">
                    Premium Plus
                  </span>
                </Badge>
              ) : grade === ProductGrade.PREMIUM ? (
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  <span className="inline-flex animate-shimmer bg-[linear-gradient(110deg,#e6e6e6,45%,#1e293b,55%,#e6e6e6)] bg-[length:250%_100%] bg-clip-text text-transparent">
                    Premium
                  </span>
                </Badge>
              ) : (
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-normal">
                  ESP Only
                </Badge>
              )}
            </div>
            <div className="flex justify-end">
              <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                <span className="text-lg uppercase">€</span>
                <span className="text-lg">{(price as number).toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
