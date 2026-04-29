"use client";

import { motion } from "motion/react";
import { ArrowLeft, BarChart3, Database, Sparkles, TrendingUp } from "lucide-react";
import CustomImage from "@/_components/common/Image";
import {Iconify} from "@/_components/iconify";

export function HeroSection() {
    return (
        <section
            id="home"
        >
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

            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-text-accent/40"
                        initial={{
                            x: Math.random() * window?.innerWidth,
                            y: Math.random() * window?.innerHeight,
                        }}
                        animate={{
                            y: [null, Math.random() * window?.innerHeight],
                            x: [null, Math.random() * window?.innerWidth],
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
                    className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20"
                />

                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-primary-hover rounded-full blur-3xl opacity-20"
                />

                <motion.div
                    animate={{ scale: [1, 1.4, 1], x: [0, 100, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10"
                />
            </div>

            <motion.div className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center mt-4">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-right"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-nav-hover-bg border border-header-border rounded-full
                            text-sm mb-6 backdrop-blur-sm text-text-accent"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                            <Sparkles size={16} className="text-yellow-400" />
                            </motion.div>

                            راهکارهای هوش تجاری و تحلیل داده


                                <BarChart3 size={16} className="text-orange-400" />
                                {/*<Iconify faIcon="fa-chart"/>*/}

                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                        >
                            <motion.span
                                className="inline-block text-text-primary"
                                animate={{ opacity: [0.9, 1, 0.9] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            >
                                داده‌های شما،
                            </motion.span>

                            <br />

                            <motion.span
                                className="inline-block bg-gradient-primary bg-clip-text text-transparent"
                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                style={{ backgroundSize: "200% auto" }}
                            >
                                تصمیمات هوشمند
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl text-text-secondary"
                        >
                            ما داشبوردهای تحلیلی پیشرفته، گزارش‌های هوشمند و راهکارهای BI سفارشی برای
                            کسب‌وکار شما طراحی می‌کنیم.{" "}
                            <span className="text-text-accent font-semibold">
                از داده‌های خام تا بینش‌های عملیاتی.
              </span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-6 py-3 bg-gradient-primary text-white rounded-xl flex items-center gap-2 hover:shadow-2xl transition-all relative overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-primary-hover"
                                    initial={{ x: "100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />

                                <span className="relative z-10 font-semibold">مشاوره رایگان</span>

                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="relative z-10"
                                >
                                    <ArrowLeft size={20} />
                                </motion.div>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 bg-nav-hover-bg backdrop-blur-sm border border-header-border text-text-primary rounded-xl flex items-center gap-2 hover:bg-nav-hover-bg-strong transition-all"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center"
                                >
                                    <Database size={16} fill="white" />
                                </motion.div>
                                مشاهده نمونه کارها
                            </motion.button>
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
                                    <TrendingUp className="text-white" size={28} />
                                </motion.div>

                                <div>
                                    <div className="text-white font-semibold text-sm">داشبورد زنده</div>
                                    <div className="text-white/80 text-xs">Real-time Analytics</div>
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
                                    <span className="text-3xl">🚀</span>
                                </motion.div>

                                <div>
                                    <div className="text-white font-semibold text-sm">تحلیل پیشرفته</div>
                                    <div className="text-white/80 text-xs">AI-Powered Insights</div>
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