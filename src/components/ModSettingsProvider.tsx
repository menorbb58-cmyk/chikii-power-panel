import { ReactNode } from "react";
import { useModSettings, ModSettingsContext } from "@/hooks/useModSettings";

interface ModSettingsProviderProps {
  children: ReactNode;
}

const ModSettingsProvider = ({ children }: ModSettingsProviderProps) => {
  const { getSetting, setSetting, toggleSetting } = useModSettings();

  return (
    <ModSettingsContext.Provider value={{ getSetting, setSetting, toggleSetting }}>
      {children}
    </ModSettingsContext.Provider>
  );
};

export default ModSettingsProvider;
