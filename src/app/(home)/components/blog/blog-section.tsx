"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { blogPosts, categoryColors } from "@/data/blogData";
import CustomImage from "@/_components/common/Image";
import {Iconify} from "@/_components/iconify";
import {SectionHeader} from "@/_components/common/section-header";

export function BlogSection() {
    const featuredPosts = blogPosts.filter((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured);

    return (
        <section id="blog" className="relative section-padding">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-1/2 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-1/2 h-96 bg-gradient-primary-hover opacity-10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                <SectionHeader
                    icon="fa-arrow-trend-up"
                    headerLabel="مقالات و آموزش‌های تخصصی"
                    title="وبلاگ ایران"
                    highlight="بی‌آی"
                    description="آخرین مقالات، آموزش‌ها و بینش‌های تخصصی در حوزه هوش تجاری و تحلیل داده"
                />

                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 mb-6"
                    >
                        <Iconify
                            faIcon="fa-star"
                            variant="solid"
                            width={20}
                            className="text-status-warning"
                        />
                        <h3 className="text-2xl text-text-primary font-bold">مقالات منتخب</h3>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {featuredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative rounded-2xl overflow-hidden transition-all bg-card-gradient border border-header-border hover:border-card-border-hover hover:shadow-xl hover:shadow-header-shadow">
                                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-status-warning/90 backdrop-blur-sm rounded-full">
                                        <Iconify
                                            faIcon="fa-star"
                                            variant="solid"
                                            width={10}
                                            className="text-text-on-brand"
                                        />
                                        <span className="text-text-on-brand text-xs font-semibold">منتخب</span>
                                    </div>

                                    <div className="relative h-48 overflow-hidden">
                                        <CustomImage
                                            src={post.image}
                                            alt={post.title}
                                            quality={100}
                                            className="object-cover"
                                        />

                                        <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs border ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>

                                            <div className="flex items-center gap-1 text-text-muted text-xs">
                                                <Iconify
                                                    faIcon="fa-calendar"
                                                    width={12}
                                                    className="text-text-muted"
                                                />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-lg text-text-primary mb-2 group-hover:text-text-accent transition-colors line-clamp-2 font-bold">
                                            {post.title}
                                        </h3>

                                        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-header-border">
                                            <div className="flex items-center gap-1 text-text-muted text-xs">
                                                <Iconify
                                                    faIcon="fa-clock"
                                                    width={12}
                                                    className="text-text-muted"
                                                />
                                                <span>{post.readTime}</span>
                                            </div>

                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="flex items-center gap-2 text-text-accent text-sm hover:gap-3 transition-all group/btn"
                                            >
                                                <span>مطالعه</span>
                                                <Iconify
                                                    faIcon="fa-arrow-left"
                                                    width={12}
                                                    className="text-text-accent"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl text-text-primary mb-6 font-bold"
                    >
                        آخرین مقالات
                    </motion.h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {regularPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative rounded-xl overflow-hidden border border-header-border hover:border-card-border-hover transition-all h-full bg-card-gradient">
                                    <div className="relative h-40 overflow-hidden">
                                        <CustomImage
                                            src={post.image}
                                            alt={post.title}
                                            quality={100}
                                            className="object-cover"
                                        />

                                        <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                    </div>

                                    <div className="p-5">
                                        <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs border ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>

                                            <div className="flex items-center gap-1 text-text-muted text-xs">
                                                <Iconify
                                                    faIcon="fa-calendar"
                                                    width={12}
                                                    className="text-text-muted"
                                                />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-base text-text-primary mb-2 group-hover:text-text-accent transition-colors line-clamp-2 font-bold">
                                            {post.title}
                                        </h3>

                                        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-3 border-t border-header-border">
                                            <div className="flex items-center gap-1 text-text-muted text-xs">
                                                <Iconify
                                                    faIcon="fa-clock"
                                                    width={12}
                                                    className="text-text-muted"
                                                />
                                                <span>{post.readTime}</span>
                                            </div>

                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="flex items-center gap-2 text-text-accent text-sm hover:gap-3 transition-all"
                                            >
                                                <span>ادامه</span>
                                                <Iconify
                                                    faIcon="fa-arrow-left"
                                                    width={12}
                                                    className="text-text-accent"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-6"
                >
                    <Link
                        href="/blog"
                        className="inline-block px-8 py-4 bg-gradient-primary text-text-on-brand rounded-xl hover:shadow-xl hover:shadow-header-shadow transition-all"
                    >
                        مشاهده تمام مقالات
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}