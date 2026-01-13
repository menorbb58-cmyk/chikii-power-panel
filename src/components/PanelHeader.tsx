import { motion } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import chikiiLogo from "@/assets/chikii-logo.png";

interface PanelHeaderProps {
  title: string;
  version?: string;
}

const PanelHeader = ({ title, version = "v3.0" }: PanelHeaderProps) => {
  return (
    <motion.div 
      className="relative p-0.5 sm:p-1 rounded-t-xl bg-gradient-to-r from-primary via-neon-pink to-neon-cyan"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2 bg-dark-purple rounded-t-lg">
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.img
            src={chikiiLogo}
            alt="Chikii"
            className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div>
            <h1 className="font-orbitron font-bold text-xs sm:text-lg text-foreground neon-text tracking-wider">
              {title}
            </h1>
            <span className="text-[9px] sm:text-xs text-neon-pink font-orbitron">{version}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <motion.span 
            className="px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-xs font-orbitron bg-neon-green/20 text-neon-green border border-neon-green/50"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ATIVO
          </motion.span>
          
          <div className="hidden sm:flex items-center gap-1 ml-4">
            <motion.button 
              className="p-1 hover:bg-muted/50 rounded transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Minus className="w-4 h-4 text-muted-foreground" />
            </motion.button>
            <motion.button 
              className="p-1 hover:bg-muted/50 rounded transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Square className="w-3 h-3 text-muted-foreground" />
            </motion.button>
            <motion.button 
              className="p-1 hover:bg-destructive/50 rounded transition-colors"
              whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--destructive))" }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PanelHeader;
