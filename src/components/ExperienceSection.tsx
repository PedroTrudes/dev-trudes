import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2023 — 2026",
    role: "FullStack Pleno",
    company: "Cheíl",
    description: "Desenvolvimento de Landing Pages para o site da Samsung Brasil, assim como aprimoramento, atualização e manutenção das mesmas, através da ferramenta de desenvolvimento AEM. Alterações nas LP's em HTML e CSS. Utilização do Jira para controle e produção de páginas. Workshops de treinamentos sobre ferramentas, boas práticas e temas diversos relacionados á tecnologia e á empresa.",
  },
  {
    period: "2022 — 2023",
    role: "Fullstack Developer",
    company: "Freelancer - FullStack",
    description: "Atuo no desenvolvimento de sistemas com ReactJS, Angular, NodeJS, Java, SpringBoot, Docker, AWS para pequenas, medias e grandes empresas. Buscando sempre trazer uma melhor experiência para o usuário final.",
  },
  {
    period: "2022 — 2022",
    role: "Fullstack Developer Jr",
    company: "2BTrust",
    description: "Atuava no desenvolvimento de telas com Angular, bootstrap, JQuery, HTML & Sass. Também atuei com o time de design utilizando a ferramenta Figma. Trabalhava no desenvolvimento de um novo sistema em Angular e prestava manutenção no antigo sistema com HTML, bootstrap e JQuery. Ajudava na criação da API em Laravel",
  },
  {
    period: "2021 — 2021",
    role: "Frontend Developer Jr",
    company: "Cheíl",
    description: "Trabalhava usando plataforma AEM junto com a ferramenta JIRA para entrega de metas e comunicação com os colegas. Atuei em um projeto voltado para o site oficial da Samsung.",
  },
  {
    period: "2021 — 2021",
    role: "QA",
    company: "Cheíl",
    description: "Trabalhava analisando a criação das telas para a Samsung, buscando manter o padrão entre telas. Usava o JIRA para poder retornar um ticket ao DEV ou aprovar o ticket para o time.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-body">Carreira</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-gradient">Experiência</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center gap-8`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-foreground -translate-x-[5px] md:-translate-x-[6px] mt-2 md:mt-0" />

                <div className={`pl-8 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="text-xs text-muted-foreground font-body tracking-wider">{exp.period}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{exp.description}</p>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;