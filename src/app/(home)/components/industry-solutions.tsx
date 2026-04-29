"use client";

import { motion } from "motion/react";
import { DollarSign, Factory, Package, TrendingUp } from "lucide-react";

const industrySolutions = [
    {
        icon: Factory,
        title: "راهکار تولید",
        subtitle: "Production Intelligence",
        description:
            "مانیتورینگ خطوط تولید، کنترل کیفیت و بهینه‌سازی فرآیندهای تولیدی با داده‌های لحظه‌ای",
        gradientClass: "bg-gradient-blue",
        features: ["مانیتورینگ خطوط تولید", "کنترل کیفیت محصول", "کاهش ضایعات", "افزایش راندمان"],
    },
    {
        icon: DollarSign,
        title: "راهکار مالی",
        subtitle: "Financial Analytics",
        description:
            "تحلیل مالی پیشرفته، پیش‌بینی جریان نقدینگی و گزارش‌های مالی هوشمند برای تصمیم‌گیری بهتر",
        gradientClass: "bg-gradient-purple",
        features: ["تحلیل سودآوری", "پیش‌بینی نقدینگی", "کنترل هزینه‌ها", "گزارش‌های مالی"],
    },
    {
        icon: TrendingUp,
        title: "راهکار فروش",
        subtitle: "Sales Analytics",
        description:
            "تحلیل عملکرد فروش، شناسایی مشتریان پرسود و بهینه‌سازی استراتژی‌های فروش و بازاریابی",
        gradientClass: "bg-gradient-orange",
        features: ["تحلیل روند فروش", "شناسایی مشتریان کلیدی", "پیش‌بینی فروش", "عملکرد فروشندگان"],
    },
    {
        icon: Package,
        title: "راهکار انبار و لجستیک",
        subtitle: "Warehouse & Logistics",
        description:
            "مدیریت موجودی هوشمند، بهینه‌سازی زنجیره تأمین و کاهش هزینه‌های انبارداری و حمل",
        gradientClass: "bg-gradient-green",
        features: ["مدیریت موجودی", "بهینه‌سازی مسیر حمل", "کنترل کالای در گردش", "پیش‌بینی تقاضا"],
    },
];

export function IndustrySolutions() {
    return (
        <section
            id="industry-solutions"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-primary opacity-20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-primary-hover opacity-20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-nav-hover-bg border border-header-border rounded-full text-text-accent text-sm mb-6"
                    >
                        <Factory size={16} />
                        راهکارهای صنعتی
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl mb-6 font-bold">
                        <span className="text-text-primary">۴ راهکار اصلی</span>
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
                            برای صنایع
            </span>
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto text-text-secondary">
                        راهکارهای هوش تجاری تخصصی برای تولید، مالی، فروش، و انبارداری
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
                    {industrySolutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="h-full rounded-2xl overflow-hidden transition-all relative bg-dropdown-bg border border-dropdown-border hover:border-header-border shadow-lg hover:shadow-2xl"
                            >
                                <div
                                    className={`absolute inset-0 ${solution.gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />

                                <div className="p-6 flex flex-col items-center justify-center relative bg-nav-hover-bg">
                                    <div
                                        className={`absolute inset-0 ${solution.gradientClass} opacity-10`}
                                    />

                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`w-20 h-20 rounded-2xl ${solution.gradientClass} flex items-center justify-center group-hover:shadow-2xl transition-all relative z-10`}
                                    >
                                        <solution.icon className="text-white" size={40} />
                                    </motion.div>
                                </div>

                                <div className="p-6 flex flex-col justify-between relative">
                                    <div>
                                        <h3 className="text-xl mb-2 font-bold text-text-primary">
                                            {solution.title}
                                        </h3>

                                        <p className="text-xs font-semibold mb-3 text-text-accent">
                                            {solution.subtitle}
                                        </p>

                                        <p className="text-sm leading-relaxed mb-4 text-text-secondary">
                                            {solution.description}
                                        </p>

                                        <div className="space-y-2 mb-4">
                                            {solution.features.map((feature, idx) => (
                                                <motion.div
                                                    key={feature}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <div
                                                        className={`w-4 h-4 rounded ${solution.gradientClass} flex items-center justify-center flex-shrink-0`}
                                                    >
                                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                                            <path
                                                                d="M10 3L4.5 8.5L2 6"
                                                                stroke="white"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <span className="text-xs text-text-secondary">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <motion.a
                                        href="/consultation"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full text-center px-4 py-2.5 rounded-xl transition-all font-semibold text-sm bg-nav-hover-bg text-text-accent border border-header-border hover:bg-nav-hover-bg-strong"
                                    >
                                        اطلاعات بیشتر
                                    </motion.a>
                                </div>

                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-1 ${solution.gradientClass} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right`}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="inline-block p-8 rounded-2xl bg-nav-hover-bg border border-header-border">
                        <h3 className="text-2xl mb-3 font-semibold text-text-primary">
                            صنعت شما را پیدا نکردید؟
                        </h3>

                        <p className="text-sm mb-6 max-w-2xl text-text-secondary">
                            ما راهکارهای سفارشی برای تمام صنایع ارائه می‌دهیم. برای مشاوره رایگان با ما
                            تماس بگیرید
                        </p>

                        <motion.a
                            href="/consultation"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-6 py-3 bg-gradient-primary text-white rounded-xl hover:shadow-xl hover:shadow-header-shadow transition-all font-semibold"
                        >
                            درخواست مشاوره رایگان
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}