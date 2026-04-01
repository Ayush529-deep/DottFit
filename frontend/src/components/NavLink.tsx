import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className = "",
      activeClassName = "text-white",
      pendingClassName = "opacity-70",
      to,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        {...props}
        className={({ isActive, isPending }) =>
          cn(
            /* 🚫 FORCE NO BACKGROUND – ALL STATES */
            "bg-transparent !bg-transparent",
            "hover:bg-transparent active:bg-transparent focus:bg-transparent",
            "focus:outline-none focus:ring-0",

            /* text styling */
            "text-white/80 hover:text-white transition-colors duration-200",

            /* user passed classes */
            className,

            /* active & pending */
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };