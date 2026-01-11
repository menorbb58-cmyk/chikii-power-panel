import { motion } from "framer-motion";
import ModSwitch from "../ModSwitch";
import ModButton from "../ModButton";
import { Crown, Star, BadgeCheck, Gem, Sparkles, Award } from "lucide-react";

const VipTab = () => {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-orbitron text-lg text-primary flex items-center gap-2">
        <Crown className="w-5 h-5" />
        VIP & Premium
      </h2>

      <motion.div 
        className="p-4 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30"
        animate={{ 
          boxShadow: [
            "0 0 20px hsl(45 100% 50% / 0.3)", 
            "0 0 40px hsl(45 100% 50% / 0.5)", 
            "0 0 20px hsl(45 100% 50% / 0.3)"
          ] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Crown className="w-10 h-10 text-yellow-400" />
          </motion.div>
          <div>
            <h3 className="font-orbitron font-bold text-yellow-400">VIP INFINITO</h3>
            <p className="text-xs text-muted-foreground">Todos os benefícios desbloqueados</p>
          </div>
          <motion.span 
            className="ml-auto px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold border border-yellow-500/50"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ATIVO
          </motion.span>
        </div>
      </motion.div>

      <div className="grid gap-3">
        <ModSwitch 
          label="VIP Permanente" 
          description="VIP que nunca expira"
          defaultChecked={true}
          icon={<Crown className="w-4 h-4" />}
          variant="premium"
        />
        
        <ModSwitch 
          label="Todas as Skins" 
          description="Desbloqueie todas as skins"
          defaultChecked={true}
          icon={<Star className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Badge Exclusiva" 
          description="Badge de desenvolvedor"
          icon={<BadgeCheck className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Itens Premium" 
          description="Acesso a todos os itens pagos"
          defaultChecked={true}
          icon={<Gem className="w-4 h-4" />}
          variant="premium"
        />

        <ModSwitch 
          label="Recompensas Diárias 2x" 
          description="Dobro de recompensas"
          icon={<Award className="w-4 h-4" />}
        />
      </div>

      <ModButton icon={<Sparkles />} fullWidth variant="primary">
        ATIVAR VIP SUPREMO
      </ModButton>
    </motion.div>
  );
};

export default VipTab;
