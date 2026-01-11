import { motion } from "framer-motion";
import ModSwitch from "../ModSwitch";
import ModButton from "../ModButton";
import ModSlider from "../ModSlider";
import { Coins, Diamond, Gift, Sparkles, Wallet, TrendingUp } from "lucide-react";

const CoinsTab = () => {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-orbitron text-lg text-primary flex items-center gap-2">
        <Coins className="w-5 h-5" />
        Moedas & Recursos
      </h2>

      <motion.div 
        className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-neon-pink/20 border border-primary/30"
        animate={{ boxShadow: ["0 0 20px hsl(var(--neon-purple) / 0.3)", "0 0 40px hsl(var(--neon-purple) / 0.5)", "0 0 20px hsl(var(--neon-purple) / 0.3)"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Saldo Atual</span>
          <motion.span 
            className="font-orbitron text-2xl text-neon-green font-bold neon-text"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            9.999.999
          </motion.span>
        </div>
      </motion.div>

      <div className="grid gap-3">
        <ModSwitch 
          label="Moedas Infinitas" 
          description="9999999 moedas sempre"
          defaultChecked={true}
          icon={<Coins className="w-4 h-4" />}
          variant="premium"
        />
        
        <ModSwitch 
          label="Diamantes Ilimitados" 
          description="Diamantes sem fim"
          icon={<Diamond className="w-4 h-4" />}
          variant="premium"
        />

        <ModSwitch 
          label="Auto-Collect" 
          description="Coleta recompensas automático"
          defaultChecked={true}
          icon={<Gift className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Multiplicador 10x" 
          description="Ganhe 10x mais moedas"
          icon={<TrendingUp className="w-4 h-4" />}
        />
      </div>

      <ModSlider 
        label="Quantidade de Moedas" 
        min={1000} 
        max={999999} 
        defaultValue={999999}
        icon={<Wallet className="w-4 h-4" />}
      />

      <div className="grid grid-cols-2 gap-3">
        <ModButton icon={<Coins />} variant="success">
          +10.000
        </ModButton>
        <ModButton icon={<Diamond />} variant="secondary">
          +1.000 💎
        </ModButton>
      </div>

      <ModButton icon={<Sparkles />} fullWidth variant="primary">
        GERAR RECURSOS INFINITOS
      </ModButton>
    </motion.div>
  );
};

export default CoinsTab;
