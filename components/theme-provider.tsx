"use client";

import * as React from "react";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ShoppingCartProvider } from "@/lib/provider/shopping-cart-context";

export function Provider({ children, ...props }: ThemeProviderProps) {
  return <ShoppingCartProvider>{children}</ShoppingCartProvider>;
}
