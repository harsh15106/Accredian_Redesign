import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-secondary border border-silver/20 rounded-2xl p-6 shadow-sm",
          "hover:glow-silver transition-shadow duration-300",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";
