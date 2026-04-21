import { cn } from "@/utils/helpers/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  icon?: ReactNode;
  prependIcon?: ReactNode;
  appendIcon?: ReactNode;
  loading?: boolean;
};

const ButtonComponent = ({
  children,
  icon,
  prependIcon,
  appendIcon,
  loading = false,
  className,
  disabled,
  ...props
}: BaseButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(
        "focus:outline-none focus:ring-0 inline-flex items-center justify-center gap-[calc(8/1920*100vw)] px-[calc(16/1920*100vw)] py-[calc(8/1440*100vw)] rounded font-medium  disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-[0.97] duration-100 transition-all",
        className,
      )}
      disabled={isDisabled}
      {...props}
    >
      {/* icon-only */}
      {icon && !children && icon}

      {/* prepend icon + text */}
      {prependIcon && (
        <span className="mr-[calc(4/1920*100vw)]">{prependIcon}</span>
      )}
      {children}
      {appendIcon && (
        <span className="ml-[calc(4/1920*100vw)]">{appendIcon}</span>
      )}
    </button>
  );
};

export default ButtonComponent;
