import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { loginRequest } from "../services/api.js";
import { useNavigate } from "react-router-dom";

const LoginSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ email: "", password: "" });
    const data = await loginRequest(formData);

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/dev/contact");
    } else {
      setError("Email ou senha invalidos");
    }

    setFormData({ email: "", password: "" });
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4"
      ref={ref}
    >
      {error && (
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 right-6 z-50"
        >
          <div className="bg-red-500/10 backdrop-blur-md border border-red-500/20 text-red-400 px-5 py-3 rounded-xl shadow-lg text-sm flex items-center gap-2">
            ❌ {error}
          </div>
        </motion.div>
      )}
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-3">
            Painel administrativo
          </p>
          <h2 className="text-3xl font-bold">Login</h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-secondary/40 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6 shadow-lg"
        >
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            required
          />

          <input
            type="password"
            placeholder="Senha"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            required
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition active:scale-[0.98]"
          >
            <Send size={16} />
            Entrar
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default LoginSection;
