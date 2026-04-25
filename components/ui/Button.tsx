import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-silver/20 focus:ring-offset-2 focus:ring-offset-primary",
          "active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variant === "primary" && "bg-[#FEBD14] text-black hover:bg-white",
          variant === "secondary" && "bg-secondary text-text-primary hover:bg-gray-800",
          variant === "outline" && "border border-[#FEBD14] text-[#FEBD14] hover:bg-[#FEBD14] hover:text-black",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
