import { motion } from "framer-motion";
import { Wifi, WifiOff, Battery, BatteryCharging, Clock, Shield, Signal } from "lucide-react";
import { useState, useEffect } from "react";
import { useSystemInfo } from "@/hooks/useSystemInfo";

const StatusBar = () => {
  const [time, setTime] = useState(new Date());
  const { battery, isCharging, ping, connectionType, isOnline } = useSystemInfo();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getPingColor = () => {
    if (ping < 0) return "text-destructive";
    if (ping < 50) return "text-neon-green";
    if (ping < 100) return "text-yellow-400";
    return "text-destructive";
  };

  const getBatteryColor = () => {
    if (battery > 50) return "text-neon-green";
    if (battery > 20) return "text-yellow-400";
    return "text-destructive";
  };

  const getConnectionLabel = () => {
    switch (connectionType) {
      case "4g": return "4G";
      case "3g": return "3G";
      case "2g": return "2G";
      case "slow-2g": return "2G";
      case "wifi": return "WiFi";
      default: return connectionType.toUpperCase();
    }
  };

  return (
    <motion.div 
      className="flex items-center justify-between px-4 py-2 bg-card/50 border-t border-border/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <div className="flex items-center gap-4">
        <motion.div 
          className="flex items-center gap-1"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Shield className="w-4 h-4 text-neon-green" />
          <span className="text-xs text-neon-green font-medium">PROTEGIDO</span>
        </motion.div>
        
        <div className="flex items-center gap-1">
          {isOnline ? (
            <Wifi className="w-4 h-4 text-neon-cyan" />
          ) : (
            <WifiOff className="w-4 h-4 text-destructive" />
          )}
          <span className="text-xs text-muted-foreground">{getConnectionLabel()}</span>
        </div>

        <div className="flex items-center gap-1">
          <Signal className={`w-4 h-4 ${getPingColor()}`} />
          <span className={`text-xs font-mono ${getPingColor()}`}>
            {ping < 0 ? "ERR" : `${ping}ms`}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-orbitron text-muted-foreground">
            {time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          {isCharging ? (
            <BatteryCharging className={`w-4 h-4 ${getBatteryColor()}`} />
          ) : (
            <Battery className={`w-4 h-4 ${getBatteryColor()}`} />
          )}
          <span className={`text-xs ${getBatteryColor()}`}>{battery}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StatusBar;
