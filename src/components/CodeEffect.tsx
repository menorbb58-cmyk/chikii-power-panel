import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface CodeEffectProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const codeSnippets = [
  "const bypass = () => { return true; }",
  "function injectMod() { ... }",
  "await server.connect('private');",
  "coins.value = 9999999;",
  "user.vip = true; // HACKED",
  "antiban.enable();",
  "queue.skip();",
  "ping.setLatency(1);",
  "fps.unlock(120);",
  "import { hack } from 'chikii';",
  "export const MOD_VERSION = '3.0';",
  "if (detected) { spoof(); }",
  "memory.patch(0x7FFF);",
  "graphics.setQuality('ULTRA');",
  "time.setInfinite(true);",
];

const CodeEffect = ({ isVisible, onComplete }: CodeEffectProps) => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (isVisible) {
      setLines([]);
      const shuffled = [...codeSnippets].sort(() => Math.random() - 0.5);
      
      shuffled.slice(0, 8).forEach((line, index) => {
        setTimeout(() => {
          setLines(prev => [...prev, line]);
        }, index * 80);
      });

      setTimeout(() => {
        onComplete?.();
      }, 800);
    } else {
      setLines([]);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-black/90 p-6 rounded-xl border border-neon-green/50 max-w-md w-full mx-4 font-mono text-xs overflow-hidden"
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20, opacity: 0 }}
          >
            <div className="flex items-center gap-2 mb-3 border-b border-neon-green/30 pb-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-neon-green" />
              <span className="text-neon-green/70 ml-2">injecting_mod.js</span>
            </div>
            
            <div className="space-y-1 min-h-[200px]">
              {lines.map((line, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <span className="text-muted-foreground w-4">{index + 1}</span>
                  <span className="text-neon-green">{line}</span>
                  {index === lines.length - 1 && (
                    <motion.span
                      className="inline-block w-2 h-4 bg-neon-green"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-3 pt-2 border-t border-neon-green/30 text-neon-green"
              initial={{ opacity: 0 }}
              animate={{ opacity: lines.length >= 8 ? 1 : 0 }}
            >
              ✓ MOD INJETADO COM SUCESSO
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CodeEffect;
