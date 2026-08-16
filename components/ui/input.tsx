import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full border bg-ink px-4 py-3.5 text-sm text-snow placeholder:text-mist/50 transition-colors duration-300",
          "focus:outline-none focus:border-volt",
          error ? "border-alarm/70" : "border-edge hover:border-mist/50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
