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
          "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-silver focus:ring-offset-2 focus:ring-offset-primary",
          "active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variant === "primary" && "bg-silver text-primary hover:glow-silver-lg hover:bg-silver-light",
          variant === "secondary" && "bg-secondary text-text-primary hover:bg-gray-800",
          variant === "outline" && "border border-silver text-silver hover:bg-silver hover:text-primary",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
