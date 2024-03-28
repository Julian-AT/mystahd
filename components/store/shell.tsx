import * as React from "react";
import { cn } from "@/lib/utils";

interface StoreShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function StoreShell({ children, className, ...props }: StoreShellProps) {
  return (
    <div className={cn("grid items-start gap-8", className)} {...props}>
      {children}
    </div>
  );
}