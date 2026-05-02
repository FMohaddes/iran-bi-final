"use client";

import { motion } from "motion/react";
import { Iconify } from "@/_components/iconify";

type SectionType =
    | "heading"
    | "paragraph"
    | "list"
    | "checklist"
    | "highlight"
    | "stats";

type Section = {
    type: SectionType;
    content: string | string[];
    level?: number;
    icon?: string;
};

type BlogContentProps = {
    content: string;
};

export function PostContent({ content }: BlogContentProps) {
    const parseContent = (text: string): Section[] => {
        const lines = text
            .trim()
            .split("\n")
            .filter((line) => line.trim());

        const sections: Section[] = [];
        let currentList: string[] = [];
        let currentType: "list" | "checklist" | null = null;

        lines.forEach((line) => {
            const isListLine =
                line.trim().match(/^[-✅✓]/) || line.trim().match(/^- \[.\]/);

            if (currentList.length > 0 && !isListLine) {
                sections.push({
                    type: currentType || "list",
                    content: currentList,
                });

                currentList = [];
                currentType = null;
            }

            if (line.startsWith("# ")) {
                sections.push({
                    type: "heading",
                    content: line.replace("# ", ""),
                    level: 1,
                });
            } else if (line.startsWith("## ")) {
                sections.push({
                    type: "heading",
                    content: line.replace("## ", ""),
                    level: 2,
                });
            } else if (line.startsWith("### ")) {
                sections.push({
                    type: "heading",
                    content: line.replace("### ", ""),
                    level: 3,
                });
            } else if (line.trim().match(/^- \[.\]/)) {
                currentList.push(line.trim().replace(/^- \[.\]\s*/, ""));
                currentType = "checklist";
            } else if (line.trim().match(/^[✅✓]/)) {
                currentList.push(line.trim().replace(/^[✅✓]\s*/, ""));
                currentType = "checklist";
            } else if (line.trim().startsWith("-")) {
                currentList.push(line.trim().replace(/^-\s*/, ""));
                currentType = "list";
            } else if (line.includes("**") && line.match(/\d+[٪%]/)) {
                sections.push({
                    type: "stats",
                    content: line,
                });
            } else if (line.trim()) {
                sections.push({
                    type: "paragraph",
                    content: line,
                });
            }
        });

        if (currentList.length > 0) {
            sections.push({
                type: currentType || "list",
                content: currentList,
            });
        }

        return sections;
    };

    const renderInlineBold = (text: string) => {
        const parts = text.split(/\*\*(.*?)\*\*/g);

        return parts.map((part, index) =>
            index % 2 === 1 ? (
                <strong key={index} className="font-semibold text-text-accent">
                    {part}
                </strong>
            ) : (
                part
            )
        );
    };

    const sections = parseContent(content);

    const renderSection = (section: Section, index: number) => {
        const baseDelay = index * 0.05;

        switch (section.type) {
            case "heading": {
                if (section.level === 1) return null;

                const isLevelTwo = section.level === 2;

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: baseDelay }}
                        className={`mb-8 ${isLevelTwo ? "mt-12" : "mt-8"}`}
                    >
                        <div className="flex items-center gap-3">
                            {isLevelTwo && (
                                <div className="h-8 w-1 rounded-full bg-gradient-primary" />
                            )}

                            <h2
                                className={`font-bold text-text-primary ${
                                    isLevelTwo
                                        ? "text-2xl md:text-3xl"
                                        : "text-xl md:text-2xl"
                                }`}
                            >
                                {section.content as string}
                            </h2>
                        </div>
                    </motion.div>
                );
            }

            case "paragraph":
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: baseDelay }}
                        className="mb-6"
                    >
                        <p className="text-base leading-8 text-text-secondary md:text-lg">
                            {renderInlineBold(section.content as string)}
                        </p>
                    </motion.div>
                );

            case "stats": {
                const statsText = section.content as string;
                const statItems = statsText.split("\n").filter((item) => item.trim());

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: baseDelay }}
                        className="mb-8"
                    >
                        <div className="rounded-xl border-r-4 border-text-accent bg-nav-hover-bg p-6">
                            <div className="flex items-start gap-3">
                                <Iconify
                                    faIcon="fa-circle-exclamation"
                                    width={20}
                                    className="mt-1 flex-shrink-0 text-text-accent"
                                />

                                <div>
                                    {statItems.map((item, itemIndex) => {
                                        const match = item.match(/\*\*(.*?)\*\*:\s*(.*)/);

                                        if (!match) return null;

                                        return (
                                            <div
                                                key={itemIndex}
                                                className="mb-2 last:mb-0"
                                            >
                                                <span className="text-lg font-bold text-text-accent">
                                                    {match[1]}
                                                </span>

                                                <span className="mr-2 text-text-secondary">
                                                    {match[2]}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            }

            case "list": {
                const items = section.content as string[];

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: baseDelay }}
                        className="mb-8"
                    >
                        <div className="rounded-xl border border-card-glass-border bg-card-glass p-6 backdrop-blur-xl">
                            <div className="space-y-3">
                                {items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-primary">
                                            <div className="h-2 w-2 rounded-full bg-white" />
                                        </div>

                                        <p className="flex-1 leading-8 text-text-secondary">
                                            {renderInlineBold(item)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            }

            case "checklist": {
                const checkItems = section.content as string[];

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: baseDelay }}
                        className="mb-8"
                    >
                        <div className="rounded-xl border-l-4 border-status-success bg-status-success-soft p-6">
                            <div className="mb-4 flex items-start gap-3">
                                <Iconify
                                    faIcon="fa-lightbulb"
                                    width={24}
                                    className="text-status-success"
                                />

                                <h4 className="text-lg font-semibold text-text-primary">
                                    نکات کلیدی
                                </h4>
                            </div>

                            <div className="space-y-3">
                                {checkItems.map((item, itemIndex) => (
                                    <motion.div
                                        key={itemIndex}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: baseDelay + itemIndex * 0.05,
                                        }}
                                        className="flex items-start gap-3"
                                    >
                                        <Iconify
                                            faIcon="fa-circle-check"
                                            width={20}
                                            className="mt-1 flex-shrink-0 text-status-success"
                                        />

                                        <p className="flex-1 leading-8 text-text-secondary">
                                            {renderInlineBold(item)}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            }

            default:
                return null;
        }
    };

    return (
        <div className="space-y-4">
            {sections.map((section, index) => renderSection(section, index))}
        </div>
    );
}