import * as React from "react";
import { cn } from "@/src/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "earth";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-dark shadow-sm",
      outline: "border-2 border-ink text-ink hover:bg-sand",
      ghost: "text-muted hover:bg-sand hover:text-ink",
      earth: "bg-ink text-white hover:bg-black",
      whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb355]",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs uppercase font-bold tracking-wider",
      md: "px-6 py-3 text-sm uppercase font-bold tracking-widest",
      lg: "px-10 py-4 text-base font-black uppercase tracking-widest",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all active:scale-95 disabled:opacity-50 font-display",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
