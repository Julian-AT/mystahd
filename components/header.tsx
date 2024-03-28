"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavHeader from "@/components/nav-header";
import NavLink from "@/components/nav-link";
import { IconShoppingCart } from "./icons";
import { ShoppingCartSheet } from "./shopping-cart/shopping-cart-sheet";

const Navbar = () => {
  const [state, setState] = useState(false);
  const menuBtnEl = useRef<any>();

  const navigation = [
    { name: "Cheats", href: "/store/cheats" },
    { name: "Unlocks", href: "/store/unlocks" },
    { name: "Accounts", href: "/store/accounts" },
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
      <div className="custom-screen md:hidden">
        <NavHeader
          menuBtnEl={menuBtnEl}
          state={state}
          onClick={() => setState(!state)}
        />
      </div>
      <nav
        className={`pb-5 md:text-sm md:static md:block ${
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
            <ul className="flex justify-center items-center space-y-6 md:flex md:space-x-10 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="relative hover:text-gray-50">
                    <Link href={item.href} className="block text-lg">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              <NavLink
                href="/store"
                className="flex items-center justify-center gap-x-1 text-sm text-white font-medium custom-btn-bg border border-gray-500 active:bg-gray-900 md:inline-flex"
              >
                Store
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
              <ShoppingCartSheet />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
