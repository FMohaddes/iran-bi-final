"use client";

import { motion } from "motion/react";
import {Iconify} from "@/_components/iconify";
import { SectionHeader } from "@/_components/common/section-header";

const services = [
    {
        icon: "fa-chart-line",
        title: "تحلیل داده‌های کسب‌وکار",
        subtitle: "Foundation",
        description: "تبدیل داده‌های خام به بینش‌های قابل اجرا برای تصمیم‌گیری‌های هوشمندانه",
        features: ["تحلیل داده", "گزارش‌سازی", "شناسایی الگو"],
        gradientClass: "bg-gradient-purple-pink",
        delay: 0,
    },
    {
        icon: "fa-gauge",
        title: "طراحی داشبورد مدیریتی",
        subtitle: "BI Core",
        description: "داشبوردهای تعاملی و لحظه‌ای برای نظارت بر عملکرد کسب‌وکار",
        features: ["Power BI", "Tableau", "Excel"],
        gradientClass: "bg-gradient-pink-orange",
        delay: 0.1,
    },
    {
        icon: "fa-arrow-trend-up",
        title: "پیش‌بینی و مدل‌سازی",
        subtitle: "Predictive",
        description: "مدل‌های پیش‌بینی برای برنامه‌ریزی بهتر و کاهش ریسک",
        features: ["پیش‌بینی فروش", "مدل‌سازی", "تحلیل روند"],
        gradientClass: "bg-gradient-orange-yellow",
        delay: 0.2,
    },
    {
        icon: "fa-bolt",
        title: "بهینه‌سازی و بهبود فرآیند",
        subtitle: "Optimization",
        description: "شناسایی نقاط ضعف و ارائه راهکارهای بهبود عملکرد",
        features: ["بهینه‌سازی هزینه", "افزایش کارایی", "حذف اتلاف"],
        gradientClass: "bg-gradient-yellow-green",
        delay: 0.3,
    },
    {
        icon: "fa-database",
        title: "طراحی سیستم‌های داده",
        subtitle: "Data Systems",
        description: "طراحی و پیاده‌سازی زیرساخت‌های داده مقیاس‌پذیر",
        features: ["ETL Pipeline", "Data Warehouse", "معماری داده"],
        gradientClass: "bg-gradient-green-cyan",
        delay: 0.4,
    },
    {
        icon: "fa-briefcase",
        title: "مشاوره و پیاده‌سازی هوش تجاری",
        subtitle: "Business Focus",
        description: "مشاوره استراتژیک و پیاده‌سازی راهکارهای BI سازمانی",
        features: ["استراتژی BI", "مدیریت پروژه", "آموزش تیم"],
        gradientClass: "bg-gradient-cyan-blue",
        delay: 0.5,
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="relative section-padding">
            <div >
                <SectionHeader
                    title="راهکارهای"
                    highlight="هوش تجاری"
                    description="۶ خدمت تخصصی برای تحول دیجیتال کسب‌وکار شما"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: service.delay }}
                                whileHover={{ y: -10 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-full rounded-2xl p-6 transition-all overflow-hidden bg-card-gradient border border-card-border hover:border-card-border-hover hover:shadow-xl hover:shadow-header-shadow">
                                    <div
                                        className={`absolute inset-0 ${service.gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />

                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-16 h-16 mb-4 ${service.gradientClass} rounded-2xl flex items-center justify-center relative`}
                                    >
                                        <Iconify
                                            faIcon={service.icon}
                                            variant="duotoneLight"
                                            width={32}
                                            className="text-text-on-brand"
                                        />
                                    </motion.div>

                                    <div className="mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-nav-hover-bg text-text-accent border border-header-border">
                      {service.subtitle}
                    </span>
                                    </div>

                                    <h3 className="text-xl text-text-primary mb-3 font-semibold">
                                        {service.title}
                                    </h3>

                                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="text-xs px-2 py-1 rounded bg-nav-hover-bg text-text-accent"
                                            >
                        {feature}
                      </span>
                                        ))}
                                    </div>

                                    <button className="text-text-accent text-sm hover:text-text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                                        مشاهده جزئیات
                                        <Iconify width={12} faIcon="fa-arrow-left" variant="light" />

                                    </button>

                                    <div
                                        className={`absolute -bottom-10 -right-10 w-32 h-32 ${service.gradientClass} opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}