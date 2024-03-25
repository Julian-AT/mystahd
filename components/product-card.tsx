import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export enum ProductGrade {
  PREMIUM_PLUS = "Premium+",
  PREMIUM = "Premium",
  ESP_ONLY = "ESP Only",
}

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image?: string;
  grade: ProductGrade;
}

const ProductCard = ({
  id,
  title,
  description,
  category,
  price,
  image,
  grade,
}: ProductCardProps) => {
  return (
    <div className="relative mx-auto w-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full cursor-pointer">
            <div className="shadow p-4 rounded-lg bg-card border border-border">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                  <div className="absolute inset-0 bg-secondary opacity-10"></div>
                </div>
              </div>

              <div className="mt-4 text-secondary-foreground">
                <h2 className="font-semibold text-base md:text-lg line-clamp-1">
                  {title}
                </h2>
                <p className="mt-2 text-sm line-clamp-1 text-muted-foreground">
                  {description}
                </p>
              </div>

              <div className="flex justify-between mt-8">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {category}
                  </Badge>
                  <Badge className="inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    {grade}
                  </Badge>
                </div>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"></button>
                <div className="flex justify-end">
                  <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-lg uppercase">€</span>
                    <span className="text-lg">{price},-</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="whitespace-pre-wrap">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
              <div className="absolute inset-0 bg-secondary opacity-10"></div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Buy / €{price},-</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductCard;
