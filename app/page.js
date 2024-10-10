import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WithWithout from '@/components/WithWithout';
import FeaturesGrid from '@/components/FeaturesGrid';
import Testimonial1Small from '@/components/Testimonial1Small';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesAccordion/>
        <WithWithout/>
        <Testimonial1Small/>
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}