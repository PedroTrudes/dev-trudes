import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Vitrina",
    description: "Sass onde empresas podem se cadastrar e criar a sua propria vitrine de veiculos para divulgar nas redes sociais.",
    tech: ["SpringBoot", "Java", "Angular", "MySql", "Docker"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format&fit=crop",
    status: "Em criação",
  },
  {
    title: "JTCup 72",
    description: "Pagina para captação  de mais clientes para o evento de corrida JTCup 72, criacao do figma até o deploy.",
    tech: ["HTML", "JavaScript", "Scss", "Figma"],
    image: "https://images.unsplash.com/photo-1590506978404-d3e577192a18?q=80&w=715&auto=format&fit=crop",
    status: "Completo",
  },
  {
    title: "Almeida Engenharia",
    description: "Sistema interno para construtora, onde eles podem ter analise de gastos e gestão de obras.",
    tech: ["NodeJS", "ReactJS", "Docker", "MongoDB"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176&auto=format&fit=crop",
    status: "Completo"
  },
  {
    title: "2BTrust",
    description: "Sistema interno para criacao de carteira de investimentos.",
    tech: ["Angular", "Node.js", "Laravel", "Microsserviços", "MongoDB", "MySql"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1311&auto=format&fit=crop",
    status: "Completo",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-body">Portfólio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-gradient">Projetos</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group hover-lift"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                {/* Overlay actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary transition-colors">
                    <Github size={16} />
                  </button>
                  <button className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{project.title}</h3>
                {(() => {
                  if(project.status === "Em criação"){
                    return <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-body">{project.status}</span>
                }
                })()} 
                <p className="text-muted-foreground text-sm mt-4 mb-4 font-body leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-body">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
