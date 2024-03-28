import Hero from "@/components/landing-page/hero";
import Features from "@/components/landing-page/features";
import CTA from "@/components/landing-page/cta";
import Pricing from "@/components/landing-page/pricing";
import Testimonial from "@/components/landing-page/testimonials";
import type { Metadata } from "next";
import PromoVideo from "@/components/landing-page/promo-video";

export const metadata: Metadata = {
  title: "Home - Shadow Overlay",
  description: "Best Call Of Duty cheats",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Hero />
      <Pricing title="Choose a category to get started" />
      <Features />
      <CTA />
      <Testimonial />
      <PromoVideo />
    </main>
  );
}
