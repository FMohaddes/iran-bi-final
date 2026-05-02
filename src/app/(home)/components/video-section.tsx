"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {Iconify} from "@/_components/iconify";
import {SectionHeader} from "@/_components/common/section-header";

const videos = [
  {
    id: 1,
    title: "معرفی خدمات هوش تجاری",
    thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    duration: "3:45",
    description: "نگاهی جامع به خدمات و راهکارهای هوش تجاری ما",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    featured: true,
  },
  {
    id: 2,
    title: "نمونه داشبورد Power BI",
    thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    duration: "2:30",
    description: "نمایش یک داشبورد واقعی برای تحلیل فروش",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    featured: false,
  },
  {
    id: 3,
    title: "مدل‌سازی پیش‌بینی فروش",
    thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    duration: "4:15",
    description: "چگونه آینده فروش خود را پیش‌بینی کنیم",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    featured: false,
  },
  {
    id: 4,
    title: "بهینه‌سازی فرآیندهای کسب‌وکار",
    thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
    duration: "3:20",
    description: "کاهش هزینه‌ها و افزایش بهره‌وری",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    featured: false,
  },
];

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const featuredVideo = videos.find((video) => video.featured);
  const otherVideos = videos.filter((video) => !video.featured);
  const selectedVideo = videos.find((video) => video.id === activeVideo);

  return (
      <section id="videos" className="relative section-padding overflow-hidden ">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-1/2 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-1/2 h-96 bg-gradient-primary-hover opacity-10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <SectionHeader
              icon="fa-film"
              headerLabel="ویدیوهای آموزشی و معرفی"
              title="ببینید چطور"
              highlight="کار می‌کنیم"
              description="نمونه‌هایی از پروژه‌ها و راهکارهای واقعی هوش تجاری"
          />

          <div className=" mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 items-stretch">
              {featuredVideo && (
                  <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="lg:col-span-2 flex"
                  >
                    <button
                        type="button"
                        onClick={() => setActiveVideo(featuredVideo.id)}
                        className="group relative w-full h-full min-h-96 text-right rounded-2xl overflow-hidden cursor-pointer bg-card-gradient border border-card-border hover:border-card-border-hover transition-all flex flex-col"
                    >
                      <div className="relative flex-1 overflow-hidden">
                        <img
                            src={featuredVideo.thumbnail}
                            alt={featuredVideo.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-60 animate-pulse" />
                            <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                              <Iconify
                                  faIcon="fa-play"
                                  width={32}
                                  variant="solid"
                                  className="text-text-accent"
                              />
                            </div>
                          </div>
                        </motion.div>

                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-lg text-text-on-brand text-sm">
                          {featuredVideo.duration}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-text-primary">
                          {featuredVideo.title}
                        </h3>

                        <p className="text-text-secondary leading-relaxed">
                          {featuredVideo.description}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-text-accent">
                          <Iconify
                              faIcon="fa-circle-play"
                              width={20}
                              className="text-text-accent"
                          />
                          <span className="text-sm">مشاهده ویدیو</span>
                        </div>
                      </div>
                    </button>
                  </motion.div>
              )}

              <div className="lg:col-span-1 flex flex-col gap-4">
                {otherVideos.map((video, index) => (
                    <motion.button
                        key={video.id}
                        type="button"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: -5 }}
                        onClick={() => setActiveVideo(video.id)}
                        className="group relative w-full flex-1 min-h-[130px] text-right rounded-xl overflow-hidden cursor-pointer bg-card-gradient border border-card-border hover:border-card-border-hover transition-all"
                    >
                      <div className="flex gap-3 p-3 h-full">
                        <div className="relative w-32 h-full min-h-[96px] flex-shrink-0 rounded-lg overflow-hidden">
                          <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Iconify
                                faIcon="fa-play"
                                width={24}
                                variant="solid"
                                className="text-text-on-brand"
                            />
                          </div>

                          <div className="absolute bottom-1 right-1 px-2 py-0.5 bg-black/80 rounded text-text-on-brand text-xs">
                            {video.duration}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <h4 className="font-bold text-sm mb-1 line-clamp-2 text-text-primary">
                            {video.title}
                          </h4>

                          <p className="text-xs text-text-secondary line-clamp-2">
                            {video.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.05] transition-opacity pointer-events-none" />
                    </motion.button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {selectedVideo && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                onClick={() => setActiveVideo(null)}
            >
              <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative w-full max-w-5xl"
                  onClick={(event) => event.stopPropagation()}
              >
                <button
                    type="button"
                    onClick={() => setActiveVideo(null)}
                    className="absolute -top-12 left-0 text-text-on-brand hover:text-purple-400 transition-colors"
                >
                  <Iconify
                      faIcon="fa-xmark"
                      width={32}
                      className="text-text-on-brand hover:text-text-accent transition-colors"
                  />
                </button>

                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                      src={selectedVideo.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  />
                </div>

                <div className="mt-4 text-text-on-brand">
                  <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                  <p className="text-gray-300">{selectedVideo.description}</p>
                </div>
              </motion.div>
            </motion.div>
        )}
      </section>
  );
}