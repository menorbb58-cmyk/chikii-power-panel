import { motion } from "framer-motion";
import ModSwitch from "../ModSwitch";
import ModButton from "../ModButton";
import { Shield, Eye, EyeOff, Lock, UserX, Fingerprint, ShieldCheck } from "lucide-react";

const SecurityTab = () => {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-orbitron text-lg text-primary flex items-center gap-2">
        <Shield className="w-5 h-5" />
        Segurança & Proteção
      </h2>

      <motion.div 
        className="p-4 rounded-xl bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 border border-neon-green/30"
        animate={{ 
          boxShadow: [
            "0 0 20px hsl(var(--neon-green) / 0.3)", 
            "0 0 40px hsl(var(--neon-green) / 0.5)", 
            "0 0 20px hsl(var(--neon-green) / 0.3)"
          ] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ShieldCheck className="w-10 h-10 text-neon-green" />
          </motion.div>
          <div>
            <h3 className="font-orbitron font-bold text-neon-green">PROTEÇÃO TOTAL</h3>
            <p className="text-xs text-muted-foreground">Todas as proteções ativas</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-3">
        <ModSwitch 
          label="Anti-Ban Ultimate" 
          description="100% proteção contra ban"
          defaultChecked={true}
          icon={<Shield className="w-4 h-4" />}
          variant="premium"
        />
        
        <ModSwitch 
          label="Modo Invisível" 
          description="Fique invisível para admins"
          defaultChecked={true}
          icon={<EyeOff className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Anti-Detecção" 
          description="Evita detecção de mod"
          defaultChecked={true}
          icon={<Eye className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Conta Segura" 
          description="Proteção da conta"
          icon={<Lock className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Fake ID" 
          description="Gera ID falso"
          icon={<UserX className="w-4 h-4" />}
          variant="danger"
        />

        <ModSwitch 
          label="Spoof Device" 
          description="Falsifica dados do dispositivo"
          icon={<Fingerprint className="w-4 h-4" />}
        />
      </div>

      <div className="p-3 rounded-lg bg-neon-green/10 border border-neon-green/30">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Status de Proteção</span>
          <motion.span 
            className="font-orbitron text-neon-green font-bold"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            MÁXIMA
          </motion.span>
        </div>
      </div>

      <ModButton icon={<Shield />} fullWidth variant="success">
        ATIVAR ESCUDO TOTAL
      </ModButton>
    </motion.div>
  );
};

export default SecurityTab;
