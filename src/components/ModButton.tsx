import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ModButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
  onClick?: () => void;
  fullWidth?: boolean;
}

const ModButton = ({ 
  children, 
  icon, 
  variant = "primary", 
  onClick,
  fullWidth = false 
}: ModButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan";
      case "danger":
        return "bg-gradient-to-r from-destructive to-neon-pink hover:from-neon-pink hover:to-destructive";
      case "success":
        return "bg-gradient-to-r from-neon-green to-neon-cyan hover:from-neon-cyan hover:to-neon-green";
      default:
        return "bg-gradient-to-r from-primary to-neon-pink hover:from-neon-pink hover:to-primary";
    }
  };

  return (
    <motion.button
      className={`
        ${getVariantStyles()}
        ${fullWidth ? "w-full" : ""}
        px-6 py-3 rounded-lg font-orbitron font-bold text-sm
        text-primary-foreground shadow-lg
        transition-all duration-300
        neon-glow hover:neon-glow-pink
        border border-border/30
        flex items-center justify-center gap-2
      `}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default ModButton;
