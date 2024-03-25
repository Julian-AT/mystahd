import Link from "next/link";

import { cn } from "@/lib/utils";
import { IconDiscord } from "@/components/icons";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { ShoppingCartSheet } from "./shopping-cart-sheet";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-between space-x-2">
          <div className="relative flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              width={64}
              height={64}
              className="rounded-full p-3"
            />
            <span className="font-bold text-xl">ShadowOverlay</span>
          </div>

          <nav className="flex items-center space-x-3">
            <Link
              href={"https://discord.gg/Mu3gmSuZgD"}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "flex items-center justify-center"
              )}
            >
              <IconDiscord className="h-7 w-7 mr-1 fill-current" />
              <span>Discord</span>
            </Link>
            <ShoppingCartSheet />
          </nav>
        </div>
      </div>
    </header>
  );
}
