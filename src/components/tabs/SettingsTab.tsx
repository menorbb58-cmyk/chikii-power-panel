import { motion } from "framer-motion";
import ModSwitch from "../ModSwitch";
import ModButton from "../ModButton";
import ModSelect from "../ModSelect";
import { Settings, Bell, BellOff, Eye, Languages, Palette, RotateCcw, Save } from "lucide-react";

const SettingsTab = () => {
  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-orbitron text-lg text-primary flex items-center gap-2">
        <Settings className="w-5 h-5" />
        Configurações
      </h2>

      <div className="grid gap-3">
        <ModSwitch 
          label="Sem Anúncios" 
          description="Remove todos os ads"
          defaultChecked={true}
          icon={<BellOff className="w-4 h-4" />}
          variant="premium"
        />
        
        <ModSwitch 
          label="Notificações" 
          description="Alertas do mod"
          defaultChecked={true}
          icon={<Bell className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Modo Stealth" 
          description="Esconde ícone do mod"
          icon={<Eye className="w-4 h-4" />}
        />

        <ModSwitch 
          label="Auto-Update" 
          description="Atualiza automaticamente"
          defaultChecked={true}
          icon={<RotateCcw className="w-4 h-4" />}
        />
      </div>

      <ModSelect 
        label="Idioma"
        options={["Português 🇧🇷", "English 🇺🇸", "Español 🇪🇸", "日本語 🇯🇵"]}
        defaultValue="Português 🇧🇷"
        icon={<Languages className="w-4 h-4" />}
      />

      <ModSelect 
        label="Tema do Painel"
        options={["Neon Purple", "Cyber Blue", "Matrix Green", "Blood Red"]}
        defaultValue="Neon Purple"
        icon={<Palette className="w-4 h-4" />}
      />

      <div className="p-3 rounded-lg bg-card/50 border border-border/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Versão do Mod</span>
          <span className="font-orbitron text-primary font-bold">v3.0.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Última Atualização</span>
          <span className="text-sm text-muted-foreground">Hoje</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <ModButton icon={<RotateCcw />} variant="secondary">
          RESETAR
        </ModButton>
        <ModButton icon={<Save />} variant="success">
          SALVAR
        </ModButton>
      </div>
    </motion.div>
  );
};

export default SettingsTab;
