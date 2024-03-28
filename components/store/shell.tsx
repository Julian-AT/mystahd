import * as React from "react";
import { cn } from "@/lib/utils";

interface StoreShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function StoreShell({ children, className, ...props }: StoreShellProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}
