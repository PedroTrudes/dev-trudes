import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Angular", icon: "🅰️" },
  { name: "React", icon: "⚛️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySql", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "AWS", icon: "☁️" },
  { name: "Figma", icon: "🪄" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-body">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-gradient">Tecnologias</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card rounded-lg p-6 text-center hover-lift cursor-default group"
            >
              <span className="text-3xl block mb-3 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </span>
              <p className="text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
