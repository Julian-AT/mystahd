"use client";

import GradientWrapper from "@/components/gradient-wrapper";
import NavLink from "@/components/nav-link";
import YouTube from "react-youtube";
import LayoutEffect from "@/components/layout-effect";
import { IconDiscord, IconExternalLink, IconTelegram } from "../icons";

const Hero = () => (
  <section>
    <div className="custom-screen pt-28">
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div>
          <div className="space-y-5 max-w-3xl mx-auto text-center">
            <div className="flex space-x-5 justify-center font-medium text-sm">
              <NavLink
                href="https://discord.gg/5Ws2CAvr3G"
                className="flex items-center gap-2  text-secondary-foreground bg-gray-800  hover:bg-gray-700"
              >
                <IconDiscord className="w-8 h-8" />
                Discord
              </NavLink>
              <NavLink
                href="https://t.me/ShadowOverlay"
                className="flex items-center gap-2 mx-3 text-secondary-foreground bg-gray-800  hover:bg-gray-700"
              >
                <IconTelegram className="w-8 h-8" />
                Telegram
              </NavLink>
            </div>
            <h1
              className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
              style={{
                backgroundImage:
                  "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)",
              }}
            >
              Shadow Overlay <br />- Private Cheats -
            </h1>
            <p className="max-w-xl mx-auto text-muted-foreground">
              A large catalog of private high-quality cheats created by
              experienced <br />
              developers that will make your game more productive and
              comfortable.
            </p>
          </div>
        </div>
      </LayoutEffect>
    </div>
  </section>
);

export default Hero;
