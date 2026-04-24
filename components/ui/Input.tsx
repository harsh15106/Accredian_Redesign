import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-xl border border-silver/30 bg-secondary/50 px-4 py-2 text-sm text-text-primary",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-silver focus-visible:glow-silver",
          "disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
