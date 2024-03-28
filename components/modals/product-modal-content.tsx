import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductModalContentProps {
  description: string;
  image: string | undefined;
  title: string;
}

const ProductModalContent = ({
  description,
  image,
  title,
}: ProductModalContentProps) => {
  return (
    <ScrollArea className="h-[50vh] overflow-hidden bg-gray-900">
      <div className="flex flex-col space-y-5">
        <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
          <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
            <div
              className={cn(
                "absolute inset-0 bg-secondary",
                !image && "opacity-20"
              )}
            >
              {image && (
                <Image src={image} alt={title} fill objectFit="cover" />
              )}
            </div>
          </div>
        </div>
        <div className="whitespace-pre-wrap">{description}</div>
      </div>
    </ScrollArea>
  );
};

export default ProductModalContent;
