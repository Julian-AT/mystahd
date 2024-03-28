"use client";

import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ProductCard from "../products/product-card";
import ProductModalContent from "./product-modal-content";
import { useShoppingCart } from "@/lib/provider/shopping-cart-context";
import { IconSpinner } from "../icons";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";
import UserEmailModal from "./user-email-modal";

export enum ProductGrade {
  PREMIUM_PLUS = "Premium+",
  PREMIUM = "Premium",
  ESP_ONLY = "ESP Only",
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const AddProductToCartModal = ({ product, addToCart }: ProductCardProps) => {
  const { getPaymentLinkForProduct, isLoading } = useShoppingCart();
  const router = useRouter();

  const {
    id,
    title,
    description,
    price_display: price,
    image_attachment,
    recurring_interval,
    recurring_interval_count,
    grade,
    image,
  } = product;

  const validityPeriod = `${recurring_interval_count} ${recurring_interval}${
    recurring_interval_count > 1 ? "S" : ""
  }`;

  return (
    <div className="relative bg-gray-900">
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <ProductCard product={product} />
          </div>
        </DialogTrigger>
        <DialogContent className="h-auto border bg-gray-900">
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
          <ProductModalContent
            description={description}
            image={image}
            title={title}
          />
          <DialogFooter className="flex w-full justify-between">
            <div className="w-full">
              <span className="text-lg uppercase">€</span>
              <span className="text-lg">{(price as number).toFixed(2)}</span>
            </div>
            {product.type === "SUBSCRIPTION" ? (
              <UserEmailModal
                product={product}
                getPaymentLinkForProduct={getPaymentLinkForProduct}
              />
            ) : (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
              >
                Add to Cart
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProductToCartModal;
