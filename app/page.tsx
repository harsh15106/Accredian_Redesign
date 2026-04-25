"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ClientSection } from "@/components/ClientSection";
import { EdgeSection } from "@/components/EdgeSection";
import { Features } from "@/components/Features";
import { CourseSegmentation } from "@/components/CourseSegmentation";
import { WhoShouldJoin } from "@/components/WhoShouldJoin";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { LeadCapture } from "@/components/LeadCapture";

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
              className="flex flex-col min-h-screen"
            >
              <Hero />
              <Stats />
              <ClientSection />
              <EdgeSection />
              <Features />
              <CourseSegmentation />
              <WhoShouldJoin />
              <Benefits />
              <Testimonials />
              <LeadCapture />
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </main>
  );
}
