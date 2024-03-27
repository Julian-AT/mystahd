import Image from "next/image";
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
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import ProductCard from "../products/product-card";
import ProductModalContent from "../modals/product-modal-content";

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
          <div>
            <ProductCard product={product} disableAnimations />
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
          <ProductModalContent
            description={description}
            image={image}
            title={title}
          />
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
