const sellix = require("@sellix/node-sdk")(
  "3K8IpT9dmGtAKdUYr35n72GmRCySjzp0FlVVT0TujwdPrLWakPal8W6GzFvnmjCW"
);

export const getProducts = async () => {
  try {
    console.log("API-KEY", process.env.SELLIX_API_KEY);
    const products = await sellix.products.list();
    console.log(products);

    return {
      data: products,
    };
  } catch (error) {
    return { error };
  }
};
