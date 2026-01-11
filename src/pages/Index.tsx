import { motion } from "framer-motion";
import ChikiiPanel from "@/components/ChikiiPanel";
import { Gamepad2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid relative overflow-hidden">
      {/* Animated background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Gamepad2 className="w-10 h-10 text-primary" />
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground neon-text">
              CHIKII<span className="text-neon-pink">MOD</span>
            </h1>
            <Gamepad2 className="w-10 h-10 text-neon-pink" />
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground text-lg font-rajdhani"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            O melhor painel de mod para Chikii • Premium Edition
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="px-3 py-1 rounded-full bg-neon-green/20 text-neon-green text-xs font-bold border border-neon-green/50">
              ✓ ANTI-BAN
            </span>
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/50">
              ✓ ATUALIZADO
            </span>
            <span className="px-3 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-xs font-bold border border-neon-pink/50">
              ✓ PREMIUM
            </span>
          </motion.div>
        </motion.div>

        {/* Main Panel */}
        <ChikiiPanel />

        {/* Footer */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs text-muted-foreground font-rajdhani">
            ⚠️ Use por sua conta e risco • Apenas para fins educacionais
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
