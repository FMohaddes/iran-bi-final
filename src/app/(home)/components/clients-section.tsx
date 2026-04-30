"use client";

import { motion } from "motion/react";
import {CaseStudiesSection} from "@/app/(home)/components/case-studies-section";

const clients = [
  { name: "ایران‌خودرو", logo: "🚗" },
  { name: "پارس‌آنلاین", logo: "📱" },
  { name: "ATI", logo: "🏢" },
  { name: "تولیدی", logo: "🏭" },
  { name: "Fanoosh", logo: "🌟" },
  { name: "شفا", logo: "💊" },
  { name: "بیمه‌دی", logo: "🛡️" },
  { name: "ایران‌سل", logo: "📞" },
];

export function ClientsSection() {
  return (
      <section className="relative">
        <div >
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 font-bold text-text-primary">
              مشتریان ما
            </h2>

            <p className="text-text-secondary">همکاران و سازمان‌ها</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {clients.map((client, index) => (
                <motion.div
                    key={client.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="group"
                >
                  <div className="aspect-square bg-foreground border border-header-border rounded-2xl flex items-center justify-center cursor-pointer hover:border-card-border-hover hover:shadow-2xl hover:shadow-header-shadow transition-all">
                    <div className="text-center">
                      <div className="text-5xl mb-2 grayscale group-hover:grayscale-0 transition-all">
                        {client.logo}
                      </div>

                      <div className="text-text-secondary text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {client.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}