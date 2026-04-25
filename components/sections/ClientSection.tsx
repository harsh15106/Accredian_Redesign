import Image from "next/image";

export function ClientSection() {
  const clients = [
    { name: "ADP", src: "/logos/ADP.png" },
    { name: "Bayer", src: "/logos/BAYER.png" },
    { name: "CRIF", src: "/logos/CRIF.png" },
    { name: "HCL", src: "/logos/HCL.png" },
    { name: "IBM", src: "/logos/IBM.png" },
    { name: "Reliance", src: "/logos/Reliance.png" },
  ];

  return (
    <section id="clients" className="relative w-full py-16 md:py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center space-y-3">
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-widest text-silver uppercase" 
            style={{ fontFamily: "var(--font-exo-2)" }}
          >
            Our <span className="text-[#FEBD14]">Partnerships</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary">
            Successful collaborations with industry leaders
          </p>
        </div>

        {/* Logo Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-center">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className={`relative w-full h-[40px] md:h-[60px] ${client.name === "IBM" ? "scale-125 md:scale-150" : ""}`}>
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
