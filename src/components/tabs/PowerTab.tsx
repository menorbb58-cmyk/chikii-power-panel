import { motion } from "framer-motion";
import ModSwitch from "../ModSwitch";
import ModSlider from "../ModSlider";
import ModButton from "../ModButton";
import { Zap, BatteryCharging, Cpu, HardDrive, MemoryStick, Flame } from "lucide-react";

const PowerTab = () => {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-orbitron text-lg text-primary flex items-center gap-2">
        <Zap className="w-5 h-5" />
        Power & Hardware
      </h2>

      <div className="grid gap-3">
        <ModSwitch 
          label="Bateria Infinita" 
          description="100% sempre"
          defaultChecked={true}
          icon={<BatteryCharging className="w-4 h-4" />}
          variant="premium"
        />
        
        <ModSwitch 
          label="CPU Boost" 
          description="Acelera processador"
          icon={<Cpu className="w-4 h-4" />}
        />

        <ModSwitch 
          label="RAM Boost" 
          description="Otimiza memória"
          defaultChecked={true}
          icon={<MemoryStick className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Anti-Aquecimento" 
          description="Mantém dispositivo frio"
          icon={<Flame className="w-4 h-4" />}
          variant="danger"
        />

        <ModSwitch 
          label="Storage Infinito" 
          description="Espaço ilimitado"
          icon={<HardDrive className="w-4 h-4" />}
        />
      </div>

      <div className="space-y-3">
        <ModSlider 
          label="CPU Clock" 
          min={1} 
          max={10} 
          defaultValue={10}
          unit=" GHz"
          icon={<Cpu className="w-4 h-4" />}
        />

        <ModSlider 
          label="RAM Virtual" 
          min={4} 
          max={64} 
          defaultValue={64}
          unit=" GB"
          icon={<MemoryStick className="w-4 h-4" />}
        />
      </div>

      <motion.div 
        className="p-4 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30"
      >
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <span className="block font-orbitron text-xl text-yellow-400 font-bold">100%</span>
            <span className="text-xs text-muted-foreground">Bateria</span>
          </div>
          <div>
            <span className="block font-orbitron text-xl text-neon-cyan font-bold">25°C</span>
            <span className="text-xs text-muted-foreground">Temperatura</span>
          </div>
        </div>
      </motion.div>

      <ModButton icon={<Zap />} fullWidth variant="primary">
        MAXIMIZAR PERFORMANCE
      </ModButton>
    </motion.div>
  );
};

export default PowerTab;
