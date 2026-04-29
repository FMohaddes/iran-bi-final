'use client';

import React, { forwardRef } from 'react';

type IconifyProps = React.HTMLAttributes<HTMLSpanElement> & {
    width?: number | string;
    faIcon?: string;
};

export const Iconify = forwardRef<HTMLSpanElement, IconifyProps>(
    ({ className, width = 14, faIcon, style, ...other }, ref) => {
        return (
            <span
                ref={ref}
                className={`inline-flex shrink-0 items-center justify-center ${className ?? ''}`}
                style={{
                    width,
                    height: width,
                    ...style,
                }}
                {...other}
            >
        <i className={`fad ${faIcon ?? ''}`} style={{ fontSize: width }} />
      </span>
        );
    }
);

Iconify.displayName = 'Iconify';