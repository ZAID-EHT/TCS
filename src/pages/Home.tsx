import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Estimator } from "../components/Estimator";
import { Expertise } from "../components/Expertise";
import { Location } from "../components/Location";
import { Footer } from "../components/Footer";
import { Showcase3D } from "../components/Showcase3D";
import { motion } from "motion/react";

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Showcase3D />
      <Estimator />
      <Expertise />
      <Location />
    </motion.div>
  );
}
