"use client";

import { usePathname } from "next/navigation";
import ProductCatalog from "@/components/products/product-catalog";
import { notFound } from "next/navigation";

enum ProductCategory {
  ACCOUNTS = "accounts",
  CHEATS = "cheats",
  UNLOCKS = "unlocks",
}

export default function Store() {
  const pathname = usePathname();
  const category = pathname.split("/").pop();
  console.log(category);

  if (!category) return notFound();
  const productCategory: ProductCategory = category as ProductCategory;

  console.log(productCategory);

  return (
    <div>
      <ProductCatalog category={productCategory} />
    </div>
  );
}
