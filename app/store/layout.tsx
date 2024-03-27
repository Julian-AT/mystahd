import { StoreShell } from "@/components/store/shell";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <StoreShell>{children}</StoreShell>;
}
