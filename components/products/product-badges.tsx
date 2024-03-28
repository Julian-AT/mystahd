import React from "react";
import { Badge } from "@/components/ui/badge";
import { ProductGrade } from "@/components/products/product-card";

interface ProductBadgesProps {
  product: Product;
}

const ProductBadges = ({ product }: ProductBadgesProps) => {
  if (!product) return null;
  const { grade, type, recurring_interval, recurring_interval_count } = product;
  const validityPeriod = `${recurring_interval_count} ${recurring_interval}${
    recurring_interval_count > 1 ? "S" : ""
  }`;
  return (
    <div className="flex items-center space-x-3">
      {type === "SUBSCRIPTION" && (
        <Badge className="bg-gray-800 text-secondary-foreground hover:bg-gray-700 font-normal">
          {validityPeriod}
        </Badge>
      )}
      {grade === ProductGrade.PREMIUM ? (
        <Badge className="hover:bg-gray-700 inline-flex cursor-pointer items-center justify-center border border-gray-800 bg-gray-800 px-3 text-xs font-medium text-secondary-foreground backdrop-blur-3xl">
          <span className="bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent">
            Premium
          </span>
        </Badge>
      ) : grade === ProductGrade.PREMIUM_PLUS ? (
        <Badge className="bg-gray-800 text-secondary-foreground hover:bg-gray-700">
          <span className="inline-flex animate-shimmer bg-[linear-gradient(110deg,#e6e6e6,45%,#1e293b,55%,#e6e6e6)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Premium Plus
          </span>
        </Badge>
      ) : (
        <Badge className="bg-gray-800  text-secondary-foreground hover:bg-gray-700 font-normal">
          ESP Only
        </Badge>
      )}
    </div>
  );
};

export default ProductBadges;
