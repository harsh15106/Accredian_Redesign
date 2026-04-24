"use client";

import { Card } from "./ui/Card";
import { Database, ShieldCheck, Zap, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "High-Speed Analytics",
    description: "Process billions of rows in milliseconds with our custom-built distributed engine.",
    icon: <Zap className="w-8 h-8 text-silver mb-4" />
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with SOC2, GDPR, and HIPAA standards.",
    icon: <ShieldCheck className="w-8 h-8 text-silver mb-4" />
  },
  {
    title: "Seamless Integration",
    description: "Connect to your existing data warehouses and pipelines with zero downtime.",
    icon: <Database className="w-8 h-8 text-silver mb-4" />
  },
  {
    title: "Predictive Insights",
    description: "Leverage AI-driven models to forecast trends and optimize operations.",
    icon: <LineChart className="w-8 h-8 text-silver mb-4" />
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 px-6 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Everything you need to scale your data infrastructure and drive actionable intelligence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Card className="flex flex-col items-start h-full">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mt-2">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
