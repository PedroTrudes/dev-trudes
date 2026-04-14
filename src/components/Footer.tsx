import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} Pedro Trudes. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          {[
            { icon: <Github size={16} />, href: "https://github.com/PedroTrudes" },
            { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/pedrotrudes/" },
            { icon: <Mail size={16} />, href: "mailto:pedro.jtrudes@gmail.com" },
          ].map((s, i) => (
            <a key={i} href={s.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
