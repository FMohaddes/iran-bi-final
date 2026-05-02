"use client";

import {useEffect} from "react";
import {useParams, useRouter} from "next/navigation";
import Link from "next/link";
import {motion} from "motion/react";

import {blogPosts, categoryColors, getBlogBySlug, getRelatedPosts} from "@/data/blogData";
import {Iconify} from "@/_components/iconify";
import CustomImage from "@/_components/common/Image";
import ContainerLayout from "@/_components/common/layout/container-layout";
import {PostContent} from "@/app/(general)/blog/components/post-content";

export function PostView() {
    const params = useParams<{ slug: string }>();
    const router = useRouter();

    const rawSlug = params?.slug;

    const slug = Array.isArray(rawSlug)
        ? rawSlug[0]
        : rawSlug;

    const decodedSlug = slug ? decodeURIComponent(slug) : undefined;

    const post = decodedSlug
        ? blogPosts.find((item) => item.slug === decodedSlug)
        : undefined;

    const relatedPosts = post ? getRelatedPosts(post.id, post.category, 4) : [];

    const recommendedPosts = post
        ? blogPosts
            .filter((item) => item.id !== post.id && item.category !== post.category)
            .slice(0, 5)
        : [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <ContainerLayout >
                <section className = "flex min-h-screen items-center justify-center bg-section-gradient" >
                    <div className = "text-center" >
                        <h1 className = "mb-4 text-4xl font-bold text-text-primary" >
                            مقاله یافت نشد 😔
                        </h1 >

                        <Link href = "/blog" className = "text-text-accent hover:underline" >
                            بازگشت به لیست مقالات
                        </Link >
                    </div >
                </section >
            </ContainerLayout >
        );
    }

    const tableOfContents = post.content
        .split("\n")
        .filter((line) => line.startsWith("## "))
        .map((line, index) => ({
            id: `section-${index}`,
            title: line.replace("## ", "").trim(),
        }));

    return (
        <ContainerLayout >
            <section className = "relative overflow-hidden bg-section-gradient section-padding" >
                <div className = "relative z-10 mt-4" >
                    <motion.button
                        initial = {{opacity: 0, x: 20}}
                        animate = {{opacity: 1, x: 0}}
                        type = "button"
                        onClick = {() => router.push("/blog")}
                        className = "mb-8 flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-accent"
                    >
                        <Iconify faIcon = "fa-arrow-right" width = {16} />
                        بازگشت به لیست مقالات
                    </motion.button >

                    <div className = "mx-auto max-w-5xl" >
                        <motion.div
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            className = "mb-6"
                        >
                            <span
                                className = {`inline-block rounded-full border px-4 py-2 text-sm ${categoryColors[post.category]}`}
                            >
                                {post.category}
                            </span >
                        </motion.div >

                        <motion.h1
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 0.1}}
                            className = "mb-6 text-3xl font-bold leading-tight text-text-primary md:text-5xl"
                        >
                            {post.title}
                        </motion.h1 >

                        <motion.div
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 0.2}}
                            className = "mb-8 flex flex-wrap items-center gap-6"
                        >
                            <div className = "flex items-center gap-3" >
                                <img
                                    src = {post.author.avatar}
                                    alt = {post.author.name}
                                    className = "h-12 w-12 rounded-full"
                                />

                                <div >
                                    <div className = "text-sm text-text-primary" >
                                        {post.author.name}
                                    </div >

                                    <div className = "text-xs text-text-secondary" >
                                        {post.author.bio}
                                    </div >
                                </div >
                            </div >

                            <div className = "flex items-center gap-4 text-sm text-text-secondary" >
                                <div className = "flex items-center gap-1" >
                                    <Iconify faIcon = "fa-calendar" width = {16} />
                                    {post.date}
                                </div >

                                <div className = "flex items-center gap-1" >
                                    <Iconify faIcon = "fa-clock" width = {16} />
                                    {post.readTime}
                                </div >
                            </div >
                        </motion.div >

                        <motion.div
                            initial = {{opacity: 0, y: 30}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{delay: 0.3}}
                            className = "mb-12 overflow-hidden rounded-2xl"
                        >
                            <div className = "relative h-[400px]" >
                                <CustomImage
                                    src = {post.image}
                                    alt = {post.title}
                                    quality = {100}
                                    className = "object-cover"
                                />
                            </div >
                        </motion.div >
                    </div >
                </div >
            </section >

            <section className = "bg-section-gradient pb-20" >
                <div className = "grid gap-8 lg:grid-cols-12" >
                    <motion.div
                        initial = {{opacity: 0, y: 20}}
                        animate = {{opacity: 1, y: 0}}
                        transition = {{delay: 0.4}}
                        className = "lg:col-span-8"
                    >
                        <div
                            className = "overflow-hidden rounded-2xl border border-card-glass-border bg-card-glass backdrop-blur-xl" >
                            {tableOfContents.length > 0 && (
                                <div className = "border-b border-header-border p-8" >
                                    <div className = "mb-4 flex items-center gap-3" >
                                        <Iconify
                                            faIcon = "fa-book-open"
                                            width = {24}
                                            className = "text-text-accent"
                                        />

                                        <h3 className = "text-xl font-semibold text-text-primary" >
                                            فهرست مطالب
                                        </h3 >
                                    </div >

                                    <div className = "space-y-2" >
                                        {tableOfContents.map((item, index) => (
                                            <a
                                                key = {item.id}
                                                href = {`#${item.id}`}
                                                className = "group flex items-start gap-3 rounded-lg px-4 py-2 text-text-secondary transition-all hover:bg-nav-hover-bg hover:text-text-accent"
                                            >
                                                <span className = "min-w-6 font-semibold text-text-accent" >
                                                    {index + 1}
                                                </span >

                                                <span className = "flex-1" >{item.title}</span >

                                                <Iconify
                                                    faIcon = "fa-chevron-left"
                                                    width = {16}
                                                    className = "opacity-0 transition-opacity group-hover:opacity-100"
                                                />
                                            </a >
                                        ))}
                                    </div >
                                </div >
                            )}

                            <div className = "p-8 md:p-12" >
                                <PostContent content = {post.content} />

                                <div className = "mt-12 border-t border-header-border pt-8" >
                                    <div className = "mb-4 flex items-center gap-3" >
                                        <Iconify
                                            faIcon = "fa-tag"
                                            width = {20}
                                            className = "text-text-accent"
                                        />

                                        <h3 className = "text-lg text-text-primary" >برچسب‌ها</h3 >
                                    </div >

                                    <div className = "flex flex-wrap gap-2" >
                                        {post.tags.map((tag) => (
                                            <span
                                                key = {tag}
                                                className = "rounded-lg border border-header-border bg-nav-hover-bg px-4 py-2 text-sm text-text-accent"
                                            >
                                                #{tag}
                                            </span >
                                        ))}
                                    </div >
                                </div >

                                <div className = "mt-8 border-t border-header-border pt-8" >
                                    <div className = "mb-4 flex items-center gap-3" >
                                        <Iconify
                                            faIcon = "fa-share-nodes"
                                            width = {20}
                                            className = "text-text-accent"
                                        />

                                        <h3 className = "text-lg text-text-primary" >
                                            اشتراک‌گذاری
                                        </h3 >
                                    </div >

                                    <div className = "flex gap-3" >
                                        {["fa-facebook-f", "fa-twitter", "fa-linkedin-in"].map(
                                            (icon) => (
                                                <motion.button
                                                    key = {icon}
                                                    type = "button"
                                                    whileHover = {{scale: 1.05}}
                                                    whileTap = {{scale: 0.95}}
                                                    className = "rounded-lg bg-gradient-primary p-3 text-text-on-brand transition-all hover:shadow-xl hover:shadow-header-shadow"
                                                >
                                                    <Iconify
                                                        faIcon = {icon}
                                                        width = {20}
                                                        className = "text-text-on-brand"
                                                    />
                                                </motion.button >
                                            )
                                        )}
                                    </div >
                                </div >
                            </div >
                        </div >

                        <motion.div
                            initial = {{opacity: 0, y: 20}}
                            whileInView = {{opacity: 1, y: 0}}
                            viewport = {{once: true}}
                            className = "mt-8 rounded-2xl border border-card-glass-border bg-card-glass p-8 backdrop-blur-xl"
                        >
                            <div className = "mb-4 flex items-center gap-3" >
                                <Iconify
                                    faIcon = "fa-user"
                                    width = {24}
                                    className = "text-text-accent"
                                />

                                <h3 className = "text-xl font-semibold text-text-primary" >
                                    درباره نویسنده
                                </h3 >
                            </div >

                            <div className = "flex items-start gap-4" >
                                <img
                                    src = {post.author.avatar}
                                    alt = {post.author.name}
                                    className = "h-20 w-20 rounded-full"
                                />

                                <div className = "flex-1" >
                                    <div className = "mb-2 text-lg text-text-primary" >
                                        {post.author.name}
                                    </div >

                                    <div className = "text-sm text-text-secondary" >
                                        {post.author.bio}
                                    </div >
                                </div >
                            </div >
                        </motion.div >
                    </motion.div >

                    <motion.aside
                        initial = {{opacity: 0, x: -20}}
                        animate = {{opacity: 1, x: 0}}
                        transition = {{delay: 0.5}}
                        className = "lg:col-span-4"
                    >
                        <div className = "sticky top-24 space-y-6" >
                            <div
                                className = "rounded-2xl border border-card-glass-border bg-card-glass p-6 backdrop-blur-xl" >
                                <div className = "mb-6 flex items-center gap-3" >
                                    <Iconify
                                        faIcon = "fa-arrow-trend-up"
                                        width = {24}
                                        className = "text-text-accent"
                                    />

                                    <h3 className = "text-xl font-semibold text-text-primary" >
                                        مقالات پیشنهادی
                                    </h3 >
                                </div >

                                <div className = "space-y-4" >
                                    {recommendedPosts.map((recommended, index) => (
                                        <Link
                                            key = {recommended.id}
                                            href = {`/blog/${recommended.slug}`}
                                        >
                                            <motion.div
                                                initial = {{opacity: 0, y: 10}}
                                                animate = {{opacity: 1, y: 0}}
                                                transition = {{delay: 0.6 + index * 0.1}}
                                                whileHover = {{x: 5}}
                                                className = "group cursor-pointer rounded-xl border border-transparent p-4 transition-all hover:border-header-border hover:bg-nav-hover-bg"
                                            >
                                                <div className = "flex gap-3" >
                                                    <div
                                                        className = "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg" >
                                                        <CustomImage
                                                            src = {recommended.image}
                                                            alt = {recommended.title}
                                                            quality = {100}
                                                            className = "object-cover transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                    </div >

                                                    <div className = "min-w-0 flex-1" >
                                                        <span
                                                            className = {`mb-2 inline-block rounded px-2 py-1 text-xs ${categoryColors[recommended.category]}`}
                                                        >
                                                            {recommended.category}
                                                        </span >

                                                        <h4 className = "mb-2 line-clamp-2 text-sm text-text-primary transition-colors group-hover:text-text-accent" >
                                                            {recommended.title}
                                                        </h4 >

                                                        <div
                                                            className = "flex items-center gap-2 text-xs text-text-secondary" >
                                                            <Iconify faIcon = "fa-clock" width = {12} />
                                                            {recommended.readTime}
                                                        </div >
                                                    </div >
                                                </div >
                                            </motion.div >
                                        </Link >
                                    ))}
                                </div >
                            </div >

                            <div className = "rounded-2xl bg-gradient-primary p-6 text-text-on-brand" >
                                <h3 className = "mb-3 text-xl font-semibold" >
                                    نیاز به مشاوره دارید؟
                                </h3 >

                                <p className = "mb-4 text-sm text-text-on-brand/90" >
                                    تیم ما آماده است تا به شما در پیاده‌سازی راهکارهای BI کمک کند.
                                </p >

                                <Link href = "/consultation" >
                                    <motion.button
                                        type = "button"
                                        whileHover = {{scale: 1.05}}
                                        whileTap = {{scale: 0.95}}
                                        className = "w-full rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all hover:shadow-xl"
                                    >
                                        دریافت مشاوره رایگان
                                    </motion.button >
                                </Link >
                            </div >
                        </div >
                    </motion.aside >
                </div >
            </section >

            {relatedPosts.length > 0 && (
                <section className = "bg-section-gradient section-padding" >
                    <h2 className = "mb-8 text-3xl font-bold text-text-primary" >
                        مقالات مرتبط
                    </h2 >

                    <div className = "grid gap-6 md:grid-cols-2 lg:grid-cols-4" >
                        {relatedPosts.map((relatedPost, index) => (
                            <motion.div
                                key = {relatedPost.id}
                                initial = {{opacity: 0, y: 30}}
                                whileInView = {{opacity: 1, y: 0}}
                                viewport = {{once: true}}
                                transition = {{delay: index * 0.1}}
                            >
                                <Link href = {`/blog/${relatedPost.slug}`} >
                                    <motion.div
                                        whileHover = {{y: -10}}
                                        className = "group h-full cursor-pointer overflow-hidden rounded-2xl border border-card-border bg-card-gradient transition-all hover:border-card-border-hover hover:shadow-xl hover:shadow-header-shadow"
                                    >
                                        <div className = "relative h-40 overflow-hidden" >
                                            <CustomImage
                                                src = {relatedPost.image}
                                                alt = {relatedPost.title}
                                                quality = {100}
                                                className = "object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div >

                                        <div className = "p-4" >
                                            <h3 className = "mb-2 line-clamp-2 text-sm text-text-primary" >
                                                {relatedPost.title}
                                            </h3 >

                                            <div
                                                className = "flex items-center gap-2 text-xs text-text-secondary" >
                                                <Iconify faIcon = "fa-clock" width = {12} />
                                                {relatedPost.readTime}
                                            </div >
                                        </div >
                                    </motion.div >
                                </Link >
                            </motion.div >
                        ))}
                    </div >
                </section >
            )}
        </ContainerLayout >
    );
}