import { useExpertiseScrollMotion } from "./use-expertise-scroll-motion";
import type { ReactNode } from "react";

export function ExpertiseScrollMotion({
  children,
  pageKey,
}: {
  children: ReactNode;
  pageKey?: string;
}) {
  const rootRef = useExpertiseScrollMotion<HTMLDivElement>(pageKey);

  return (
    <div className="expertise-scroll-motion" ref={rootRef}>
      {children}
    </div>
  );
}
