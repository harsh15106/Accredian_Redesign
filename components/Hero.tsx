import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto text-center z-10 relative">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-light to-silver-dark text-glow">Enterprise</span> Data
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
          Unlock unprecedented growth with Accredian's advanced analytics and strategic insights tailored for global enterprises.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="w-full sm:w-auto h-12 px-8 text-lg">Start Free Trial</Button>
          <Button variant="outline" className="w-full sm:w-auto h-12 px-8 text-lg">Book a Demo</Button>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-silver/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
}
