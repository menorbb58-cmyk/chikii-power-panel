import { useState } from "react";
import { motion } from "framer-motion";
import PanelHeader from "./PanelHeader";
import PanelSidebar from "./PanelSidebar";
import StatusBar from "./StatusBar";
import BoostTab from "./tabs/BoostTab";
import CoinsTab from "./tabs/CoinsTab";
import VipTab from "./tabs/VipTab";
import GamesTab from "./tabs/GamesTab";
import NetworkTab from "./tabs/NetworkTab";
import SecurityTab from "./tabs/SecurityTab";
import PowerTab from "./tabs/PowerTab";
import SettingsTab from "./tabs/SettingsTab";

const ChikiiPanel = () => {
  const [activeTab, setActiveTab] = useState("boost");

  const renderContent = () => {
    switch (activeTab) {
      case "boost":
        return <BoostTab />;
      case "coins":
        return <CoinsTab />;
      case "vip":
        return <VipTab />;
      case "games":
        return <GamesTab />;
      case "network":
        return <NetworkTab />;
      case "security":
        return <SecurityTab />;
      case "power":
        return <PowerTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <BoostTab />;
    }
  };

  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {/* Outer glow container */}
      <div className="relative">
        {/* Animated border glow */}
        <motion.div 
          className="absolute -inset-1 bg-gradient-to-r from-primary via-neon-pink to-neon-cyan rounded-xl blur-sm"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        
        {/* Panel container */}
        <div className="relative bg-background rounded-xl overflow-hidden border border-border/50">
          <PanelHeader title="CHIKII MOD PANEL" version="v3.0 PREMIUM" />
          
          <div className="flex">
            <PanelSidebar activeTab={activeTab} onTabChange={setActiveTab} />
            
            {/* Main content area */}
            <motion.div 
              className="flex-1 p-4 panel-bg cyber-grid min-h-[500px] relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Scanline effect */}
              <div className="absolute inset-0 scanline pointer-events-none" />
              
              {/* Content */}
              <div className="relative z-10">
                {renderContent()}
              </div>
            </motion.div>
          </div>
          
          <StatusBar />
        </div>
      </div>
    </motion.div>
  );
};

export default ChikiiPanel;
