import { motion } from "framer-motion";
import ModSwitch from "../ModSwitch";
import ModSlider from "../ModSlider";
import ModButton from "../ModButton";
import { Rocket, Zap, Timer, SkipForward, FastForward, Gauge } from "lucide-react";

const BoostTab = () => {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-orbitron text-lg text-primary flex items-center gap-2">
        <Rocket className="w-5 h-5" />
        Boost & Performance
      </h2>

      <div className="grid gap-3">
        <ModSwitch 
          label="Pular Fila" 
          description="Entre instantaneamente nos jogos"
          defaultChecked={true}
          icon={<SkipForward className="w-4 h-4" />}
          variant="premium"
        />
        
        <ModSwitch 
          label="Turbo Mode" 
          description="Acelera carregamento 10x"
          icon={<FastForward className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Zero Latency" 
          description="Remove delay de input"
          icon={<Zap className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Tempo Infinito" 
          description="Jogue sem limite de tempo"
          defaultChecked={true}
          icon={<Timer className="w-4 h-4" />}
          variant="premium"
        />
      </div>

      <div className="space-y-3 pt-2">
        <ModSlider 
          label="FPS Boost" 
          min={30} 
          max={120} 
          defaultValue={120} 
          unit=" FPS"
          icon={<Gauge className="w-4 h-4" />}
        />

        <ModSlider 
          label="Velocidade de Jogo" 
          min={1} 
          max={5} 
          defaultValue={1} 
          unit="x"
        />
      </div>

      <ModButton icon={<Rocket />} fullWidth variant="primary">
        ATIVAR BOOST MÁXIMO
      </ModButton>
    </motion.div>
  );
};

export default BoostTab;
