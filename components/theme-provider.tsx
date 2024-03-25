"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ShoppingCartProvider } from "@/lib/provider/shopping-cart-context";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ShoppingCartProvider>{children}</ShoppingCartProvider>
    </NextThemesProvider>
  );
}
