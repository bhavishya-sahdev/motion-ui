import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
    // Base styles
    'inline-flex items-center justify-center transition-all cursor-pointer duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-full',
    {
        variants: {
            variant: {
                primary: 'text-zinc-900 bg-white hover:bg-white/90',
                secondary: 'bg-zinc-900 text-white hover:bg-[#1f1f1f] hover:shadow-[0_0_0_1px_#2e2e2e]',
            },
            size: {
                sm: 'h-10 px-3.5 text-sm [&_.content]:px-1.5 min-w-auto',
                md: 'px-3.5 h-12 [&_.content]:px-1.5 min-w-[181px]',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);


export type VercelButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> &
    VariantProps<typeof buttonVariants> & {
        children: ReactNode;
        prefix?: ReactNode;
        suffix?: ReactNode;
    }

export const VercelButton = ({
    children,
    variant = "primary",
    size,
    className = '',
    prefix,
    suffix,
    ...props
}: VercelButtonProps) => {
    return (
        <button
            className={buttonVariants({ variant, size, className })}
            {...props}
        >
            {prefix && <span className="prefix">
                {prefix}
            </span>}
            <span className="content">
                {children}
            </span>
            {suffix && <span className="suffix">
                {suffix}
            </span>}
        </button>
    );
};