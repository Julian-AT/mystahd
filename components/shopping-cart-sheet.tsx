"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconSubmit } from "./icons";
import { useShoppingCart } from "@/lib/provider/shopping-cart-context";
import { Card } from "./ui/card";
import ProductCard from "./product-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "./ui/badge";
import ShoppingCartItem from "./shopping-cart-item";
import ClearShoppingCartModal from "./clear-shopping-cart-modal";

export function ShoppingCartSheet() {
  const { cartItems, removeFromCart } = useShoppingCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <IconSubmit className="h-5 w-5 mr-1 fill-current" />
          <span>Shopping Cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            You currently have {cartItems.length} item
            {cartItems.length !== 1 ? "s" : ""} in your cart
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-between h-full pb-12">
          <div className="my-3">
            {cartItems.map((product: Product) => (
              <ShoppingCartItem
                product={product}
                removeFromCard={removeFromCart}
                key={product.id}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex justify-between gap-3">
              <div
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-9 w-full"
                )}
              >
                Total: €
                {cartItems.reduce(
                  (p, { price_display }) => price_display + p,
                  0
                )}
                ,-
              </div>
              <ClearShoppingCartModal />
            </div>
            <Button
              variant="default"
              className="w-full"
              disabled={cartItems.length === 0}
            >
              Checkout
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
