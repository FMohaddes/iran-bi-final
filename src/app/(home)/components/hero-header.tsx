"use client";

import { motion } from "motion/react";
import { Iconify } from "@/_components/iconify";
import React from "react";

type HeroHeaderProps = {
    badgeIcon: string;
    badgeText: string;
    title: string;
    align?: string;
    highlight: string;
    afterHighlight?: string;
    description: React.ReactNode;
};

export function HeroHeader({
                               badgeIcon,
                               badgeText,
                               title,
                               highlight,
                               afterHighlight,
                               description,
                               align = "right",
                           }: HeroHeaderProps) {
    const isCenter = align === "center";

    return (
        <div className={isCenter ? "text-center" : "text-right"}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-nav-hover-bg border border-header-border rounded-full text-sm mb-6 backdrop-blur-sm text-text-accent"
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                    <Iconify variant="duotone" faIcon={badgeIcon} className="text-status-warning" />
                </motion.div>

                {badgeText}
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
                <motion.span
                    className="inline-block text-text-primary"
                    animate={{ opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                    {title}
                </motion.span>

                {" "}

                <motion.span
                    className="inline-block bg-gradient-primary bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% auto" }}
                >
                    {highlight}
                </motion.span>

                {afterHighlight && (
                    <>
                        <br />
                        <motion.span
                            className="inline-block text-text-primary"
                            animate={{ opacity: [0.9, 1, 0.9] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            {afterHighlight}
                        </motion.span>
                    </>
                )}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-lg md:text-xl mb-8 leading-relaxed text-text-secondary ${
                    isCenter ? "mx-auto max-w-3xl" : "max-w-xl"
                }`}
            >
                {description}
            </motion.div>
        </div>
    );
}