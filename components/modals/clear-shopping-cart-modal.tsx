"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { IconTrash } from "../icons";
import { useShoppingCart } from "@/lib/provider/shopping-cart-context";
import { Button } from "../ui/button";

const ClearShoppingCartModal = () => {
  const { clearCart, cartItems } = useShoppingCart();

  return (
    <AlertDialog>
      <AlertDialogTrigger disabled={cartItems.length === 0}>
        <Button variant="outline" className="bg-gray-900 hover:bg-gray-800">
          <IconTrash className="mr-2" />
          Clear Shopping Cart
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will remove all items from your shopping cart. This cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={clearCart}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ClearShoppingCartModal;
