import LayoutEffect from "@/components/layout-effect";
import SectionWrapper from "@/components/section-wrapper";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingPlanProps {
  title?: string;
}

const Pricing = ({ title }: PricingPlanProps) => {
  const plans: PricingPlan[] = [
    {
      name: "Accounts",
      desc: "Accounts for various games.",
      price: 1,
      isMonthlySubscription: false,
      isMostPop: false,
      features: [
        "1000+ Accounts in Stock",
        "Unbanned Accounts guaranteed",
        "24/7 Support",
        "Instant Delivery",
      ],
    },
    {
      name: "Cheats",
      desc: "High-quality cheats for COD: Warzone.",
      price: 12,
      isMonthlySubscription: true,
      isMostPop: true,
      features: ["Undetected", "ESP", "Aimbot", "24/7 Support"],
    },
    {
      name: "Unlocks",
      desc: "Unlock services for various games.",
      price: 17,
      isMostPop: false,
      isMonthlySubscription: false,
      features: [
        "Fast Delivery",
        "24/7 Support",
        "100% Safe",
        "100% Satisfaction",
      ],
    },
  ];

  const mostPopPricingBg =
    "radial-gradient(130.39% 130.39% at 51.31% -0.71%, #1F2937 0%, rgba(31, 41, 55, 0) 100%)";

  return (
    <SectionWrapper id="pricing" className="custom-screen">
      <div className="relative max-w-xl mx-auto text-center">
        <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
          {title || "Choose your product to get started today"}
        </h2>
      </div>
      <LayoutEffect
        className="duration-1000 delay-300 grid lg:grid-cols-3 gap-5 my-10"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div>
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`flex-1 flex items-stretch flex-col rounded-xl border border-gray-800 mt-6 sm:mt-0 ${
                item.isMostPop ? "border border-purple-500" : ""
              }`}
              style={{
                backgroundImage: item.isMostPop ? mostPopPricingBg : "",
              }}
            >
              <div className="p-8 space-y-4 border-b border-gray-800 text-center">
                <span className="text-purple-600 font-medium text-2xl">
                  {item.name}
                </span>
                <br />
                <span className="text-muted-foreground">Starting at</span>
                <div className="text-gray-50 text-3xl font-semibold">
                  €{item.price}
                  {item.isMonthlySubscription && (
                    <span className="text-xl text-gray-400 font-normal">
                      /mo
                    </span>
                  )}
                </div>
                <p className="text-gray-400">{item.desc}</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {item.features.map((featureItem, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-5 text-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <Link
                    href={`/store/${item.name.toLocaleLowerCase()}`}
                    className={cn(
                      buttonVariants({ variant: "secondary" }),
                      "w-full rounded-lg",
                      item.isMostPop
                        ? "bg-purple-600 hover:bg-purple-500 focus:bg-purple-700 ring-purple-600"
                        : "bg-gray-800 hover:bg-gray-700 ring-gray-800"
                    )}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutEffect>
    </SectionWrapper>
  );
};

export default Pricing;
