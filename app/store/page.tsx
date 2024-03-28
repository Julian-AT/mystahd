import Pricing from "@/components/landing-page/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store - Shadow Overlay",
  description: "Best cheats for all games",
};

export default function Store() {
  return (
    <div>
      <Pricing title="Please select a category" />
    </div>
  );
}
