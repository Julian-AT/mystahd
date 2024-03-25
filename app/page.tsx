import Image from "next/image";
import Ghost from "@/public/ghost.png";
import ProductCatalog from "@/components/product-catalog";
import { Suspense } from "react";
import ProductSkeleton from "@/components/products-skeleton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="bg-[#121212] relative overflow-hidden">
        <div className="grid grid-cols-2 mt-16 container">
          <div className="flex flex-col space-y-5 justify-center z-20 y-10">
            <span className="text-4xl font-bold text-secondary-foreground">
              ShadowOverlay Store
            </span>
            <p className="text-muted-foreground">
              Welcome to the ShadowOverlay store, where you can find the best
              cheats for the most popular games.
            </p>
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
        <Suspense
          fallback={
            <div>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </div>
          }
        >
          <ProductCatalog />
        </Suspense>
      </div>
    </main>
  );
}
