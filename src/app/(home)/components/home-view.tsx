"use client"

import {HeroSection} from "@/app/(home)/components/hero-section";
import ContainerLayout from "@/_components/common/layout/container-layout";
import {IndustrySolutions} from "@/app/(home)/components/industry-solutions";
import {ServicesSection} from "@/app/(home)/components/services-section";
import {ProcessSection} from "@/app/(home)/components/process-section";
import {VideoSection} from "@/app/(home)/components/video-section";
import {CaseStudiesSection} from "@/app/(home)/components/case-studies-section";
import {WhyUsSection} from "@/app/(home)/components/why-us-section";
import {BlogSection} from "@/app/(home)/components/blog/blog-section";
import {ClientsSection} from "@/app/(home)/components/clients-section";
import {FAQSection} from "@/app/(home)/components/FAQ-section";
import {ContactSection} from "@/app/(home)/components/contact-section";
import {SEOContentSection} from "@/app/(home)/components/SEO-content-section";

export default function HomeView() {
    return (

        <ContainerLayout >
            <HeroSection/>
            <IndustrySolutions/>
            <ServicesSection/>
            <ProcessSection/>
            <VideoSection/>
            <CaseStudiesSection/>
            <WhyUsSection/>
            <BlogSection/>
            <ClientsSection/>
            <FAQSection />
            <ContactSection />
            <SEOContentSection />

        </ContainerLayout >
    );
}
