export function Footer() {
  return (
    <footer className="bg-primary text-on-primary font-mono text-xs tracking-widest border-t border-outline w-full px-gutter py-section flex flex-col items-center gap-8 pb-28 md:pb-16">
      <div className="font-headline text-3xl text-on-primary uppercase tracking-[0.2em] mb-4">
        The Car Store
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 mb-4">
        {["Privacy", "Terms", "Instagram", "WhatsApp"].map((link) => (
          <a
            key={link}
            className="text-outline-variant hover:text-secondary opacity-80 hover:opacity-100 transition-colors uppercase font-medium"
            href="#"
          >
            {link}
          </a>
        ))}
      </div>
      
      <div className="text-center text-outline-variant uppercase opacity-60">
        © 2024 The Car Store. Dehiwala, Sri Lanka.
      </div>
    </footer>
  );
}
