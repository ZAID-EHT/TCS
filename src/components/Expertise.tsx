import { motion } from "motion/react";
import { Paintbrush, Shield, Layers, Sun, Speaker, Sparkles, ArrowRight } from "lucide-react";

const EXPERTISE = [
  {
    title: "Nano Coating",
    subtitle: "Ceramic Protection",
    icon: Paintbrush,
  },
  {
    title: "PPF",
    subtitle: "Paint Protection Film",
    icon: Shield,
  },
  {
    title: "Car Wrap",
    subtitle: "Vinyl Transformation",
    icon: Layers,
  },
  {
    title: "Window Tint",
    subtitle: "UV & Heat Rejection",
    icon: Sun,
  },
  {
    title: "Car Audio",
    subtitle: "Premium Sound Systems",
    icon: Speaker,
  },
  {
    title: "Detailing",
    subtitle: "Interior & Exterior Wash",
    icon: Sparkles,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export function Expertise() {
  return (
    <section className="py-section px-gutter md:max-w-7xl md:mx-auto mb-20">
      <div className="mb-stack-md flex justify-between items-end border-b-2 border-primary pb-4">
        <h2 className="font-headline text-3xl md:text-5xl text-primary uppercase">
          Our Expertise
        </h2>
        <a
          className="font-mono text-xs tracking-widest text-secondary hover:underline uppercase flex items-center gap-1 font-medium group"
          href="#"
        >
          View All 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
      >
        {EXPERTISE.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="border border-outline-variant p-8 bg-surface-lowest flex flex-col items-center text-center gap-6 cursor-pointer group hover:border-primary transition-colors duration-300 shadow-sm"
            >
              <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Icon className="w-8 h-8 text-primary group-hover:text-on-primary transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-headline text-2xl text-primary uppercase mb-2">
                  {item.title}
                </h3>
                <p className="font-mono text-xs tracking-widest text-on-surface-variant uppercase">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
