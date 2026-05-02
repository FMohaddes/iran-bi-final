'use client';

import React, { forwardRef } from 'react';



type IconVariant =
    | "solid"
    | "regular"
    | "light"
    | "thin"
    | "duotone"
    | "duotoneLight"
    | "duotoneRegular"
    | "duotoneThin"

type IconifyProps = React.HTMLAttributes<HTMLSpanElement> & {
    width?: number | string;
    faIcon?: string;
    variant?: IconVariant;
};

const variantClasses: Record<IconVariant, string> = {
    solid: "fa-solid",
    regular: "fa-regular",
    light: "fa-light",
    thin: "fa-thin",

    duotone: "fa-duotone",
    duotoneLight: "fa-duotone fa-light",
    duotoneRegular: "fa-duotone fa-regular",
    duotoneThin: "fa-duotone fa-thin",

};

export const Iconify = forwardRef<HTMLSpanElement, IconifyProps>(
    ({ className, width = 16, faIcon, variant = "solid", style, ...other }, ref) => {
        return (
            <span
                ref={ref}
                className={`inline-flex items-center justify-center ${className ?? ""}`}
                style={{  ...style }}
                {...other}
            >
        <i
            className={`${variantClasses[variant]} ${faIcon ?? ""}`}
            style={{ fontSize: width }}
        />
      </span>
        );
    }
);

Iconify.displayName = "Iconify";Iconify.displayName = 'Iconify';