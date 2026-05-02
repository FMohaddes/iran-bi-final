"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";

import { caseStudiesData } from "@/data/caseStudies";
import { HeroHeader } from "@/app/(home)/components/hero-header";
import { SectionHeader } from "@/_components/common/section-header";
import { Iconify } from "@/_components/iconify";
import CustomImage from "@/_components/common/Image";
import ContainerLayout from "@/_components/common/layout/container-layout";

export function CaseStudyView() {
    const params = useParams<{ slug: string }>();
    const router = useRouter();

    const rawSlug = params?.slug;
    const slug = rawSlug ? decodeURIComponent(rawSlug) : undefined;

    const caseStudy = slug
        ? caseStudiesData.find((item) => item.slug === slug)
        : undefined;

    if (!caseStudy) {
        return (
            <ContainerLayout>
                <section className="flex min-h-screen items-center justify-center bg-section-gradient">
                    <div className="text-center">
                        <h1 className="mb-4 text-4xl font-bold text-text-primary">
                            پروژه یافت نشد
                        </h1>

                        <Link href="/portfolio" className="text-text-accent hover:underline">
                            بازگشت به نمونه‌کارها
                        </Link>
                    </div>
                </section>
            </ContainerLayout>
        );
    }

    return (
        <ContainerLayout>
            <section className="relative overflow-hidden bg-section-gradient section-padding">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-text-accent/20 blur-3xl" />
                    <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-status-error/20 blur-3xl" />
                </div>

                <div className="relative z-10 mt-4">
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        type="button"
                        onClick={() => router.push("/portfolio")}
                        className="mb-8 flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-text-secondary transition-all hover:bg-nav-hover-bg hover:text-text-accent"
                    >
                        <Iconify faIcon="fa-arrow-right" width={16} />
                        بازگشت به نمونه‌کارها
                    </motion.button>

                    <HeroHeader
                        align="center"
                        badgeIcon="fa-sparkles"
                        badgeText={caseStudy.industry}
                        title={caseStudy.company}
                        highlight={caseStudy.title}
                        description={<>{caseStudy.description}</>}
                    />
                </div>
            </section>

            <section className="bg-section-gradient section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-3xl border border-card-glass-border bg-card-glass shadow-2xl shadow-header-shadow backdrop-blur-xl"
                >
                    <div className="flex items-center gap-2 border-b border-header-border px-6 py-4">
                        <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-status-error" />
                            <div className="h-3 w-3 rounded-full bg-status-warning" />
                            <div className="h-3 w-3 rounded-full bg-status-success" />
                        </div>

                        <div className="mx-4 flex-1 rounded-lg bg-bg-secondary px-4 py-2 text-sm text-text-muted">
                            dashboard.iranbi.com/{caseStudy.slug}
                        </div>
                    </div>

                    <div className="relative">
                        <CustomImage
                            src={caseStudy.dashboardImage}
                            alt={`داشبورد ${caseStudy.company}`}
                            quality={100}
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </section>

            <section className="relative overflow-hidden bg-section-gradient section-padding">
                <SectionHeader
                    title="چالش و"
                    highlight="راهکار"
                    description="نگاهی به چالش‌های کسب‌وکار و راهکار ارائه شده"
                />

                <div className="grid gap-12 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative overflow-hidden rounded-3xl border border-card-glass-border bg-card-glass p-10 backdrop-blur-xl transition-all hover:border-status-error-border"
                    >
                        <div className="absolute inset-0 bg-status-error-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative z-10">
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-orange shadow-2xl shadow-header-shadow"
                            >
                                <Iconify
                                    faIcon="fa-triangle-exclamation"
                                    variant="duotoneLight"
                                    width={32}
                                    className="text-text-on-brand"
                                />
                            </motion.div>

                            <h2 className="mb-6 text-3xl font-bold text-text-primary">
                                چالش
                            </h2>

                            <p className="mb-8 text-lg leading-8 text-text-secondary">
                                {caseStudy.challenge}
                            </p>

                            {caseStudy.challengeDetails && (
                                <div className="space-y-4">
                                    <h3 className="mb-4 text-lg font-bold text-text-primary">
                                        مشکلات اصلی:
                                    </h3>

                                    {caseStudy.challengeDetails.map((detail, index) => (
                                        <motion.div
                                            key={detail}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-orange">
                                                <Iconify
                                                    faIcon="fa-xmark"
                                                    width={12}
                                                    className="text-text-on-brand"
                                                />
                                            </div>

                                            <p className="text-base leading-8 text-text-secondary">
                                                {detail}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-status-error/20 blur-3xl transition-transform duration-500 group-hover:scale-150" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative overflow-hidden rounded-3xl border border-card-glass-border bg-card-glass p-10 backdrop-blur-xl transition-all hover:border-status-success-border"
                    >
                        <div className="absolute inset-0 bg-status-success-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative z-10">
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-green shadow-2xl shadow-header-shadow"
                            >
                                <Iconify
                                    faIcon="fa-circle-check"
                                    variant="duotoneLight"
                                    width={32}
                                    className="text-text-on-brand"
                                />
                            </motion.div>

                            <h2 className="mb-6 text-3xl font-bold text-text-primary">
                                راهکار
                            </h2>

                            <p className="mb-8 text-lg leading-8 text-text-secondary">
                                {caseStudy.solution}
                            </p>

                            {caseStudy.solutionDetails && (
                                <div className="space-y-4">
                                    <h3 className="mb-4 text-lg font-bold text-text-primary">
                                        راهکارهای پیاده‌سازی شده:
                                    </h3>

                                    {caseStudy.solutionDetails.map((detail, index) => (
                                        <motion.div
                                            key={detail}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-green">
                                                <Iconify
                                                    faIcon="fa-check"
                                                    width={12}
                                                    className="text-text-on-brand"
                                                />
                                            </div>

                                            <p className="text-base leading-8 text-text-secondary">
                                                {detail}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-status-success/20 blur-3xl transition-transform duration-500 group-hover:scale-150" />
                    </motion.div>
                </div>
            </section>

            <section className="bg-section-gradient section-padding">
                <SectionHeader
                    title="نتایج"
                    highlight="قابل اندازه‌گیری"
                    description="خروجی‌های واقعی و قابل ردیابی پس از پیاده‌سازی راهکار"
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {caseStudy.metrics.map((metric, index) => (
                        <motion.div
                            key={`${metric.label}-${index}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group rounded-2xl border border-card-glass-border bg-card-glass p-8 text-center backdrop-blur-xl transition-all hover:border-card-border-hover"
                        >
                            <div className="mb-3 bg-gradient-primary bg-clip-text text-5xl font-bold text-transparent">
                                {metric.value}
                            </div>

                            <div className="mb-2 font-bold text-text-primary">
                                {metric.label}
                            </div>

                            <div className="text-sm leading-7 text-text-secondary">
                                {metric.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-section-gradient section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-header-border bg-nav-hover-bg p-12 backdrop-blur-xl"
                >
                    <Iconify
                        faIcon="fa-quote-right"
                        width={64}
                        className="absolute right-8 top-8 text-text-accent/30"
                    />

                    <div className="relative z-10">
                        <p className="mb-8 text-2xl leading-10 text-text-primary">
                            "{caseStudy.testimonial.text}"
                        </p>

                        <div className="flex items-center gap-4">
                            <img
                                src={caseStudy.testimonial.image}
                                alt={caseStudy.testimonial.author}
                                className="h-16 w-16 rounded-full object-cover"
                            />

                            <div>
                                <div className="font-bold text-text-primary">
                                    {caseStudy.testimonial.author}
                                </div>

                                <div className="text-sm text-text-secondary">
                                    {caseStudy.testimonial.role}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="bg-section-gradient section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-4xl rounded-3xl border border-header-border bg-nav-hover-bg p-12 text-center backdrop-blur-xl"
                >
                    <h2 className="mb-4 text-4xl font-bold text-text-primary">
                        پروژه مشابهی دارید؟
                    </h2>

                    <p className="mb-8 text-lg text-text-secondary">
                        ما می‌توانیم به شما هم کمک کنیم تا کسب‌وکارتان را متحول کنید
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
                        درخواست مشاوره رایگان
                    </motion.a>
                </motion.div>
            </section>
        </ContainerLayout>
    );
}