import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-body">Sobre mim</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-gradient">Quem sou eu</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed font-body">
              Desenvolvedor Full Stack com experiência em desenvolvimento de interfaces modernas e APIs REST, atuando tanto no frontend quanto no backend.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              Experiência na criação de landing pages, aplicações web e sistemas internos, utilizando tecnologias como  Angular, React, Node.js, Spring Boot e Docker.
              Possui forte colaboração com times de UI/UX, participando da implementação de experiências digitais para grandes marcas como Samsung LATAM e 2BTrust.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "5+", label: "Anos de experiência" },
              { number: "12+", label: "Projetos entregues" },
              { number: "10+", label: "Tecnologias" },
              { number: "100%", label: "Dedicação" },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-lg p-6 text-center hover-lift">
                <p className="font-display text-3xl font-bold text-foreground mb-1">{stat.number}</p>
                <p className="text-muted-foreground text-sm font-body">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
