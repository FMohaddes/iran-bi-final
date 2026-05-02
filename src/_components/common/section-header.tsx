"use client";

import { motion } from "motion/react";
import { Iconify } from "@/_components/iconify";

type SectionHeaderProps = {
    icon?: string;
    headerLabel?: string;
    title: string;
    highlight: string;
    description?: string;
};

export function SectionHeader({ icon, headerLabel, title, highlight, description }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            {headerLabel && icon && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-nav-hover-bg border border-header-border rounded-full text-text-accent text-sm mb-6"
                >
                    <Iconify faIcon={icon} width={16} className="text-text-accent" />
                    {headerLabel}
                </motion.div>
            )}

            <h2 className="text-4xl md:text-5xl mb-6 font-bold">
                <span className="text-text-primary">{title}</span>{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">{highlight}</span>
            </h2>

            {description && (
                <p className="text-lg text-text-secondary">
                    {description}
                </p>
            )}
        </motion.div>
    );
}