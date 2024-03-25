"use client";

import { useProducts } from "@/lib/hooks/use-products";
import React, { Suspense } from "react";
import ProductCard, { ProductGrade } from "./product-card";
import ProductSkeleton from "./products-skeleton";
import { useShoppingCart } from "@/lib/provider/shopping-cart-context";
import AddProductToCartModal from "./add-product-to-cart-modal";

interface ProductCatalogProps {
  category?: string;
}

const ProductCatalog = ({ category }: ProductCatalogProps) => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useShoppingCart();

  if (error) return <div>Error: {error}</div>;
  if (!products) return <div>No products found</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full pb-16">
      {products.map((product, index) => (
        <AddProductToCartModal
          product={product}
          addToCart={addToCart}
          key={index}
        />
      ))}
    </div>
  );
};

export default ProductCatalog;
