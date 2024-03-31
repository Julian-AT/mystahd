import type { Metadata } from "next";
import SupportForm from "@/components/support/support-form";

export const metadata: Metadata = {
  title: "Support - Shadow Overlay",
  description: "Best Call Of Duty cheats",
};

export default function Store() {
  return <SupportForm />;
}
