import { ProductGrade } from "@/components/products/product-card";
import { getProducts } from "@/actions/sellix";
import { useState, useEffect } from "react";

enum ProductCategory {
  ACCOUNTS = "accounts",
  CHEATS = "cheats",
  SERVICES = "services",
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

      const products = data.products.data;
      const extendedProducts = products.map((product) => ({
        ...product,
        grade: product.title.includes("Premium Plus")
          ? ProductGrade.PREMIUM_PLUS
          : product.title.includes("Premium")
          ? ProductGrade.PREMIUM
          : product.title.includes("Account")
          ? ProductGrade.ACCOUNT
          : product.title.includes("ESP")
          ? ProductGrade.ESP_ONLY
          : product.title.includes("Unlock")
          ? ProductGrade.SERVICE
          : product.title.includes("Spoofer")
          ? ProductGrade.SPOOFER
          : undefined,
        category:
          product.type === "SUBSCRIPTION"
            ? product.title.includes("Unlock All") ||
              product.title.includes("Spoofer")
              ? ProductCategory.SERVICES
              : ProductCategory.CHEATS
            : product.type === "SERVICE" && product.title.includes("Account")
            ? ProductCategory.ACCOUNTS
            : ProductCategory.SERVICES,
        image:
          product.image_attachment &&
          product.image_attachment.cloudflare_image_id
            ? `https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${product.image_attachment.cloudflare_image_id}/shopitem`
            : undefined,
      }));
      setProducts(
        extendedProducts.sort((a, b) =>
          a.grade!.toString().localeCompare(b.grade!.toString())
        )
      );
      setLoading(false);
    };

    fetchData();
  }, []);

  return { products, error, loading };
};
