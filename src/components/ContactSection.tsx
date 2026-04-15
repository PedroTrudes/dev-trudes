import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Github, Mail } from "lucide-react";
import {postContacts} from "../services/api.js";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
    console.log(formData)
    const data = await postContacts(formData);

  };

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-body">Fale comigo</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-gradient">Contato</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-5 py-3.5 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-5 py-3.5 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Sua mensagem"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-5 py-3.5 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-medium text-sm tracking-wide hover-lift"
            >
              <Send size={16} />
              Enviar Mensagem
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8"
          >
            <p className="text-muted-foreground font-body leading-relaxed">
              Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/PedroTrudes", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/pedrotrudes/", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:pedro.jtrudes@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-lg glass-card text-muted-foreground hover:text-foreground hover-lift transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
