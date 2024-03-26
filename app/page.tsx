import Image from "next/image";
import Ghost from "@/public/ghost.png";
import ProductCatalog from "@/components/product-catalog";
import { Suspense } from "react";
import ProductSkeleton from "@/components/products-skeleton";
import { Button } from "@/components/ui/button";
import { IconDiscord } from "@/components/icons";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="bg-[#212121] relative overflow-hidden">
        <div className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 450"
            opacity="0.55"
          >
            <defs>
              <filter
                id="bbblurry-filter"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="52"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  edgeMode="none"
                  result="blur"
                ></feGaussianBlur>
              </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
              <ellipse
                rx="255"
                ry="277.5"
                cx="941.5974781988687"
                cy="363.1607771048509"
                fill="#f72585ff"
              ></ellipse>
              <ellipse
                rx="255"
                ry="277.5"
                cx="-215.253596710456"
                cy="284.1297633186828"
                fill="#f72585ff"
              ></ellipse>
              <ellipse
                rx="255"
                ry="277.5"
                cx="-69.54530848908894"
                cy="551.5115966796875"
                fill="#6f2dbdff"
              ></ellipse>
              <ellipse
                rx="255"
                ry="277.5"
                cx="750.1184796429163"
                cy="636.7643379114211"
                fill="#a663ccff"
              ></ellipse>
            </g>
          </svg>
        </div>
        <div className="grid grid-cols-2 mt-16 container">
          <div className="flex flex-col space-y-5 justify-center z-20">
            <span className="text-6xl font-bold text-secondary-foreground ">
              Shadow Overlay,
              <br /> Affordable Cheats.
            </span>
            <p className="text-muted-foreground">
              A large selection of private high quality cheats created by
              experienced
              <br /> developers that will make your game more productive and
              comfortable.
            </p>
            <div className="flex items-center space-x-5">
              <Button variant="default">Contact us on Telegram</Button>
              <Button variant="secondary">
                <IconDiscord className="h-7 w-7 mr-1" />
                Discord
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image src={Ghost} alt="Ghost" width={600} height={580} />
            <div className="absolute grid grid-cols-3 top-0 w-full h-full">
              <div className="col-start-1 col-span-3 grid grid-cols-3 grid-rows-5 gap-5">
                <Card className="col-start-2 row-start-2 rounded-xl bg-gray-400 backdrop-filter bg-clip-padding backdrop-blur-sm bg-opacity-10 border border-muted flex flex-col items-center justify-center">
                  <CardHeader className="text-4xl font-bold text-white">
                    12+
                  </CardHeader>
                  <CardDescription className="text-xl">
                    Categories
                  </CardDescription>
                </Card>
                <Card className="col-start-2 col-span-2 mx-28 row-start-3 rounded-xl bg-gray-400 backdrop-filter bg-clip-padding backdrop-blur-sm bg-opacity-10 border border-muted flex flex-col items-center justify-center">
                  <CardHeader className="text-4xl font-bold text-white">
                    50+
                  </CardHeader>
                  <CardDescription className="text-xl">
                    Products
                  </CardDescription>
                </Card>
                <Card className="col-start-2 row-start-4 rounded-xl bg-gray-400 backdrop-filter bg-clip-padding backdrop-blur-sm bg-opacity-10 border border-muted flex flex-col items-center justify-center">
                  <CardHeader className="text-4xl font-bold text-white">
                    5000+
                  </CardHeader>
                  <CardDescription className="text-xl">
                    Customers
                  </CardDescription>
                </Card>
              </div>
            </div>
          </div>
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
