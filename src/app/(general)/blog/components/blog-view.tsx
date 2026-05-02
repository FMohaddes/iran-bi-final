"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

import { blogPosts, categories, categoryColors } from "@/data/blogData";
import { HeroHeader } from "@/app/(home)/components/hero-header";
import { SectionHeader } from "@/_components/common/section-header";
import { Iconify } from "@/_components/iconify";
import CustomImage from "@/_components/common/Image";
import ContainerLayout from "@/_components/common/layout/container-layout";

export function BlogView() {
    const [selectedCategory, setSelectedCategory] = useState("همه");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory =
            selectedCategory === "همه" || post.category === selectedCategory;

        const matchesSearch =
            post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);

        return matchesCategory && matchesSearch;
    });

    const featuredPosts = blogPosts.filter((post) => post.featured);

    const showFeaturedPosts = selectedCategory === "همه" && searchQuery === "";

    return (
        <ContainerLayout>
            <section className="relative overflow-hidden bg-section-gradient section-padding">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-text-accent/20 blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-status-error/20 blur-3xl" />
                </div>

                <div className="relative z-10 mt-4">
                    <HeroHeader
                        align="center"
                        badgeIcon="fa-sparkles"
                        badgeText="وبلاگ هوش تجاری"
                        title="آخرین مقالات"
                        highlight="و بینش‌های تحلیلی"
                        description={
                            <>
                                آموزش‌ها، راهکارها و نکات کاربردی برای تحول دیجیتال کسب‌وکار شما
                            </>
                        }
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto max-w-2xl"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-card-glass-border bg-card-glass backdrop-blur-xl">
                            <input
                                type="text"
                                placeholder="جستجو در مقالات..."
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                className="w-full bg-transparent px-6 py-4 pr-14 text-text-primary placeholder:text-text-muted outline-none"
                            />

                            <Iconify
                                faIcon="fa-magnifying-glass"
                                width={20}
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-text-accent"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="sticky top-20 z-40 border-y border-header-border bg-header-bg py-6 backdrop-blur-xl">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => {
                        const isActive = selectedCategory === category;

                        return (
                            <motion.button
                                key={category}
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category)}
                                className={
                                    isActive
                                        ? "rounded-full bg-gradient-primary px-6 py-2 text-sm text-text-on-brand shadow-lg shadow-header-shadow transition-all"
                                        : "rounded-full border border-header-border bg-nav-hover-bg px-6 py-2 text-sm text-text-secondary transition-all hover:bg-nav-hover-bg-strong hover:text-text-primary"
                                }
                            >
                                {category}
                            </motion.button>
                        );
                    })}
                </div>
            </section>

            {showFeaturedPosts && (
                <section className="bg-section-gradient section-padding">
                    <SectionHeader
                        icon="fa-arrow-trend-up"
                        headerLabel="مقالات برگزیده"
                        title="مقالات"
                        highlight="برگزیده"
                        description="مطالب منتخب و کاربردی برای یادگیری بهتر تحلیل داده و هوش تجاری"
                    />

                    <div className="grid gap-6 md:grid-cols-3">
                        {featuredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <motion.div
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className="group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-card-border bg-card-gradient shadow-xl transition-all hover:border-card-border-hover hover:shadow-2xl hover:shadow-header-shadow"
                                    >
                                        <div className="absolute left-4 top-4 z-20 flex items-center gap-1 rounded-full bg-gradient-orange px-3 py-1.5 text-xs font-semibold text-text-on-brand shadow-lg">
                                            <Iconify
                                                faIcon="fa-star"
                                                variant="solid"
                                                width={12}
                                                className="text-text-on-brand"
                                            />
                                            برگزیده
                                        </div>

                                        <div className="relative h-56 overflow-hidden">
                                            <CustomImage
                                                src={post.image}
                                                alt={post.title}
                                                quality={100}
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                                            <div
                                                className={`absolute right-4 top-4 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md ${categoryColors[post.category]}`}
                                            >
                                                {post.category}
                                            </div>

                                            <div className="absolute bottom-4 right-4 flex items-center gap-2">
                                                <img
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                    className="h-8 w-8 rounded-full border-2 border-white shadow-lg"
                                                />

                                                <span className="text-xs font-medium text-white drop-shadow-lg">
                                                    {post.author.name}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-text-primary transition-colors group-hover:text-text-accent">
                                                {post.title}
                                            </h3>

                                            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-xs text-text-secondary">
                                                    <div className="flex items-center gap-1">
                                                        <Iconify
                                                            faIcon="fa-calendar"
                                                            width={14}
                                                            className="text-text-muted"
                                                        />
                                                        {post.date}
                                                    </div>

                                                    <div className="flex items-center gap-1 rounded-lg bg-nav-hover-bg px-2 py-1 text-text-accent">
                                                        <Iconify
                                                            faIcon="fa-clock"
                                                            width={14}
                                                            className="text-text-accent"
                                                        />
                                                        {post.readTime}
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 text-sm font-semibold text-text-accent transition-all group-hover:gap-3">
                                                    بیشتر
                                                    <Iconify
                                                        faIcon="fa-arrow-left"
                                                        variant="light"
                                                        width={16}
                                                        className="text-text-accent transition-transform group-hover:-translate-x-1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </section>
            )}

            <section className="bg-section-gradient section-padding">
                <SectionHeader
                    title={selectedCategory === "همه" ? "همه" : "مقالات"}
                    highlight={selectedCategory === "همه" ? "مقالات" : selectedCategory}
                    description={
                        selectedCategory === "همه"
                            ? "تمام مطالب آموزشی و تحلیلی ایران بی‌آی در یک نگاه"
                            : `مطالب تخصصی مرتبط با دسته‌بندی ${selectedCategory}`
                    }
                />

                {filteredPosts.length === 0 ? (
                    <div className="py-20 text-center">
                        <p className="text-xl text-text-secondary">
                            مقاله‌ای یافت نشد 😔
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.01 }}
                                        className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-card-border bg-card-gradient transition-all hover:border-card-border-hover hover:shadow-xl hover:shadow-header-shadow"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <CustomImage
                                                src={post.image}
                                                alt={post.title}
                                                quality={100}
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                            <div
                                                className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm ${categoryColors[post.category]}`}
                                            >
                                                {post.category}
                                            </div>

                                            <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-lg border border-header-border bg-nav-hover-bg px-3 py-1 text-xs font-medium text-text-primary backdrop-blur-md">
                                                <Iconify
                                                    faIcon="fa-eye"
                                                    width={12}
                                                    className="text-text-accent"
                                                />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="mb-3 flex items-center gap-2">
                                                <img
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                    className="h-6 w-6 rounded-full"
                                                />

                                                <span className="text-xs text-text-secondary">
                                                    {post.author.name}
                                                </span>
                                            </div>

                                            <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-text-primary transition-colors group-hover:text-text-accent">
                                                {post.title}
                                            </h3>

                                            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between border-t border-header-border pt-4">
                                                <div className="flex items-center gap-1 text-xs text-text-secondary">
                                                    <Iconify
                                                        faIcon="fa-calendar"
                                                        width={14}
                                                        className="text-text-muted"
                                                    />
                                                    {post.date}
                                                </div>

                                                <div className="flex items-center gap-2 text-sm font-medium text-text-accent transition-all group-hover:gap-3">
                                                    مطالعه
                                                    <Iconify
                                                        faIcon="fa-arrow-left"
                                                        variant="light"
                                                        width={14}
                                                        className="text-text-accent transition-transform group-hover:-translate-x-1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                )}
            </section>
        </ContainerLayout>
    );
}