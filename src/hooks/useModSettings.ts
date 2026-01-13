import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "chikii-mod-settings";

type ModSettings = Record<string, boolean | number | string>;

export const useModSettings = () => {
  const [settings, setSettings] = useState<ModSettings>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // Save to localStorage whenever settings change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error("Failed to save settings:", error);
    }
  }, [settings]);

  const getSetting = useCallback(<T extends boolean | number | string>(key: string, defaultValue: T): T => {
    return (settings[key] as T) ?? defaultValue;
  }, [settings]);

  const setSetting = useCallback(<T extends boolean | number | string>(key: string, value: T) => {
    setSettings(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const toggleSetting = useCallback((key: string, defaultValue: boolean = false) => {
    setSettings(prev => ({
      ...prev,
      [key]: !(prev[key] ?? defaultValue),
    }));
  }, []);

  return { settings, getSetting, setSetting, toggleSetting };
};

// Create a singleton context for global state
import { createContext, useContext } from "react";

interface ModSettingsContextType {
  getSetting: <T extends boolean | number | string>(key: string, defaultValue: T) => T;
  setSetting: <T extends boolean | number | string>(key: string, value: T) => void;
  toggleSetting: (key: string, defaultValue?: boolean) => void;
}

export const ModSettingsContext = createContext<ModSettingsContextType | null>(null);

export const useModSettingsContext = () => {
  const context = useContext(ModSettingsContext);
  if (!context) {
    throw new Error("useModSettingsContext must be used within ModSettingsProvider");
  }
  return context;
};
