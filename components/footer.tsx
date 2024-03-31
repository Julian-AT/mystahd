"use client";

import PaymentMethods from "@/public/images/payment-methods.png";
import Image from "next/image";

const Footer = () => {
  const footerNavs = [
    {
      href: "https://discord.gg/5Ws2CAvr3G",
      name: "About",
    },
    {
      href: "/support",
      name: "Support",
    },
  ];

  return (
    <footer className=" px-4 py-5 mt-20 max-w-screen-xl mx-auto md:px-8 border-t">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <span className="text-3xl font-bold">ShadowOverlay</span>
        <p className="leading-relaxed mt-2 text-[15px] text-muted-foreground">
          Business address - Flintegata 56, Stavanger, Norway
          <br />
          Phone: +47 461 62 570
        </p>
      </div>
      <div className="flex items-center justify-center my-5">
        <Image src={PaymentMethods} width={150} alt="Payment Methods" />
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className=" hover:text-muted-foreground/95" key={idx}>
            <a key={idx} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-center text-muted-foreground sm:flex">
        &copy; 2024 ShadowOverlay All rights reserved.
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
