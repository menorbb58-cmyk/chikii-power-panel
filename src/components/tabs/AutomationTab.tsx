import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModSwitch from "../ModSwitch";
import ModButton from "../ModButton";
import { 
  Workflow, 
  Play, 
  Pause, 
  Plus, 
  ArrowRight, 
  Zap,
  Clock,
  Repeat,
  GitBranch,
  Code
} from "lucide-react";

interface WorkflowNode {
  id: string;
  type: "trigger" | "action" | "condition";
  label: string;
  icon: React.ReactNode;
  active: boolean;
}

const AutomationTab = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const workflows: WorkflowNode[] = [
    { id: "1", type: "trigger", label: "Ao Iniciar", icon: <Play className="w-4 h-4" />, active: true },
    { id: "2", type: "action", label: "Pular Fila", icon: <Zap className="w-4 h-4" />, active: true },
    { id: "3", type: "condition", label: "Se VIP", icon: <GitBranch className="w-4 h-4" />, active: true },
    { id: "4", type: "action", label: "Add Moedas", icon: <Code className="w-4 h-4" />, active: true },
    { id: "5", type: "action", label: "Anti-Ban", icon: <Repeat className="w-4 h-4" />, active: true },
  ];

  const runWorkflow = () => {
    setIsRunning(true);
    workflows.forEach((node, index) => {
      setTimeout(() => {
        setActiveNode(node.id);
      }, index * 500);
    });
    
    setTimeout(() => {
      setActiveNode(null);
      setIsRunning(false);
    }, workflows.length * 500 + 500);
  };

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-orbitron text-lg text-primary flex items-center gap-2">
        <Workflow className="w-5 h-5" />
        Automação
      </h2>

      {/* Workflow Canvas */}
      <motion.div 
        className="p-4 rounded-xl bg-card/30 border border-border/50 min-h-[180px] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="relative flex items-center justify-start gap-2 overflow-x-auto pb-2">
          {workflows.map((node, index) => (
            <motion.div key={node.id} className="flex items-center gap-2">
              <motion.div
                className={`
                  p-3 rounded-lg border-2 transition-all duration-300
                  ${node.type === 'trigger' ? 'bg-neon-green/20 border-neon-green/50' : ''}
                  ${node.type === 'action' ? 'bg-primary/20 border-primary/50' : ''}
                  ${node.type === 'condition' ? 'bg-neon-cyan/20 border-neon-cyan/50' : ''}
                  ${activeNode === node.id ? 'scale-110 shadow-lg' : ''}
                `}
                animate={activeNode === node.id ? {
                  boxShadow: ["0 0 0px hsl(var(--primary))", "0 0 20px hsl(var(--primary))", "0 0 0px hsl(var(--primary))"]
                } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className={`
                  ${node.type === 'trigger' ? 'text-neon-green' : ''}
                  ${node.type === 'action' ? 'text-primary' : ''}
                  ${node.type === 'condition' ? 'text-neon-cyan' : ''}
                `}>
                  {node.icon}
                </div>
                <p className="text-xs mt-1 text-center text-muted-foreground whitespace-nowrap">
                  {node.label}
                </p>
              </motion.div>
              
              {index < workflows.length - 1 && (
                <motion.div
                  animate={activeNode === workflows[index + 1]?.id ? {
                    color: ["hsl(var(--muted-foreground))", "hsl(var(--primary))", "hsl(var(--muted-foreground))"]
                  } : {}}
                >
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </motion.div>
              )}
            </motion.div>
          ))}
          
          <motion.button
            className="p-3 rounded-lg border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-4 h-4 text-muted-foreground" />
          </motion.button>
        </div>

        <AnimatePresence>
          {isRunning && (
            <motion.div 
              className="absolute bottom-2 right-2 px-2 py-1 rounded bg-neon-green/20 text-neon-green text-xs font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              Executando...
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Automation Controls */}
      <div className="grid grid-cols-2 gap-3">
        <ModButton 
          icon={isRunning ? <Pause /> : <Play />} 
          variant={isRunning ? "danger" : "success"}
          onClick={runWorkflow}
        >
          {isRunning ? "PAUSAR" : "EXECUTAR"}
        </ModButton>
        <ModButton icon={<Plus />} variant="secondary">
          NOVO FLUXO
        </ModButton>
      </div>

      {/* Automation Switches */}
      <div className="grid gap-3">
        <ModSwitch 
          label="Auto-Execução" 
          description="Inicia automático ao abrir"
          defaultChecked={true}
          icon={<Play className="w-4 h-4" />}
          showCodeEffect={false}
        />
        
        <ModSwitch 
          label="Loop Infinito" 
          description="Repete o fluxo sempre"
          icon={<Repeat className="w-4 h-4" />}
          showCodeEffect={false}
        />

        <ModSwitch 
          label="Delay Inteligente" 
          description="Evita detecção com delays"
          defaultChecked={true}
          icon={<Clock className="w-4 h-4" />}
          showCodeEffect={false}
        />
      </div>

      <ModButton icon={<Workflow />} fullWidth variant="primary">
        SALVAR AUTOMAÇÃO
      </ModButton>
    </motion.div>
  );
};

export default AutomationTab;
