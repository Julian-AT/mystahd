import { ProductGrade } from "@/components/products/product-card";
import { getProducts } from "@/server-actions/sellix";
import { useState, useEffect } from "react";

enum ProductCategory {
  ACCOUNTS = "accounts",
  CHEATS = "cheats",
  UNLOCKS = "unlocks",
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await getProducts();
      if (error || data === null) {
        setLoading(false);
        return setError(error);
      }

      const products = data.data.products;
      const extendedProducts = products.map((product) => ({
        ...product,
        grade: product.title.includes("Premium Plus")
          ? ProductGrade.PREMIUM_PLUS
          : product.title.includes("Premium")
          ? ProductGrade.PREMIUM
          : ProductGrade.ESP_ONLY,
        category:
          product.type === "SUBSCRIPTION"
            ? ProductCategory.CHEATS
            : product.type === "SERVICE"
            ? ProductCategory.UNLOCKS
            : ProductCategory.ACCOUNTS,
        image:
          product.image_attachment &&
          product.image_attachment.cloudflare_image_id
            ? `https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${product.image_attachment.cloudflare_image_id}/shopitem`
            : undefined,
      }));
      setProducts(extendedProducts);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { products, error, loading };
};
