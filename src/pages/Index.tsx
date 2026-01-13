import { motion } from "framer-motion";
import ChikiiPanel from "@/components/ChikiiPanel";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import chikiiLogo from "@/assets/chikii-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-background cyber-grid relative overflow-hidden safe-area-inset">
      {/* PWA Install Prompt */}
      <PWAInstallPrompt />

      {/* Animated background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-neon-pink/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-4 sm:mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.img 
              src={chikiiLogo} 
              alt="Chikii" 
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h1 className="font-orbitron text-2xl sm:text-4xl md:text-5xl font-bold text-foreground neon-text">
              CHIKII<span className="text-neon-pink">MOD</span>
            </h1>
            <motion.img 
              src={chikiiLogo} 
              alt="Chikii" 
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground text-sm sm:text-lg font-rajdhani px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            O melhor painel de mod para Chikii • Premium Edition
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-2 sm:mt-4 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="px-2 sm:px-3 py-1 rounded-full bg-neon-green/20 text-neon-green text-[10px] sm:text-xs font-bold border border-neon-green/50">
              ✓ ANTI-BAN
            </span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] sm:text-xs font-bold border border-primary/50">
              ✓ ATUALIZADO
            </span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-[10px] sm:text-xs font-bold border border-neon-pink/50">
              ✓ PREMIUM
            </span>
          </motion.div>
        </motion.div>

        {/* Main Panel */}
        <ChikiiPanel />

        {/* Footer */}
        <motion.div 
          className="text-center mt-4 sm:mt-8 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-[10px] sm:text-xs text-muted-foreground font-rajdhani px-4">
            ⚠️ Use por sua conta e risco • Apenas para fins educacionais
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
