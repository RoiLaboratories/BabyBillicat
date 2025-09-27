import { cva, type VariantProps } from "class-variance-authority";
import cn from "../utils/cn";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  to?: string;
}

const buttonVariants = cva(
  "rounded-md transition-all focus:outline-none focus:scale-[0.98] duration-300 ease-in-out cursor-pointer flex justify-center gap-x-2 items-center whitespace-nowrap h-fit disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-[#aa6613] border-white border-3 focus:ring ring-offset-1 focus:ring-white",
        primary_outline:
          "hover:bg-white focus:ring ring-offset-1 focus:ring-white hover:text-[#aa6613] border-white border-3 text-white",
        secondary:
          "bg-[#f88904] text-white border-[#f88904] focus:ring ring-offset-1 focus:ring-[#f88904] hover:opacity-70 border border-3",
        secondary_outline:
          "hover:bg-black focus:ring ring-offset-1 focus:ring-black hover:text-white border-black border-3 text-black",
        neutral_outline:
          "hover:bg-[#f88904] focus:ring ring-offset-1 focus:ring-black border-black border-3 hover:border-[#f88904] text-black hover:text-white",
      },
      size: {
        xs: "text-[11px] px-2.5 py-1",
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        //py-1
        lg: "text-lg px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "xs",
    },
  }
);

const Button = ({
  children,
  className,
  variant,
  size,
  to,
  ...props
}: ButtonProps) => {
  if (to)
    return (
      <a
        target="_blank"
        referrerPolicy="no-referrer"
        href={to}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </a>
    );

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
