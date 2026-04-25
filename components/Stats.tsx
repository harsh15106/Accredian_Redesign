"use client";

import { useEffect, useRef, useState } from "react";

interface StatItemProps {
  endValue: number;
  suffix: string;
  label: string;
}

function StatItem({ endValue, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeOutExpo for smooth deceleration
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(easeProgress * endValue));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center space-y-2">
      <div className="text-4xl md:text-5xl font-medium text-[#FEBD14]">
        {count}{suffix}
      </div>
      <div className="text-base md:text-lg text-gray-300 font-medium tracking-wide text-center">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  const statsData = [
    { endValue: 10, suffix: "K+", label: "Professionals Trained" },
    { endValue: 200, suffix: "+", label: "Corporate Partners" },
    { endValue: 5, suffix: "K+", label: "Career Transitions" },
  ];

  return (
    <section id="stats" className="relative w-full py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-16 text-center space-y-3">
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-widest text-silver uppercase" 
            style={{ fontFamily: "var(--font-exo-2)" }}
          >
            Our <span className="text-[#FEBD14]">Track Record</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary">
            The Numbers Behind <span className="text-[#FEBD14]">Our Success</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 items-center justify-center">
          {statsData.map((stat, idx) => (
            <StatItem 
              key={idx} 
              endValue={stat.endValue} 
              suffix={stat.suffix} 
              label={stat.label} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
