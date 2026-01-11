import { useState } from "react";
import { motion } from "framer-motion";

interface ModSliderProps {
  label: string;
  min: number;
  max: number;
  defaultValue: number;
  unit?: string;
  icon?: React.ReactNode;
}

const ModSlider = ({ label, min, max, defaultValue, unit = "", icon }: ModSliderProps) => {
  const [value, setValue] = useState(defaultValue);
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon && <span className="text-primary">{icon}</span>}
          <span className="font-semibold text-sm">{label}</span>
        </div>
        <motion.span 
          className="font-orbitron text-sm text-primary neon-text"
          key={value}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          {value}{unit}
        </motion.span>
      </div>
      
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-neon-pink to-neon-cyan rounded-full"
          style={{ width: `${percentage}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/50 to-transparent rounded-full animate-pulse"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        style={{ position: 'relative', marginTop: '-8px' }}
      />
    </div>
  );
};

export default ModSlider;
