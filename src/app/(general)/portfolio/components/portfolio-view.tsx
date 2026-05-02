"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { caseStudiesData } from "@/data/caseStudies";
import { HeroHeader } from "@/app/(home)/components/hero-header";
import { Iconify } from "@/_components/iconify";
import CustomImage from "@/_components/common/Image";
import ContainerLayout from "@/_components/common/layout/container-layout";

const portfolioStats = [
    { value: `${caseStudiesData.length}+`, label: "پروژه موفق", icon: "fa-briefcase" },
    { value: "۸۰+", label: "مشتری راضی", icon: "fa-users" },
    { value: "۹۵٪", label: "رضایت", icon: "fa-heart" },
    { value: "۴", label: "صنعت", icon: "fa-industry" },
];

export function PortfolioView() {
    return (
        <ContainerLayout>
            <section className="relative overflow-hidden bg-section-gradient section-padding">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-text-accent/20 blur-3xl" />
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-status-error/20 blur-3xl" />
                </div>

                <div className="mt-4 relative z-10 ">
                    <HeroHeader
                        align="center"
                        badgeIcon="fa-briefcase"
                        badgeText="نمونه کارهای ما"
                        title="پروژه‌های"
                        highlight="موفق"
                        description={
                            <>
                                نمونه‌ای از پروژه‌هایی که با موفقیت برای مشتریانمان اجرا کردیم و تحول
                                دیجیتال واقعی در کسب‌وکارشان ایجاد کردیم.
                            </>
                        }
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
                    >
                        {portfolioStats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-card-glass-border bg-card-glass p-5 text-center backdrop-blur-xl"
                            >
                                <div className="mb-3 flex justify-center">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary">
                                        <Iconify
                                            faIcon={stat.icon}
                                            variant="duotoneLight"
                                            width={22}
                                            className="text-text-on-brand"
                                        />
                                    </div>
                                </div>

                                <div className="mb-1 bg-gradient-primary bg-clip-text text-3xl font-bold text-transparent">
                                    {stat.value}
                                </div>

                                <div className="text-sm text-text-muted">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="bg-section-gradient py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {caseStudiesData.map((study, index) => (
                            <motion.div
                                key={study.slug ?? index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <Link href={`/case-study/${study.slug}`}>
                                    <div className="relative h-full overflow-hidden rounded-2xl border border-card-border bg-card-gradient transition-all hover:border-card-border-hover hover:shadow-xl hover:shadow-header-shadow">
                                        <div className="relative h-64 overflow-hidden">
                                            <CustomImage
                                                src={study.dashboardImage}
                                                alt={study.company}
                                                quality={100}
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                            <div className="absolute top-4 right-4 rounded-full border border-header-border bg-nav-hover-bg px-3 py-1 text-xs font-semibold text-text-accent backdrop-blur-sm">
                                                {study.industry}
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="mb-2 text-sm font-semibold text-text-accent">
                                                {study.company}
                                            </div>

                                            <h3 className="mb-3 text-xl font-bold text-text-primary">
                                                {study.title}
                                            </h3>

                                            <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                                                {study.description}
                                            </p>

                                            <div className="mb-6 grid grid-cols-2 gap-4">
                                                {study.results.map((result, resultIndex) => (
                                                    <div
                                                        key={resultIndex}
                                                        className="rounded-xl border border-header-border bg-nav-hover-bg p-3"
                                                    >
                                                        <Iconify
                                                            faIcon={result.icon}
                                                            variant="light"
                                                            width={16}
                                                            className="mb-2 text-text-accent"
                                                        />

                                                        <div className="mb-1 bg-gradient-primary bg-clip-text text-2xl font-bold text-transparent">
                                                            {result.value}
                                                        </div>

                                                        <div className="text-xs text-text-muted">
                                                            {result.label}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-text-accent transition-all group-hover:gap-3">
                                                مشاهده جزئیات
                                                <Iconify
                                                    faIcon="fa-arrow-left"
                                                    variant="light"
                                                    width={16}
                                                    className="text-text-accent"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-section-gradient py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-4xl rounded-3xl border border-header-border bg-nav-hover-bg p-12 text-center backdrop-blur-xl"
                    >
                        <h2 className="mb-4 text-4xl font-bold text-text-primary">
                            پروژه شما چه زمانی شروع می‌شود؟
                        </h2>

                        <p className="mb-8 text-lg text-text-secondary">
                            ما آماده‌ایم تا کسب‌وکار شما را هم به موفقیت برسانیم
                        </p>

                        <motion.a
                            href="/consultation"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-8 py-4 font-bold text-text-on-brand transition-all hover:shadow-2xl hover:shadow-header-shadow"
                        >
                            <Iconify
                                faIcon="fa-sparkles"
                                variant="duotoneLight"
                                width={20}
                                className="text-text-on-brand"
                            />
                            شروع پروژه جدید
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </ContainerLayout>
    );
}