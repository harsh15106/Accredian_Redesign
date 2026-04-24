"use client";

import { Card } from "./ui/Card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Accredian completely revolutionized how we process our user data. We went from days of batch processing to real-time insights.",
    author: "Sarah Jenkins",
    role: "CTO, TechNova",
  },
  {
    quote: "The security features and compliance out-of-the-box saved our engineering team months of development time. Highly recommended.",
    author: "Michael Chang",
    role: "VP Engineering, SecureFin",
  },
  {
    quote: "Customer support is unparalleled. They truly act as an extension of our internal data team, helping us scale efficiently.",
    author: "Elena Rodriguez",
    role: "Director of Data, GlobalRetail",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            See what our enterprise partners have to say about scaling with Accredian.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="h-full"
            >
              <Card className="flex flex-col justify-between h-full">
                <p className="text-text-primary italic mb-6">"{test.quote}"</p>
                <div>
                  <h4 className="font-semibold">{test.author}</h4>
                  <p className="text-sm text-text-secondary">{test.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
