import { getProducts } from "@/server-actions/sellix";
import { useState, useEffect } from "react";
import { log } from "three/examples/jsm/nodes/Nodes.js";

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

      setProducts(data.data.products);
      console.log(data);

      setLoading(false);
    };

    fetchData();
  }, []);

  return { products, error, loading };
};
