"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Reduce infrastructure costs by up to 40%",
  "Deploy models 10x faster than industry average",
  "Automate compliance reporting and auditing",
  "Real-time anomaly detection and alerting",
  "Dedicated 24/7 enterprise support team",
  "Zero-trust security architecture by default"
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 px-6 bg-secondary/50 border-y border-silver/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Accredian?</h2>
          <p className="text-lg text-text-secondary mb-8">
            We don't just provide software; we partner with you to transform your organization into a data-driven powerhouse. Experience the difference of true enterprise-grade architecture.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-silver shrink-0" />
                <span className="text-sm text-text-primary">{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Abstract representation of a dashboard/UI */}
          <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-secondary border border-silver/20 p-6 shadow-2xl relative overflow-hidden flex flex-col gap-4">
            <div className="h-8 w-1/3 bg-silver/10 rounded-md"></div>
            <div className="flex gap-4">
              <div className="flex-1 h-24 bg-silver/5 rounded-xl border border-silver/10"></div>
              <div className="flex-1 h-24 bg-silver/5 rounded-xl border border-silver/10"></div>
            </div>
            <div className="flex-1 w-full bg-silver/5 rounded-xl border border-silver/10 mt-2"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-silver/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
