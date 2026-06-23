import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ScrollTicker } from "@/components/sections/scroll-ticker";
import { ProofStats } from "@/components/sections/proof-stats";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Comparison } from "@/components/sections/comparison";
import { ContentFormats } from "@/components/sections/content-formats";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollTicker />
        <ProofStats />
        <HowItWorks />
        <Comparison />
        <ContentFormats />
        <Pricing />
        <Process />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
