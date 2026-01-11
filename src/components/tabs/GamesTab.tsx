import { motion } from "framer-motion";
import ModSwitch from "../ModSwitch";
import ModButton from "../ModButton";
import ModSelect from "../ModSelect";
import { Gamepad2, Unlock, Download, Sparkles, Monitor, Server } from "lucide-react";

const GamesTab = () => {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-orbitron text-lg text-primary flex items-center gap-2">
        <Gamepad2 className="w-5 h-5" />
        Jogos & Acesso
      </h2>

      <div className="grid gap-3">
        <ModSwitch 
          label="Todos os Jogos Desbloqueados" 
          description="Acesso a jogos premium"
          defaultChecked={true}
          icon={<Unlock className="w-4 h-4" />}
          variant="premium"
        />
        
        <ModSwitch 
          label="Download Offline" 
          description="Jogue sem internet"
          icon={<Download className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Gráficos Ultra HD" 
          description="Máxima qualidade visual"
          defaultChecked={true}
          icon={<Monitor className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Servidor Privado" 
          description="Servidores exclusivos"
          icon={<Server className="w-4 h-4" />}
          variant="premium"
        />
      </div>

      <ModSelect 
        label="Região do Servidor"
        options={["Brasil 🇧🇷", "EUA 🇺🇸", "Europa 🇪🇺", "Ásia 🌏", "Auto (Melhor Ping)"]}
        defaultValue="Brasil 🇧🇷"
        icon={<Server className="w-4 h-4" />}
      />

      <ModSelect 
        label="Qualidade de Streaming"
        options={["4K Ultra (Ilimitado)", "1080p Full HD", "720p HD", "480p (Economia)"]}
        defaultValue="4K Ultra (Ilimitado)"
        icon={<Monitor className="w-4 h-4" />}
      />

      <div className="p-3 rounded-lg bg-neon-green/10 border border-neon-green/30">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Jogos Disponíveis</span>
          <span className="font-orbitron text-neon-green font-bold">∞ INFINITO</span>
        </div>
      </div>

      <ModButton icon={<Sparkles />} fullWidth variant="success">
        DESBLOQUEAR TODOS OS JOGOS
      </ModButton>
    </motion.div>
  );
};

export default GamesTab;
