import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white cursor-pointer",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FEBD14] transition-all duration-300",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
