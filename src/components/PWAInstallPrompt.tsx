import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Share, Plus, Smartphone, Check } from "lucide-react";
import chikiiLogo from "@/assets/chikii-logo.png";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Listen for beforeinstallprompt event (Android/Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after a delay
      setTimeout(() => {
        const dismissed = localStorage.getItem("pwa-prompt-dismissed");
        if (!dismissed) {
          setShowPrompt(true);
        }
      }, 3000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // For iOS, show prompt after delay if not dismissed
    if (isIOSDevice) {
      setTimeout(() => {
        const dismissed = localStorage.getItem("pwa-prompt-dismissed");
        if (!dismissed) {
          setShowPrompt(true);
        }
      }, 3000);
    }

    // Listen for app installed event
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSInstructions(true);
      return;
    }

    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      
      setDeferredPrompt(null);
      setShowPrompt(false);
    } catch (error) {
      console.error("Error installing PWA:", error);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-prompt-dismissed", "true");
  };

  const handleRemindLater = () => {
    setShowPrompt(false);
    // Will show again next session
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <AnimatePresence>
      {showPrompt && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={handleRemindLater}
          />

          {/* Install Prompt Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-96 z-50"
          >
            <div className="bg-gradient-to-br from-dark-card to-dark-hover border border-neon-purple/30 rounded-2xl p-5 shadow-2xl shadow-neon-purple/20">
              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-dark-hover/50 text-gray-400 hover:text-white hover:bg-dark-hover transition-colors"
              >
                <X size={16} />
              </button>

              {/* Logo and Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-neon-purple/40 blur-xl rounded-full" />
                  <img
                    src={chikiiLogo}
                    alt="Chikii Mod"
                    className="w-16 h-16 rounded-2xl relative z-10 border-2 border-neon-purple/50"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-orbitron font-bold text-white">
                    Chikii Mod Panel
                  </h3>
                  <p className="text-sm text-gray-400">
                    Instale o app no seu celular
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-5">
                {[
                  "Acesso rápido direto da tela inicial",
                  "Funciona offline",
                  "Experiência de app nativo",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check size={14} className="text-neon-green flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* iOS Instructions */}
              {showIOSInstructions && isIOS && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mb-4 p-3 bg-dark-hover/50 rounded-xl border border-neon-blue/30"
                >
                  <p className="text-sm font-medium text-white mb-2">
                    Para instalar no iPhone/iPad:
                  </p>
                  <ol className="text-xs text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue text-[10px] font-bold">1</span>
                      <span className="flex items-center gap-1">
                        Toque em <Share size={12} className="text-neon-blue" /> Compartilhar
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue text-[10px] font-bold">2</span>
                      <span className="flex items-center gap-1">
                        Role e toque em <Plus size={12} className="text-neon-blue" /> "Adicionar à Tela de Início"
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue text-[10px] font-bold">3</span>
                      <span>Toque em "Adicionar" no canto superior direito</span>
                    </li>
                  </ol>
                </motion.div>
              )}

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleRemindLater}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-dark-hover/50 text-gray-400 text-sm font-medium hover:bg-dark-hover hover:text-white transition-colors"
                >
                  Depois
                </button>
                <button
                  onClick={handleInstallClick}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white text-sm font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-purple/30 transition-all active:scale-95"
                >
                  {isIOS ? (
                    <>
                      <Smartphone size={16} />
                      Como Instalar
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      Instalar App
                    </>
                  )}
                </button>
              </div>

              {/* Bottom hint */}
              <p className="text-[10px] text-gray-500 text-center mt-3">
                Grátis • Sem ocupar espaço • Atualizações automáticas
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;
