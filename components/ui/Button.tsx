import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.03 }}
        transition={{
          type: "spring",
          stiffness: 250, 
          damping: 10,    
          mass: 0.6        
        }}
        className={cn(
          "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold cursor-pointer",
          "focus:outline-none",
          "disabled:opacity-50 disabled:pointer-events-none",
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