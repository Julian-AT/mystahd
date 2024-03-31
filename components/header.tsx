"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavHeader from "@/components/nav-header";
import NavLink from "@/components/nav-link";
import { IconDownload, IconShoppingCart } from "./icons";
import { ShoppingCartSheet } from "./shopping-cart/shopping-cart-sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [state, setState] = useState(false);
  const pathname = usePathname();
  const menuBtnEl = useRef<any>();

  const navigation = [
    { name: "Cheats", href: "/store/cheats" },
    { name: "Unlocks", href: "/store/unlocks" },
    { name: "Accounts", href: "/store/accounts" },
    { name: "Support", href: "/support" },
    { name: "About", href: "https://discord.gg/5Ws2CAvr3G" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (menuBtnEl.current && !menuBtnEl.current.contains(target))
        setState(false);
    };
  }, []);

  return (
    <header className="relative">
      <div className="custom-screen lg:hidden">
        <NavHeader
          menuBtnEl={menuBtnEl}
          state={state}
          onClick={() => setState(!state)}
        />
      </div>
      <nav
        className={`pb-5 lg:text-sm lg:static lg:block ${
          state
            ? "bg-gray-900 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-900"
            : "hidden"
        }`}
      >
        <div className="md:grid md:grid-cols-3 custom-screen">
          <NavHeader state={state} onClick={() => setState(!state)} />
          <div
            className={`col-span-2 grid grid-cols-2 items-center text-gray-300 md:font-medium${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex flex-col lg:flex-row justify-center items-centerspace-y-6 md:flex md:space-x-10 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={cn(
                      "relative hover:opacity-80",
                      item.href === pathname &&
                        "bg-gradient-to-r from-cyan-500 via-purple-500  bg-clip-text text-transparent font-semibold bg-purple-600 drop-shadow-2xl"
                    )}
                  >
                    <Link href={item.href} className="block text-lg">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="gap-x-6 items-center justify-center space-y-6 md:flex md:space-y-0 md:mt-0">
              <ShoppingCartSheet />
              <NavLink
                href="https://discord.gg/5Ws2CAvr3G"
                className="flex items-center justify-center gap-x-1 text-sm text-white font-medium custom-btn-bg border border-gray-500 active:bg-gray-900 md:inline-flex"
              >
                Download
                <IconDownload />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
