import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import NotdienstBanner from "@/components/NotdienstBanner";
import WhyUs from "@/components/WhyUs";
import AboutSection from "@/components/AboutSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const ContactSection = dynamic(() => import("@/components/ContactSection"));

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimateOnScroll>
        <ServicesGrid />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <NotdienstBanner />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhyUs />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AboutSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>
    </>
  );
}
