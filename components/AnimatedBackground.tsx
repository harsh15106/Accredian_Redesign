"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
  isAmber: boolean;
}

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let isVisible = true;
    let mouseX = -1000;
    let mouseY = -1000;
    let isHovering = false;

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    // Mouse Tracking (Global to catch movements over Hero content)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      // Check if mouse is within the Hero section bounds
      if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Initialize Particles
    const initParticles = () => {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 35 : 80;
      particles = [];

      for (let i = 0; i < count; i++) {
        const isAmber = Math.random() > 0.7; // 30% amber
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6, // [-0.3, 0.3] range
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.5 + 1, // 1px to 2.5px
          color: isAmber ? "212, 165, 50" : "255, 255, 255",
          opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
          isAmber,
        });
      }
    };

    // Handle Resize
    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles();
    };

    window.addEventListener("resize", resize);
    resize(); // Initial sizing

    // Render Loop
    const draw = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update positions and interactions
        particles.forEach((p) => {
          // Repulsion
          if (isHovering && window.innerWidth >= 768) {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100 && dist > 0) {
              p.vx += (dx / dist) * 0.8;
              p.vy += (dy / dist) * 0.8;
            }
          }

          // Damping to normalize velocity
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > 0.4) {
            p.vx *= 0.95;
            p.vy *= 0.95;
          }

          p.x += p.vx;
          p.y += p.vy;

          // Edge Bounce
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        });

        // Draw connecting lines
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
              ctx.beginPath();
              const opacity = (1 - dist / 120) * 0.12;
              const isAmberConnection = p1.isAmber || p2.isAmber;
              ctx.strokeStyle = isAmberConnection 
                ? `rgba(212, 165, 50, ${opacity})`
                : `rgba(255, 255, 255, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        // Draw particles
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none" 
    >
      {/* Layer 0: Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />
    </div>
  );
}
