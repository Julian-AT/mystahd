"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { ReactElement, cloneElement, useRef } from "react";

interface LayoutEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  isInviewState: {
    trueState: string;
    falseState: string;
  };
}

const LayoutEffect = ({
  children,
  className,
  isInviewState: { trueState = "", falseState = "" },
}: LayoutEffectProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return cloneElement(children as ReactElement, {
    ref,
    className: cn(className, isInView ? trueState : falseState),
  });
};

export default LayoutEffect;
