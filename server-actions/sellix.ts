import { CartItem } from "@/lib/provider/shopping-cart-context";

const sellix = require("@sellix/node-sdk")(
  "3K8IpT9dmGtAKdUYr35n72GmRCySjzp0FlVVT0TujwdPrLWakPal8W6GzFvnmjCW"
);

export const getProducts = async (): Promise<{
  error: string | null;
  data: StoreData | null;
}> => {
  try {
    console.log("Fetching products");
    const response = await sellix.products.list();

    console.log(response);

    const products: StoreData = {
      status: 200,
      data: { products: response },
      error: null,
      message: null,
      env: "production",
    };
    return { data: products, error: null };
  } catch (error: any) {
    console.log(error);
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
    console.log("Creating payment link", email);
    console.log(products.length, products[0].uniqid, products[0].quantity);

    const response = await fetch("https://dev.sellix.io/v1/payments", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer 3K8IpT9dmGtAKdUYr35n72GmRCySjzp0FlVVT0TujwdPrLWakPal8W6GzFvnmjCW",
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
        return_url: "https://mystahd.vercel.app/",
      }),
    }).then((res) => res.json());

    // const response = await sellix.payments.create({
    //   cart: {
    //     products: products.map((product) => ({
    //       uniqid: product.uniqid,
    //       unit_quantity: product.quantity,
    //     }))[0],
    //   },
    //   email: "EinWildesJulixn@gmail.com",
    //   return_url: "https://mystahd.vercel.app/",
    // });
    console.log(response);

    return { data: response, error: null };
  } catch (error: any) {
    console.log(error);
    return {
      error: error.message || "Failed to create payment link",
      data: null,
    };
  }
};
