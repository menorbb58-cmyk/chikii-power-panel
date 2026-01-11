import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import CodeEffect from "./CodeEffect";
import { soundManager } from "@/lib/sounds";

interface ModSwitchProps {
  label: string;
  description?: string;
  defaultChecked?: boolean;
  icon?: React.ReactNode;
  variant?: "default" | "premium" | "danger";
  showCodeEffect?: boolean;
}

const ModSwitch = ({ 
  label, 
  description, 
  defaultChecked = false, 
  icon,
  variant = "default",
  showCodeEffect = true
}: ModSwitchProps) => {
  const [checked, setChecked] = useState(defaultChecked);
  const [showEffect, setShowEffect] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case "premium":
        return checked 
          ? "bg-gradient-to-r from-neon-pink to-neon-purple" 
          : "bg-muted";
      case "danger":
        return checked 
          ? "bg-gradient-to-r from-destructive to-neon-pink" 
          : "bg-muted";
      default:
        return checked 
          ? "bg-gradient-to-r from-primary to-neon-cyan" 
          : "bg-muted";
    }
  };

  const handleToggle = useCallback(() => {
    const newChecked = !checked;
    
    if (newChecked) {
      soundManager.playHack();
      if (showCodeEffect) {
        setShowEffect(true);
      }
    } else {
      soundManager.playDeactivate();
    }
    
    setChecked(newChecked);
  }, [checked, showCodeEffect]);

  const handleEffectComplete = useCallback(() => {
    setTimeout(() => {
      setShowEffect(false);
      soundManager.playSuccess();
    }, 500);
  }, []);

  return (
    <>
      <CodeEffect isVisible={showEffect} onComplete={handleEffectComplete} />
      
      <motion.div 
        className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
        whileHover={{ scale: 1.02, x: 5 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleToggle}
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div className={`text-xl ${checked ? "text-primary" : "text-muted-foreground"} transition-colors`}>
              {icon}
            </div>
          )}
          <div>
            <p className={`font-semibold text-sm ${checked ? "text-foreground" : "text-muted-foreground"} transition-colors`}>
              {label}
            </p>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        
        <div className={`relative w-12 h-6 rounded-full transition-all duration-300 ${getVariantStyles()}`}>
          <motion.div
            className="absolute top-1 w-4 h-4 bg-foreground rounded-full shadow-lg"
            animate={{ left: checked ? "calc(100% - 20px)" : "4px" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
          {checked && (
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                boxShadow: "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.5)"
              }}
            />
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ModSwitch;
