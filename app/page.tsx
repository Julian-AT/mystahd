import Hero from "@/components/landing-page/hero";
import Features from "@/components/landing-page/features";
import CTA from "@/components/landing-page/cta";
import Pricing from "@/components/landing-page/pricing";
import Testimonial from "@/components/landing-page/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Hero />
      <Features />
      <CTA />
      <Testimonial />
      <Pricing />{" "}
    </main>
  );
}
