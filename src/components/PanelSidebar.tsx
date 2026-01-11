import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Coins, 
  Gamepad2, 
  Settings, 
  Crown,
  Rocket,
  Wifi,
  Workflow
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon, label, active = false, onClick }: SidebarItemProps) => (
  <motion.button
    className={`
      w-full p-3 rounded-lg flex flex-col items-center gap-1 transition-all duration-300
      ${active 
        ? "bg-primary/20 border border-primary/50 neon-glow" 
        : "hover:bg-muted/50 border border-transparent"
      }
    `}
    whileHover={{ scale: 1.05, x: 3 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <div className={`${active ? "text-primary" : "text-muted-foreground"} transition-colors`}>
      {icon}
    </div>
    <span className={`text-xs font-medium ${active ? "text-primary" : "text-muted-foreground"}`}>
      {label}
    </span>
  </motion.button>
);

interface PanelSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const PanelSidebar = ({ activeTab, onTabChange }: PanelSidebarProps) => {
  const menuItems = [
    { id: "boost", icon: <Rocket className="w-5 h-5" />, label: "Boost" },
    { id: "coins", icon: <Coins className="w-5 h-5" />, label: "Moedas" },
    { id: "vip", icon: <Crown className="w-5 h-5" />, label: "VIP" },
    { id: "games", icon: <Gamepad2 className="w-5 h-5" />, label: "Jogos" },
    { id: "automation", icon: <Workflow className="w-5 h-5" />, label: "Auto" },
    { id: "network", icon: <Wifi className="w-5 h-5" />, label: "Rede" },
    { id: "security", icon: <Shield className="w-5 h-5" />, label: "Segurança" },
    { id: "power", icon: <Zap className="w-5 h-5" />, label: "Power" },
    { id: "settings", icon: <Settings className="w-5 h-5" />, label: "Config" },
  ];

  return (
    <motion.div 
      className="w-20 bg-card/30 border-r border-border/50 p-2 flex flex-col gap-1"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {menuItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <SidebarItem
            icon={item.icon}
            label={item.label}
            active={activeTab === item.id}
            onClick={() => onTabChange(item.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PanelSidebar;
