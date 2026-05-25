import { motion } from "motion/react";
import { Estimator } from "../components/Estimator";

export function EstimatePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="text-center max-w-3xl mx-auto px-gutter mb-4">
        <h1 className="font-headline text-5xl md:text-7xl uppercase text-primary mb-6">
          Service Quote
        </h1>
        <p className="font-body text-xl text-on-surface-variant leading-relaxed">
          Select your vehicle specs and desired services to get an instant estimate.
        </p>
      </div>

      <Estimator />
    </motion.div>
  );
}
