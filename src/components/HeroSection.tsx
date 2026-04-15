import { motion } from "framer-motion";
import { ArrowDown, Mail, FolderOpen, House } from "lucide-react";

const HeroSection = ({position, textApresentation, isInternal}) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
   
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]" style={{
        background: 'radial-gradient(circle, hsl(0 0% 100%), transparent 70%)'
      }} />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-6">
            {position}
          </p>
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <span className="text-gradient">Pedro Trudes</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground font-body text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {textApresentation}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
          {isInternal ? (
            <>
              <a
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-medium text-sm tracking-wide hover-lift"
                  >
                  <House size={16} />
                  Voltar a home
                </a>
            </>  
          ) : ( 
            <>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-medium text-sm tracking-wide hover-lift"
                >
                <FolderOpen size={16} />
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-display font-medium text-sm tracking-wide hover-lift hover:bg-secondary"
                >
                <Mail size={16} />
                Contato
              </a>
            </>
          )}
          
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
