"use client";

import { useProducts } from "@/lib/hooks/use-products";
import React, { Suspense } from "react";
import ProductCard, { ProductGrade } from "./product-card";
import ProductSkeleton from "./product-skeleton";
import { useShoppingCart } from "@/lib/provider/shopping-cart-context";
import AddProductToCartModal from "../modals/add-product-to-cart-modal";

enum ProductCategory {
  ACCOUNTS = "accounts",
  CHEATS = "cheats",
  UNLOCKS = "unlocks",
}

interface ProductCatalogProps {
  category: ProductCategory;
}

const ProductCatalog = ({ category }: ProductCatalogProps) => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useShoppingCart();

  if (error) return <div>Error: {error}</div>;
  if (!products) return <div>No products found</div>;

  products.map((product) => {
    console.log(product.category);
  });
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  if (loading)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full pb-16">
        {[...Array(12)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full pb-16">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <AddProductToCartModal
            product={product}
            addToCart={addToCart}
            key={index}
          />
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-screen text-4xl text-center col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4">
          No products found for this Category.
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
