import { useState } from "react";
import { motion } from "motion/react";

const BODY_TYPES = ["Sedan", "SUV", "Coupe", "Hatchback"];
const SERVICES = [
  "Nano Coating",
  "PPF (Paint Protection Film)",
  "Window Tint",
  "Carbon Fiber Accents",
  "Full Interior Detailing",
];

export function Estimator() {
  const [selectedBodyType, setSelectedBodyType] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 1000);
  };

  return (
    <section className="py-section px-gutter md:max-w-7xl md:mx-auto bg-surface border-y border-outline-variant my-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-stack-md"
      >
        <h2 className="font-headline text-3xl md:text-5xl text-primary uppercase">
          Get an Instant Estimate
        </h2>
        <p className="font-body text-on-surface-variant mt-2 text-lg">
          Configure your service package for an immediate quote.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-surface-lowest p-6 border border-outline-variant max-w-3xl mx-auto shadow-sm"
      >
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Vehicle Model */}
          <div>
            <label
              className="block font-mono text-xs tracking-widest text-primary uppercase mb-2 font-medium"
              htmlFor="vehicleModel"
            >
              Vehicle Make & Model
            </label>
            <input
              className="w-full bg-surface border border-outline-variant p-4 font-body text-primary placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              id="vehicleModel"
              placeholder="e.g., Porsche 911"
              type="text"
            />
          </div>

          {/* Body Type */}
          <div>
            <label className="block font-mono text-xs tracking-widest text-primary uppercase mb-3 font-medium">
              Body Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              {BODY_TYPES.map((type) => (
                <label
                  key={type}
                  className={`relative flex items-center justify-center p-4 border cursor-pointer transition-colors duration-200 ${
                    selectedBodyType === type
                      ? "border-primary bg-surface-variant"
                      : "border-outline-variant hover:border-primary"
                  }`}
                >
                  <input
                    className="peer sr-only"
                    name="bodyType"
                    type="radio"
                    value={type}
                    checked={selectedBodyType === type}
                    onChange={() => setSelectedBodyType(type)}
                  />
                  <span className="font-mono text-xs tracking-widest text-primary uppercase">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <label className="block font-mono text-xs tracking-widest text-primary uppercase mb-3 font-medium">
              Select Services
            </label>
            <div className="space-y-3">
              {SERVICES.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 p-4 border border-outline-variant hover:bg-surface transition-colors cursor-pointer"
                >
                  <input
                    className="w-5 h-5 accent-primary cursor-pointer border-outline-variant bg-surface-lowest"
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  <span className="font-body text-primary uppercase">
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={handleCalculate}
            className="w-full bg-primary text-on-primary font-headline text-2xl py-4 uppercase hover:bg-surface-tint transition-colors duration-300 flex justify-center items-center h-16"
            type="button"
          >
            {isCalculating ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-6 h-6 border-2 border-on-primary border-t-transparent rounded-full"
              />
            ) : (
              "Calculate Estimate"
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
