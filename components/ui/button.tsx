import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-volt bg-volt text-snow font-mono font-bold uppercase tracking-[0.14em] hover:bg-volt2 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(12,77,162,.4)]",
        secondary:
          "border border-secondary bg-secondary text-snow font-mono font-bold uppercase tracking-[0.14em] hover:bg-secondary/90 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(188,57,49,.4)]",
        outline:
          "border border-edge bg-ink2/60 text-snow font-mono font-semibold uppercase tracking-[0.12em] hover:border-volt/60 hover:text-volt",
        ghost:
          "text-mist font-mono text-[0.7rem] uppercase tracking-[0.18em] hover:text-snow",
        link: "text-[#21759B] underline-offset-4 hover:underline font-mono",
      },
      size: {
        default: "px-4 py-2.5",
        sm: "px-3 py-1.5 text-xs",
        lg: "px-6 py-4 text-sm font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
