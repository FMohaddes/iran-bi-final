"use client";

import {motion} from "motion/react";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";
import {caseStudiesData} from "@/data/caseStudies";
import CustomImage from "@/_components/common/Image";

export function CaseStudiesSection() {
    return (
        <section  >
            <div >
                <motion.div
                    initial = {{opacity: 0, y: 30}}
                    whileInView = {{opacity: 1, y: 0}}
                    viewport = {{once: true}}
                    className = "text-center mb-16"
                >
                    <h2 className = "text-4xl md:text-5xl mb-4 font-bold text-text-primary" >
                        نمونه پروژه‌های موفق
                    </h2 >

                    <p className = "text-text-secondary text-lg" >
                        داستان موفقیت مشتریان ما در تحول دیجیتال
                    </p >
                </motion.div >

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
                                            const Icon = result.icon;

                                            return (
                                                <div
                                                    key = {i}
                                                    className = "rounded-xl p-3 bg-nav-hover-bg border border-header-border"
                                                >
                                                    <Icon size = {16} className = "mb-2 text-text-accent" />

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
                                        className = "w-full py-2 rounded-lg transition-all flex items-center justify-center gap-2 font-semibold bg-nav-hover-bg text-text-accent border border-header-border hover:bg-gradient-primary hover:text-white"
                                    >
                                        مطالعه کامل
                                        <ArrowLeft size = {16} />
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
                    <Link
                        href = "/portfolio"
                        className = "inline-block px-6 py-3 border-2 border-header-border rounded-xl transition-all font-bold text-lg text-text-accent hover:bg-gradient-primary hover:text-white hover:shadow-2xl hover:shadow-header-shadow"
                    >
                        مشاهده همه پروژه‌ها
                    </Link >
                </motion.div >
            </div >
        </section >
    );
}