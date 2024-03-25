import { createPaymentLink } from "@/server-actions/sellix";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

export interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartContextType {
  cartItems: CartItem[];
  isLoading: boolean;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  getPaymentLink: (email: string) => Promise<string | undefined>;
  getPaymentLinkForProduct: (
    product: Product,
    email: string
  ) => Promise<string | undefined>;
  clearCart: () => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextType>({
  cartItems: [],
  isLoading: false,
  addToCart: () => {},
  removeFromCart: () => {},
  getPaymentLink: async () => "",
  getPaymentLinkForProduct: async () => "",
  clearCart: () => {},
});

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPaymentLink = async (email: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await createPaymentLink(cartItems, email);
      if (error) {
        throw new Error(error);
      }
      const link = data.data.url;
      console.log(link);
      setIsLoading(false);
      return link;
    } catch (error) {
      console.log(error);

      toast.error("Failed to create payment link");
      setIsLoading(false);
    }
  };

  const getPaymentLinkForProduct = async (product: Product, email: string) => {
    setIsLoading(true);
    try {
      const cartItem: CartItem = { ...product, quantity: 1 };
      const { data, error } = await createPaymentLink([cartItem], email);
      if (error) {
        throw new Error(error);
      }
      const link = data.data.url;
      console.log(link);
      setIsLoading(false);
      return link;
    } catch (error) {
      console.log(error);

      toast.error("Failed to create payment link for product " + product.title);
      setIsLoading(false);
    }
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      let updatedItem = null;
      if (existingItem) {
        updatedItem = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedItem = [...prevItems, { ...product, quantity }];
      }

      toast.success("Product added to cart", {
        description: `${product.title} x ${quantity}`,
      });
      return updatedItem;
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    isLoading,
    addToCart,
    removeFromCart,
    getPaymentLink,
    getPaymentLinkForProduct,
    clearCart,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
