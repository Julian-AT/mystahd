"use server";

import { CartItem } from "@/lib/provider/shopping-cart-context";
const { SELLIX_API_KEY } = process.env;

export const getProducts = async (): Promise<{
  error: string | null;
  data: StoreData | null;
}> => {
  try {
    if (!SELLIX_API_KEY) {
      return {
        error:
          "Sellix API key is not set. Please set it in the environment variables.",
        data: null,
      };
    }

    const response = await fetch("https://dev.sellix.io/v1/products", {
      headers: {
        Authorization: `Bearer ${process.env.SELLIX_API_KEY}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (!response)
      return {
        error: `Failed to fetch products. Sellix API returned status code ${
          response.status || "ERROR"
        }`,
        data: null,
      };

    const products = response.data.products;

    if (!products)
      return {
        error:
          "Error mapping products.\n This is likely due to an external API error.",
        data: null,
      };

    const storeData: StoreData = {
      status: 200,
      products: { data: products },
      error: null,
      message: null,
      env: "production",
    };
    return { data: storeData, error: null };
  } catch (error: any) {
    return { error: error.message || "Failed to fetch products", data: null };
  }
};

export const createPaymentLink = async (
  products: CartItem[],
  email: string
): Promise<{
  error: string | null;
  data: any;
}> => {
  try {
    if (!SELLIX_API_KEY) {
      return {
        error:
          "Sellix API key is not set. Please set it in the environment variables.",
        data: null,
      };
    }

    console.log("passed");

    const response = await fetch("https://dev.sellix.io/v1/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SELLIX_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: {
          products: products.map((product) => ({
            uniqid: product.uniqid,
            unit_quantity: product.quantity,
          })),
        },
        email: email,
        return_url: "https://shadowoverlay.com/",
      }),
    }).then((res) => res.json());

    console.log(response);

    return { data: response, error: null };
  } catch (error: any) {
    return {
      error: error.message || "Failed to create payment link",
      data: null,
    };
  }
};
