import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "w-full border bg-ink px-4 py-3.5 text-sm text-snow placeholder:text-mist/50 transition-colors duration-300 resize-none",
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
Textarea.displayName = "Textarea";

export { Textarea };
