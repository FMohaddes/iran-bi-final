"use client";

import { motion } from "motion/react";
import CustomImage from "@/_components/common/Image";
import {Iconify} from "@/_components/iconify";
import {useEffect, useState} from "react";
import { BaseButton } from "@/_components/common/ui/base-button";
import {HeroHeader} from "@/app/(home)/components/hero-header";

export function HeroSection() {
    const [particles, setParticles] = useState<{x:number,y:number}[]>([]);

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const generated = Array.from({ length: 20 }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
        }));

        setParticles(generated);
    }, []);

    return (
        <section id="home" className="relative section-padding">
            <div className="absolute inset-0">
                <div className="absolute inset-0" />

                <motion.div
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 opacity-25"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at center, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
                        backgroundSize: "200% 200%",
                    }}
                />
            </div>

            <div className="absolute inset-0 overflow-hidden mt-4">
                {particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-text-accent/40"
                        initial={{
                            x: particle.x,
                            y: particle.y,
                        }}
                        animate={{
                            x: [particle.x, particle.x + 100],
                            y: [particle.y, particle.y + 100],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-40 -right-40 w-1/2 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20"
                />

                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-40 -left-40 w-1/2 h-1/2 bg-gradient-primary-hover rounded-full blur-3xl opacity-20"
                />

                <motion.div
                    animate={{ scale: [1, 1.4, 1], x: [0, 100, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10"
                />
            </div>

            <motion.div className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-right"
                    >
                        <HeroHeader
                            badgeIcon="fa-sparkles"
                            badgeText="راهکارهای هوش تجاری و تحلیل داده"
                            title="داده‌های شما،"
                            highlight="تصمیمات هوشمند"
                            description={
                                <>
                                    ما داشبوردهای تحلیلی پیشرفته، گزارش‌های هوشمند و راهکارهای BI سفارشی برای
                                    کسب‌وکار شما طراحی می‌کنیم.{" "}
                                    <span className="text-text-accent font-semibold">
                از داده‌های خام تا بینش‌های عملیاتی.
            </span>
                                </>
                            }
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <BaseButton
                                variant="cta"
                                rightIcon={<Iconify faIcon="fa-arrow-left" variant="duotone" />}
                            >
                                مشاوره رایگان
                            </BaseButton>

                            <BaseButton variant="secondary">
                                مشاهده نمونه کارها
                            </BaseButton>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-header-border "
                        >
                            {[
                                { value: "+۵۰", label: "مشتری سازمانی" },
                                { value: "۹۸٪", label: "رضایت مشتریان" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center group cursor-pointer"
                                >
                                    <motion.div
                                        className="text-4xl md:text-5xl mb-2 bg-gradient-primary bg-clip-text text-transparent"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                    >
                                        {stat.value}
                                    </motion.div>

                                    <div className="text-text-muted text-sm">{stat.label}</div>
                                    <div className="w-12 h-1 bg-gradient-primary mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-header-shadow">
                                <div className="w-full h-80">
                                    <CustomImage
                                        src = {"/images/home/MarketingManagement.jpg"}
                                        alt = "profile"
                                        absolutePath = {true}
                                        quality = {100}
                                        className="object-cover"
                                    />

                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />

                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -inset-1 bg-gradient-primary rounded-3xl blur-xl opacity-0 -z-10"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="absolute -top-8 -left-8 bg-gradient-primary backdrop-blur-xl border border-header-border
                            rounded-2xl p-5 shadow-2xl shadow-header-shadow cursor-pointer z-10"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                                >
                                    {/*<TrendingUp className="text-text-on-brand" size={28} />*/}
                                    <Iconify
                                        faIcon="fa-arrow-trend-up"
                                        variant="light"
                                        width={28}
                                        className="text-text-on-brand"
                                    />
                                </motion.div>

                                <div>
                                    <div className="text-text-on-brand font-semibold text-sm">داشبورد زنده</div>
                                    <div className="text-text-on-brand/80 text-xs">Real-time Analytics</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="absolute -bottom-8 -right-8 bg-gradient-primary-hover backdrop-blur-xl border border-header-border
                             rounded-2xl p-5 shadow-2xl shadow-header-shadow cursor-pointer z-10"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                                >
                                    {/*<span className="text-3xl">🚀</span>*/}
                                    <Iconify
                                        faIcon="fa-rocket"
                                        variant="light"
                                        width={28}
                                        className="text-text-on-brand"
                                    />
                                </motion.div>

                                <div>
                                    <div className="text-text-on-brand font-semibold text-sm">تحلیل پیشرفته</div>
                                    <div className="text-text-on-brand/80 text-xs">AI-Powered Insights</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-8 h-12 border-2 border-header-border rounded-full flex justify-center pt-2 cursor-pointer backdrop-blur-sm bg-nav-hover-bg"
                >
                    <motion.div
                        animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-gradient-primary rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}