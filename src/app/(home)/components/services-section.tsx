"use client";

import { motion } from "motion/react";
import { BarChart3, Briefcase, Database, Gauge, TrendingUp, Zap } from "lucide-react";

const services = [
    {
        icon: BarChart3,
        title: "تحلیل داده‌های کسب‌وکار",
        subtitle: "Foundation",
        description: "تبدیل داده‌های خام به بینش‌های قابل اجرا برای تصمیم‌گیری‌های هوشمندانه",
        features: ["تحلیل داده", "گزارش‌سازی", "شناسایی الگو"],
        gradientClass: "bg-gradient-purple-pink",
        delay: 0,
    },
    {
        icon: Gauge,
        title: "طراحی داشبورد مدیریتی",
        subtitle: "BI Core",
        description: "داشبوردهای تعاملی و لحظه‌ای برای نظارت بر عملکرد کسب‌وکار",
        features: ["Power BI", "Tableau", "Excel"],
        gradientClass: "bg-gradient-pink-orange",
        delay: 0.1,
    },
    {
        icon: TrendingUp,
        title: "پیش‌بینی و مدل‌سازی",
        subtitle: "Predictive",
        description: "مدل‌های پیش‌بینی برای برنامه‌ریزی بهتر و کاهش ریسک",
        features: ["پیش‌بینی فروش", "مدل‌سازی", "تحلیل روند"],
        gradientClass: "bg-gradient-orange-yellow",
        delay: 0.2,
    },
    {
        icon: Zap,
        title: "بهینه‌سازی و بهبود فرآیند",
        subtitle: "Optimization",
        description: "شناسایی نقاط ضعف و ارائه راهکارهای بهبود عملکرد",
        features: ["بهینه‌سازی هزینه", "افزایش کارایی", "حذف اتلاف"],
        gradientClass: "bg-gradient-yellow-green",
        delay: 0.3,
    },
    {
        icon: Database,
        title: "طراحی سیستم‌های داده",
        subtitle: "Data Systems",
        description: "طراحی و پیاده‌سازی زیرساخت‌های داده مقیاس‌پذیر",
        features: ["ETL Pipeline", "Data Warehouse", "معماری داده"],
        gradientClass: "bg-gradient-green-cyan",
        delay: 0.4,
    },
    {
        icon: Briefcase,
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
        <section id="services" className="relative">
            <div >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl mb-4 font-bold">
                        <span className="text-text-primary">راهکارهای</span>
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}هوش تجاری
            </span>
                    </h2>

                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        ۶ خدمت تخصصی برای تحول دیجیتال کسب‌وکار شما
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
                                        <Icon className="text-white" size={32} />
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
                                        <span className="text-xs">←</span>
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