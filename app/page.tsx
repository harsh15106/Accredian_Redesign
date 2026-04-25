"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { LoadingScreen } from "@/components/animations/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ClientSection } from "@/components/sections/ClientSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { EdgeSection } from "@/components/sections/EdgeSection";
import { Features } from "@/components/sections/Features";
import { CourseSegmentation } from "@/components/sections/CourseSegmentation";
import { WhoShouldJoin } from "@/components/sections/WhoShouldJoin";
import { CATFramework } from "@/components/sections/CATFramework";
import { DeliveryResults } from "@/components/sections/DeliveryResults";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen bg-primary">
      <LayoutGroup>
        <AnimatePresence>
          {!loadingComplete && (
            <LoadingScreen key="loader" onComplete={() => setLoadingComplete(true)} />
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {loadingComplete && (
            <motion.div
              key="content"
              className="flex flex-col"
            >
              <Hero />
              <Stats />
              <ClientSection />
              <EdgeSection />
              <Features />
              <CourseSegmentation />
              <WhoShouldJoin />
              <CATFramework />
              <DeliveryResults />
              <FAQSection />
              <Testimonials />
              <CTABanner />
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </main>
  );
}
