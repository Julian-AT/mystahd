"use client";

import { usePathname } from "next/navigation";
import ProductCatalog from "@/components/products/product-catalog";
import { notFound } from "next/navigation";

enum ProductCategory {
  ACCOUNTS = "accounts",
  CHEATS = "cheats",
  SERVICES = "services",
}

export default function Store() {
  const pathname = usePathname();
  const category = pathname.split("/").pop();

  if (
    !category ||
    !Object.values(ProductCategory).includes(category as ProductCategory)
  )
    return notFound();
  const productCategory: ProductCategory = category as ProductCategory;

  return (
    <div>
      <ProductCatalog category={productCategory} />
    </div>
  );
}
