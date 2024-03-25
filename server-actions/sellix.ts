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
  productId: string
): Promise<{
  error: string | null;
  data: any;
}> => {
  try {
    console.log("Creating payment link");
    const response = await sellix.payments.create({
      product_id: productId,
      gateway: "paypal",
    });

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
