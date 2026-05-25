import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 3D Parallax and scale effects based on scroll
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] bg-primary flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y: yImage, scale: scaleImage }}
      >
        <video
          src="/car_detail.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>
      <motion.div 
        className="relative z-10 text-center px-gutter max-w-4xl mx-auto flex flex-col items-center"
        style={{ y: yText, opacity: opacityText }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-headline text-5xl md:text-8xl text-on-primary uppercase mb-6 tracking-tight drop-shadow-lg"
        >
          Your One-Stop Shop For Car Perfection
        </motion.h1>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary text-on-primary font-headline text-xl px-8 py-4 uppercase tracking-widest hover:bg-secondary-container transition-colors duration-300"
        >
          Book an Appointment
        </motion.button>
      </motion.div>
    </section>
  );
}
