import { motion } from "framer-motion";
import ModSwitch from "../ModSwitch";
import ModSlider from "../ModSlider";
import ModButton from "../ModButton";
import ModSelect from "../ModSelect";
import { Wifi, Signal, Zap, Globe, Router, Activity } from "lucide-react";

const NetworkTab = () => {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-orbitron text-lg text-primary flex items-center gap-2">
        <Wifi className="w-5 h-5" />
        Rede & Conexão
      </h2>

      <motion.div 
        className="p-4 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 border border-neon-cyan/30"
        animate={{ 
          boxShadow: [
            "0 0 20px hsl(var(--neon-cyan) / 0.3)", 
            "0 0 40px hsl(var(--neon-cyan) / 0.5)", 
            "0 0 20px hsl(var(--neon-cyan) / 0.3)"
          ] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <motion.span 
              className="block font-orbitron text-xl text-neon-green font-bold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              1ms
            </motion.span>
            <span className="text-xs text-muted-foreground">Ping</span>
          </div>
          <div>
            <span className="block font-orbitron text-xl text-neon-cyan font-bold">∞</span>
            <span className="text-xs text-muted-foreground">Download</span>
          </div>
          <div>
            <span className="block font-orbitron text-xl text-neon-pink font-bold">∞</span>
            <span className="text-xs text-muted-foreground">Upload</span>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-3">
        <ModSwitch 
          label="Ping Hack" 
          description="Ping sempre 1ms"
          defaultChecked={true}
          icon={<Signal className="w-4 h-4" />}
          variant="premium"
        />
        
        <ModSwitch 
          label="Internet Infinita" 
          description="Sem limite de dados"
          defaultChecked={true}
          icon={<Globe className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Anti-Lag" 
          description="Remove todo lag"
          icon={<Zap className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Conexão Prioritária" 
          description="Prioridade no servidor"
          icon={<Router className="w-4 h-4" />}
        />
      </div>

      <ModSlider 
        label="Simular Ping" 
        min={1} 
        max={100} 
        defaultValue={1}
        unit="ms"
        icon={<Activity className="w-4 h-4" />}
      />

      <ModSelect 
        label="Tipo de Conexão"
        options={["Fibra Ótica (Fake)", "5G Ultra", "Satélite", "Quantum Link"]}
        defaultValue="Fibra Ótica (Fake)"
        icon={<Wifi className="w-4 h-4" />}
      />

      <ModButton icon={<Zap />} fullWidth variant="secondary">
        OTIMIZAR CONEXÃO
      </ModButton>
    </motion.div>
  );
};

export default NetworkTab;
