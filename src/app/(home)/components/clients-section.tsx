"use client";

import { motion } from "motion/react";
import {SectionHeader} from "@/_components/common/section-header";

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
      <section className="relative section-padding">
        <div >
          <SectionHeader
              title="مشتریان ما"
              highlight=""
              description="همکاران و سازمان‌ها"
          />

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