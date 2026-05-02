"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { HeroHeader } from "@/app/(home)/components/hero-header";
import { Iconify } from "@/_components/iconify";
import ContainerLayout from "@/_components/common/layout/container-layout";

const contactInfo = [
    {
        icon: "fa-phone",
        title: "تلفن تماس",
        value: "۰۲۱-۱۲۳۴۵۶۷۸",
        gradient: "bg-gradient-purple",
    },
    {
        icon: "fa-envelope",
        title: "ایمیل",
        value: "info@iranbi.com",
        gradient: "bg-gradient-blue",
    },
    {
        icon: "fa-location-dot",
        title: "آدرس دفتر",
        value: "تهران، خیابان ولیعصر، پلاک ۱۲۳۴",
        gradient: "bg-gradient-orange",
    },
    {
        icon: "fa-clock",
        title: "ساعت کاری",
        value: "شنبه تا چهارشنبه، ۹ صبح تا ۶ عصر",
        gradient: "bg-gradient-green",
    },
];

const benefits = [
    { icon: "fa-circle-check", text: "مشاوره رایگان و بدون تعهد" },
    { icon: "fa-users", text: "بررسی توسط متخصصان با تجربه" },
    { icon: "fa-clock", text: "پاسخگویی در کمتر از ۲۴ ساعت" },
    { icon: "fa-sparkles", text: "ارائه راهکار اختصاصی برای کسب‌وکار شما" },
];

const industries = [
    "تولید",
    "خدمات مالی",
    "فروش و بازاریابی",
    "انبار و لجستیک",
    "خرده‌فروشی",
    "فناوری اطلاعات",
    "بهداشت و درمان",
    "سایر",
];

