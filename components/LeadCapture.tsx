"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { motion } from "framer-motion";

export function LeadCapture() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit form");
      
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 px-6 bg-secondary border-t border-silver/10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Transform?</h2>
        <p className="text-text-secondary mb-8">
          Join leading enterprises and start your data journey today.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input 
            name="name" 
            placeholder="Full Name" 
            required 
            className="flex-1"
          />
          <Input 
            type="email" 
            name="email" 
            placeholder="Work Email" 
            required 
            className="flex-1"
          />
          <Button type="submit" disabled={loading} className="w-full sm:w-auto h-12">
            {loading ? "Submitting..." : "Get Access"}
          </Button>
        </form>
        
        {success && <p className="text-green-400 mt-4 text-sm">Thank you! We'll be in touch shortly.</p>}
        {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}
      </motion.div>
    </section>
  );
}
