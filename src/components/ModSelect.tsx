import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ModSelectProps {
  label: string;
  options: string[];
  defaultValue?: string;
  icon?: React.ReactNode;
}

const ModSelect = ({ label, options, defaultValue, icon }: ModSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);

  return (
    <div className="relative">
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-primary">{icon}</span>}
        <span className="font-semibold text-sm">{label}</span>
      </div>
      
      <motion.button
        className="w-full p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 
                   transition-all duration-300 flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-foreground font-medium">{selected}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-50 w-full mt-2 rounded-lg bg-card border border-primary/50 shadow-xl overflow-hidden neon-glow"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {options.map((option, index) => (
              <motion.button
                key={option}
                className={`w-full p-3 text-left transition-all duration-200 
                           ${selected === option 
                             ? "bg-primary/20 text-primary" 
                             : "hover:bg-primary/10 text-foreground"
                           }`}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                {option}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModSelect;
