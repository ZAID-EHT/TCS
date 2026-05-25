import { motion } from "motion/react";
import { Expertise } from "../components/Expertise";

export function ExpertisePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="text-center max-w-3xl mx-auto px-gutter mb-12">
        <h1 className="font-headline text-5xl md:text-7xl uppercase text-primary mb-6">
          Our Services
        </h1>
        <p className="font-body text-xl text-on-surface-variant leading-relaxed">
          Explore our range of premium automotive detailing services, designed for those who accept nothing less than perfection.
        </p>
      </div>

      <Expertise />
    </motion.div>
  );
}
