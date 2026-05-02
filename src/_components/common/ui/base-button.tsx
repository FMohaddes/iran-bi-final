"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "cta";

type BaseButtonProps = {
    children: ReactNode;
    href?: string;
    variant?: ButtonVariant;
    fullWidth?: boolean;
    loading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
} & Omit<HTMLMotionProps<"button">, "children">;

export function BaseButton({
                               children,
                               href,
                               variant = "primary",
                               fullWidth = false,
                               loading = false,
                               leftIcon,
                               rightIcon,
                               className = "",
                               disabled,
                               type = "button",
                               ...other
                           }: BaseButtonProps) {
    const baseClass =
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold transition-all";

    const variantClasses: Record<ButtonVariant, string> = {
        primary:
            "bg-gradient-primary text-text-on-brand hover:bg-gradient-primary-hover hover:shadow-xl hover:shadow-header-shadow",

        secondary:
            "bg-nav-hover-bg border border-header-border text-text-primary hover:bg-nav-hover-bg-strong",

        ghost:
            "text-text-accent hover:text-text-primary hover:bg-nav-hover-bg",

        outline:
            "border-2 border-header-border text-text-accent hover:bg-gradient-primary hover:text-text-on-brand hover:shadow-xl hover:shadow-header-shadow",

        cta:
            "group relative overflow-hidden bg-gradient-primary text-text-on-brand hover:shadow-2xl",
    };

    const isDisabled = disabled || loading;
    const isCta = variant === "cta";

    const classes = [
        baseClass,
        variantClasses[variant],
        fullWidth ? "w-full" : "",
        isDisabled ? "opacity-70 cursor-not-allowed pointer-events-none" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const content = (
        <>
            {isCta && (
                <motion.span
                    className="absolute inset-0 bg-gradient-primary-hover"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {loading ? (
                <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="relative z-10 h-5 w-5 rounded-full border-2 border-current border-t-transparent"
                />
            ) : (
                leftIcon && <span className="relative z-10">{leftIcon}</span>
            )}

            <span className="relative z-10">{children}</span>

            {!loading && rightIcon && (
                isCta ? (
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="relative z-10"
                    >
                        {rightIcon}
                    </motion.span>
                ) : (
                    <span>{rightIcon}</span>
                )
            )}
        </>
    );

    if (href) {
        return (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={href} className={classes}>
                    {content}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.button
            type={type}
            disabled={isDisabled}
            whileHover={
                isDisabled
                    ? undefined
                    : isCta
                        ? {
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                        }
                        : { scale: 1.05 }
            }
            whileTap={isDisabled ? undefined : { scale: 0.95 }}
            className={classes}
            {...other}
        >
            {content}
        </motion.button>
    );
}