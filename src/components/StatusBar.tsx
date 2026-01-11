import { motion } from "framer-motion";
import { Wifi, Battery, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const StatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="flex items-center justify-between px-4 py-2 bg-card/50 border-t border-border/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <div className="flex items-center gap-4">
        <motion.div 
          className="flex items-center gap-1"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Shield className="w-4 h-4 text-neon-green" />
          <span className="text-xs text-neon-green font-medium">PROTEGIDO</span>
        </motion.div>
        
        <div className="flex items-center gap-1">
          <Wifi className="w-4 h-4 text-neon-cyan" />
          <span className="text-xs text-muted-foreground">12ms</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-orbitron text-muted-foreground">
            {time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          <Battery className="w-4 h-4 text-neon-green" />
          <span className="text-xs text-muted-foreground">100%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StatusBar;
