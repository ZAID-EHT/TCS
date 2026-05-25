import { motion } from "motion/react";
import { Award, Target, Users } from "lucide-react";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-section px-gutter max-w-7xl mx-auto"
    >
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline text-5xl md:text-7xl uppercase text-primary mb-6"
        >
          About The Car Store
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-xl text-on-surface-variant leading-relaxed"
        >
          We are not just a detailing center; we are an elite automotive spa dedicated to preserving and enhancing the absolute perfection of your vehicle. 
          With precision engineering and an obsessive attention to detail, we ensure every car leaves exceptional.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[ 
          {
            icon: Target,
            title: "Precision Focus",
            text: "Every millimeter of your vehicle is treated with surgical precision, leaving zero room for imperfection."
          },
          {
            icon: Award,
            title: "Master Detailers",
            text: "Our team consists of certified master craftsmen who treat every project as a unique work of art."
          },
          {
            icon: Users,
            title: "Trusted by Enthusiasts",
            text: "From exotic supercars to cherished daily drivers, we are the trusted choice for those who demand the best."
          }
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="border border-outline-variant p-8 bg-surface text-center flex flex-col items-center hover:border-primary transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-surface-highest flex items-center justify-center mb-6 text-primary">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl uppercase text-primary mb-4">{item.title}</h3>
              <p className="font-body text-on-surface-variant">{item.text}</p>
            </motion.div>
          )
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.img 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Xg0ZQeDXXgu-ZsuLxvc1_F8jlJG63fIx2dTdZXFaHbksUhMd0sqG1eiJlfLS1UKHDaLvgs5scyos5ZtUIJIn_p0e_-kAh__-RcS20p6Zf2LUkEopLhX6_k6yhm3v1EMzF44N9QQn3eUn7u-irjXGxYcxpR4LCM2XwcMND0dgPgIr1mj-e2FykICyPO-26jXUvmx7PNlbIDPS7v9uk_0fcne0DewXps1ORvlVUUvq5Qz71-FxDkkhwILgjScWKuvLKV8x4McNJ8PE"
          alt="Our Workshop" 
          className="w-full h-auto object-cover border border-outline-variant cursor-pointer grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div>
          <h2 className="font-headline text-4xl uppercase text-primary mb-6">Our Philosophy</h2>
          <div className="space-y-6 font-body text-on-surface-variant text-lg">
            <p>
              Born from a passion for automotive excellence in Sri Lanka, The Car Store was established with a singular vision: 
              Refinement without compromise. 
            </p>
            <p>
              We believe that detailing is a science as much as it is an art. Utilizing the finest ceramic coatings, 
              paint protection films, and cutting-edge correction techniques, we protect your investment while elevating its aesthetic appeal.
            </p>
            <p className="font-mono text-xs tracking-widest text-primary uppercase border-l-4 border-secondary pl-4 py-2 mt-8">
              "Excellence is not an act, but a habit." - The Car Store
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
