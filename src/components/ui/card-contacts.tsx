import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";

export default function CardContact({ name, email, message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="bg-secondary/40 backdrop-blur-md border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
    >
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <User size={18} />
        </div>
        <div>
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Mail size={12} />
            {email}
          </p>
        </div>
      </div>

      {/* Message */}
      <div className="bg-background/60 border border-border rounded-xl p-4">
        <p className="text-sm text-foreground leading-relaxed">
          {message}
        </p>
      </div>

      {/* Footer (opcional, estilo clean) */}
      <div className="mt-4 text-right">
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
          mensagem recebida
        </span>
      </div>
    </motion.div>
  );
}