"use client";

import ProductCard, { ProductGrade } from "@/components/product-card";
import Image from "next/image";
import Ghost from "@/public/ghost.png";
import { useEffect, useState } from "react";
import { getProducts } from "@/server-actions/sellix";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Globe } from "@/components/globe";
import { GlobeDemo } from "@/components/so-globe";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.data);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col ">
      <div className="bg-[#121212] relative overflow-hidden">
        <div className="grid grid-cols-2 mt-16 container">
          <div className="absolute z-10  bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="flex flex-col space-y-5 justify-center z-20 y-10">
            <GlobeDemo />
          </div>
          <Image src={Ghost} alt="Ghost" width={600} height={580} />
        </div>
        <div className="absolute bottom-0 h-[200px] w-[200%] ml-[-50%] mb-[-150px] rounded-t-[100%] bg-background"></div>
      </div>
      <div className="bg-transparent container flex flex-col space-y-10">
        <div className="flex flex-col gap-2 my-5">
          <span className="text-secondary-foreground text-4xl font-bold">
            Popular Products
          </span>
          <p className="text-muted-foreground">
            Extensive selection of private cheats for the most popular games.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              description={product.description}
              price={product.price_display}
              title={product.title}
              category={`${product.recurring_interval_count} ${product.recurring_interval}S`}
              grade={
                (product.title as string).includes("Premium Plus")
                  ? ProductGrade.PREMIUM_PLUS
                  : product.title.includes("Premium")
                  ? ProductGrade.PREMIUM
                  : ProductGrade.ESP_ONLY
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
}