export function ConsultationView() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        industry: "",
        message: "",
    });

    const inputClass =
        "w-full rounded-xl border border-header-border bg-bg-secondary px-4 py-3 text-text-primary placeholder:text-text-muted transition-all focus:outline-none focus:ring-2 focus:ring-purple-500";

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Form submitted:", formData);

        setFormSubmitted(true);

        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
                name: "",
                company: "",
                phone: "",
                email: "",
                industry: "",
                message: "",
            });
        }, 3000);
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <ContainerLayout>
            <section className="relative overflow-hidden bg-section-gradient section-padding">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-text-accent/20 blur-3xl" />
                    <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-status-error/20 blur-3xl" />
                </div>

                <div className="relative z-10 mt-4">
                    <HeroHeader
                        align="center"
                        badgeIcon="fa-sparkles"
                        badgeText="مشاوره رایگان"
                        title="آماده شروع"
                        highlight="تحول دیجیتال"
                        afterHighlight="کسب‌وکار خود هستید؟"
                        description={
                            <>
                                با تکمیل فرم زیر، اولین قدم برای تحول دیجیتال کسب‌وکارتان را بردارید.
                                متخصصان ما در کمتر از ۲۴ ساعت با شما تماس خواهند گرفت.
                            </>
                        }
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.text}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex items-center gap-3 rounded-2xl border border-card-glass-border bg-card-glass p-4 backdrop-blur-xl"
                            >
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-primary">
                                    <Iconify
                                        faIcon={benefit.icon}
                                        variant="duotoneLight"
                                        width={20}
                                        className="text-text-on-brand"
                                    />
                                </div>

                                <p className="text-sm text-text-primary">{benefit.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="bg-section-gradient section-padding">
                <div className="grid gap-8 lg:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="rounded-3xl border border-card-glass-border bg-card-glass p-8 backdrop-blur-xl md:p-12">
                            <h2 className="mb-6 text-3xl font-bold text-text-primary">
                                فرم درخواست مشاوره
                            </h2>

                            {formSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-16 text-center"
                                >
                                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-green">
                                        <Iconify
                                            faIcon="fa-circle-check"
                                            variant="duotoneLight"
                                            width={48}
                                            className="text-text-on-brand"
                                        />
                                    </div>

                                    <h3 className="mb-4 text-2xl font-bold text-status-success">
                                        درخواست شما با موفقیت ثبت شد!
                                    </h3>

                                    <p className="text-text-secondary">
                                        متخصصان ما در کمتر از ۲۴ ساعت با شما تماس خواهند گرفت.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-text-primary">
                                                <Iconify faIcon="fa-user" width={16} className="text-text-accent" />
                                                نام و نام خانوادگی *
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className={inputClass}
                                                placeholder="نام خود را وارد کنید"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-text-primary">
                                                <Iconify faIcon="fa-building" width={16} className="text-text-accent" />
                                                نام شرکت
                                            </label>

                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className={inputClass}
                                                placeholder="نام شرکت خود را وارد کنید"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-text-primary">
                                                <Iconify faIcon="fa-phone" width={16} className="text-text-accent" />
                                                شماره تماس *
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className={inputClass}
                                                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                                                dir="ltr"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-text-primary">
                                                <Iconify faIcon="fa-envelope" width={16} className="text-text-accent" />
                                                ایمیل *
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={inputClass}
                                                placeholder="your@email.com"
                                                dir="ltr"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-text-primary">
                                            <Iconify faIcon="fa-briefcase" width={16} className="text-text-accent" />
                                            صنعت کسب‌وکار *
                                        </label>

                                        <select
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleChange}
                                            required
                                            className={inputClass}
                                        >
                                            <option value="">صنعت خود را انتخاب کنید</option>

                                            {industries.map((industry) => (
                                                <option key={industry} value={industry}>
                                                    {industry}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-text-primary">
                                            <Iconify faIcon="fa-message" width={16} className="text-text-accent" />
                                            توضیحات و نیازمندی‌های شما
                                        </label>

                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className={`${inputClass} resize-none`}
                                            placeholder="لطفاً چالش‌ها و نیازهای کسب‌وکار خود را شرح دهید..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-8 py-4 text-lg font-bold text-text-on-brand transition-all hover:shadow-2xl hover:shadow-header-shadow"
                                    >
                                        <Iconify
                                            faIcon="fa-paper-plane"
                                            variant="duotoneLight"
                                            width={20}
                                            className="text-text-on-brand"
                                        />
                                        ارسال درخواست مشاوره
                                    </motion.button>

                                    <p className="text-center text-sm text-text-muted">
                                        با ارسال این فرم، شما با{" "}
                                        <a href="#" className="text-text-accent hover:underline">
                                            قوانین و مقررات
                                        </a>{" "}
                                        ما موافقت می‌کنید.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="rounded-3xl border border-card-glass-border bg-card-glass p-8 backdrop-blur-xl">
                            <h3 className="mb-6 text-2xl font-bold text-text-primary">
                                اطلاعات تماس
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div
                                            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${info.gradient}`}
                                        >
                                            <Iconify
                                                faIcon={info.icon}
                                                variant="duotoneLight"
                                                width={22}
                                                className="text-text-on-brand"
                                            />
                                        </div>

                                        <div>
                                            <p className="mb-1 text-sm text-text-muted">
                                                {info.title}
                                            </p>

                                            <p className="font-semibold text-text-primary">
                                                {info.value}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-header-border bg-nav-hover-bg p-6 backdrop-blur-xl"
                        >
                            <Iconify
                                faIcon="fa-sparkles"
                                variant="duotoneLight"
                                width={24}
                                className="mb-3 text-text-accent"
                            />

                            <h4 className="mb-2 font-bold text-text-primary">
                                💡 نکته مهم
                            </h4>

                            <p className="text-sm leading-7 text-text-secondary">
                                مشاوره اولیه ما کاملاً رایگان و بدون هیچ تعهدی است. ما ابتدا نیازهای
                                شما را بررسی می‌کنیم و سپس بهترین راهکار را پیشنهاد می‌دهیم.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </ContainerLayout>
    );
}