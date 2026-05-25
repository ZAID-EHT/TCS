import { MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Location() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"]
  });
  
  // Subtle 3D tilt and pan on the abstract map element based on scroll
  const mapY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="py-section bg-surface-lowest border-t border-outline-variant">
      <div className="px-gutter md:max-w-7xl md:mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-3xl md:text-5xl text-primary uppercase mb-stack-md text-center mb-12"
        >
          Find Us
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-stretch">
          {/* Map Visual */}
          <div 
            ref={mapRef}
            className="w-full md:w-2/3 h-80 md:h-[400px] bg-surface-variant border border-outline-variant flex items-center justify-center relative overflow-hidden group"
          >
            {/* Moving Abstract Pattern */}
            <motion.div 
              style={{ y: mapY }}
              className="absolute inset-[-20%] opacity-20 bg-[radial-gradient(#1a1c1c_1.5px,transparent_1.5px)] [background-size:24px_24px]"
            />
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative z-10 flex flex-col items-center text-primary"
            >
              <MapPin className="w-12 h-12 mb-3 text-secondary" strokeWidth={1.5} />
              <div className="font-headline text-2xl uppercase bg-surface-lowest px-6 py-2 border border-primary shadow-sm">
                Dehiwala, Sri Lanka
              </div>
              <span className="font-mono text-xs tracking-widest mt-4 uppercase">
                Map Area
              </span>
            </motion.div>
          </div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex flex-col justify-center gap-8"
          >
            <div className="border-l-4 border-primary pl-5">
              <h3 className="font-mono text-xs tracking-widest text-on-surface-variant uppercase mb-2 font-medium">
                Address
              </h3>
              <p className="font-body text-lg text-primary uppercase leading-relaxed">
                11, S De S. Jayasinghe Mawatha,
                <br />
                Kalubowila, Dehiwala
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-5">
              <h3 className="font-mono text-xs tracking-widest text-on-surface-variant uppercase mb-2 font-medium">
                Phone
              </h3>
              <p className="font-headline text-3xl text-primary tracking-tight">
                +94 77 839 4394
              </p>
            </div>
            
            <div className="border-l-4 border-primary pl-5">
              <h3 className="font-mono text-xs tracking-widest text-on-surface-variant uppercase mb-2 font-medium">
                Email
              </h3>
              <p className="font-body text-lg text-primary">
                thecarstore77@gmail.com
              </p>
            </div>
            
            <div className="border-l-4 border-secondary pl-5">
              <h3 className="font-mono text-xs tracking-widest text-on-surface-variant uppercase mb-2 font-medium">
                Hours
              </h3>
              <p className="font-body text-lg text-primary uppercase">
                Mon - Sun: 08:00 - 22:00
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
