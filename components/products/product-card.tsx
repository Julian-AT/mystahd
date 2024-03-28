import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import ProductBadges from "./product-badges";

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
  const { title, description, price_display: price, image } = product;

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
            <ProductBadges product={product} />
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
