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
    <div className="flex flex-col space-y-3 group">
      <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full cursor-pointer">
        <div className="shadow p-4 rounded-lg bg-gray-900 border border-gray-800">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-65 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative py-20 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div className="absolute inset-0 bg-gray-700">
                {image && (
                  <Image src={image} alt={title} fill className="object-" />
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

          <div className="flex justify-between mt-8 items-center">
            <div className="flex items-center space-x-3">
              <ProductBadges product={product} />
            </div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"></button>
            <div className="flex justify-end">
              <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                €{price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
