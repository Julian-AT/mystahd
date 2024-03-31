import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full cursor-pointer">
        <div className="shadow p-4 rounded-lg bg-gray-900 border border-gray-800">
          <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
              <div className="absolute inset-0 bg-gray-800" />
            </div>
          </div>

          <div className="mt-4 text-secondary-foreground">
            <h2 className="font-semibold text-base md:text-lg line-clamp-1">
              <Skeleton className="h-4 w-full rounded-xl" />
            </h2>
            <p className="mt-2 text-sm line-clamp-1 text-muted-foreground">
              <Skeleton className="h-4 w-3/4 rounded-xl" />
            </p>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-4 w-10 rounded-xl" />
              <Skeleton className="h-4 w-10 rounded-xl" />
            </div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"></button>
            <div className="flex justify-end">
              <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                <Skeleton className="h-4 w-8 rounded-xl" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
