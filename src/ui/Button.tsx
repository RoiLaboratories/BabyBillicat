import { cva, type VariantProps } from "class-variance-authority";
import cn from "../utils/cn";
import type { ButtonHTMLAttributes } from "react";
// import { NavLink } from "react-router-dom";

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
        primary: "bg-white text-[#aa6613] border-white border-[1.5px]",
        // "border hover:opacity-35 focus:ring ring-offset-1 focus:ring-[#6f01d0] border-purple-500 bg-[#6f01d0] text-white",
        primary_outline:
          "hover:bg-green-600 focus:ring ring-offset-1 focus:ring-green-600 hover:text-white border-green-600 border-[1.5px] text-green-600",
        secondary:
          "bg-black text-white border-black focus:ring ring-offset-1 focus:ring-black hover:opacity-70 border border-[1.5px]",
        // "bg-[#ddd6fb] text-[#6f01d0] font-semibold border-purple-300 focus:ring ring-offset-1 focus:ring-[#6f01d0] hover:bg-[#6f01d0] hover:text-white",
        secondary_outline:
          "hover:bg-black focus:ring ring-offset-1 focus:ring-black hover:text-white border-black border-[1.5px] text-black",
        danger:
          "hover:bg-red-700 bg-red-500 text-white hover:border-red-700 border-red-500 border-[1.5px] focus:ring ring-offset-1 focus:ring-red-700",
        danger_outline:
          "hover:bg-red-400 focus:ring ring-offset-1 focus:ring-red-500 bg-red-50 hover:text-white border-red-500 border text-red-500",
        //   outline: "",
      },
      size: {
        xs: "text-[11px] px-2.5 py-1",
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-3 py-2",
        //py-1
        lg: "text-lg px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
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
      <a href={to} className={cn(buttonVariants({ variant, size, className }))}>
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
