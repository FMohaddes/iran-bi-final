"use client";

import {motion} from "motion/react";
import Link from "next/link";
import {caseStudiesData} from "@/data/caseStudies";
import CustomImage from "@/_components/common/Image";
import {Iconify} from "@/_components/iconify";
import {BaseButton} from "@/_components/common/ui/base-button";
import { SectionHeader } from "@/_components/common/section-header";

export function CaseStudiesSection() {
    return (
        <section className="relative section-padding ">
            <div >
                <SectionHeader
                    title="نمونه پروژه‌های موفق"
                    highlight=""
                    description="داستان موفقیت مشتریان ما در تحول دیجیتال"
                />

                <div className = "grid lg:grid-cols-3 gap-8" >
                    {caseStudiesData.map((study, index) => (
                        <motion.div
                            key = {study.slug ?? index}
                            initial = {{opacity: 0, y: 50}}
                            whileInView = {{opacity: 1, y: 0}}
                            viewport = {{once: true}}
                            transition = {{delay: index * 0.2}}
                            whileHover = {{y: -10}}
                            className = "group"
                        >
                            <div
                                className = "relative rounded-2xl overflow-hidden transition-all bg-card-gradient border border-card-border hover:border-card-border-hover hover:shadow-xl hover:shadow-header-shadow" >
                                <div className = "relative h-64 overflow-hidden" >

                                    <div className = "w-full h-80" >
                                        <CustomImage
                                            src = {study.dashboardImage}
                                            alt = {study.company}
                                            quality = {100}
                                            className = "object-cover"
                                        />

                                    </div >
                                    <div
                                        className = "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                    <div
                                        className = "absolute top-4 right-4 px-3 py-1 bg-nav-hover-bg backdrop-blur-sm text-text-accent border border-header-border text-xs rounded-full font-semibold" >
                                        {study.industry}
                                    </div >
                                </div >

                                <div className = "p-6" >
                                    <div className = "text-sm mb-2 font-semibold text-text-accent" >
                                        {study.company}
                                    </div >

                                    <h3 className = "text-xl mb-3 font-bold text-text-primary" >
                                        {study.title}
                                    </h3 >

                                    <p className = "text-sm leading-relaxed mb-6 text-text-secondary" >
                                        {study.description}
                                    </p >

                                    <div className = "grid grid-cols-2 gap-4 mb-6" >
                                        {study.results.map((result, i) => {

                                            return (
                                                <div
                                                    key = {i}
                                                    className = "rounded-xl p-3 bg-nav-hover-bg border border-header-border"
                                                >
                                                    <Iconify
                                                        faIcon={result.icon}
                                                        variant="light"
                                                        width={16}
                                                        className="mb-2 text-text-accent"
                                                    />
                                                    <div
                                                        className = "text-2xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent" >
                                                        {result.value}
                                                    </div >

                                                    <div className = "text-xs text-text-muted" >
                                                        {result.label}
                                                    </div >
                                                </div >
                                            );
                                        })}
                                    </div >

                                    <Link
                                        href = {`/case-study/${study.slug}`}
                                        className = "w-full py-2 rounded-lg transition-all flex items-center justify-center gap-2 font-semibold bg-nav-hover-bg text-text-accent border border-header-border hover:bg-gradient-primary hover:text-text-on-brand"
                                    >
                                        مطالعه کامل
                                        <Iconify width={16} faIcon="fa-arrow-left" variant="light" />

                                    </Link >
                                </div >
                            </div >
                        </motion.div >
                    ))}
                </div >

                <motion.div
                    initial = {{opacity: 0}}
                    whileInView = {{opacity: 1}}
                    viewport = {{once: true}}
                    className = "text-center mt-6"
                >

                    <BaseButton variant="outline" href="/portfolio">
                        مشاهده همه پروژه‌ها
                    </BaseButton>
                </motion.div >
            </div >
        </section >
    );
}