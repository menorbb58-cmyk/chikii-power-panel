import { useState, useEffect } from "react";

interface SystemInfo {
  battery: number;
  isCharging: boolean;
  ping: number;
  connectionType: string;
  isOnline: boolean;
}

export const useSystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState<SystemInfo>({
    battery: 100,
    isCharging: false,
    ping: 0,
    connectionType: "unknown",
    isOnline: navigator.onLine,
  });

  // Battery API
  useEffect(() => {
    const updateBattery = async () => {
      try {
        // @ts-ignore - Battery API types
        const battery = await navigator.getBattery?.();
        if (battery) {
          const updateBatteryInfo = () => {
            setSystemInfo(prev => ({
              ...prev,
              battery: Math.round(battery.level * 100),
              isCharging: battery.charging,
            }));
          };

          updateBatteryInfo();
          battery.addEventListener("levelchange", updateBatteryInfo);
          battery.addEventListener("chargingchange", updateBatteryInfo);

          return () => {
            battery.removeEventListener("levelchange", updateBatteryInfo);
            battery.removeEventListener("chargingchange", updateBatteryInfo);
          };
        }
      } catch (error) {
        console.log("Battery API not supported");
      }
    };

    updateBattery();
  }, []);

  // Network/Connection API
  useEffect(() => {
    const updateConnection = () => {
      // @ts-ignore - Network Information API types
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        setSystemInfo(prev => ({
          ...prev,
          connectionType: connection.effectiveType || connection.type || "unknown",
        }));
      }
    };

    updateConnection();

    // @ts-ignore
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      connection.addEventListener("change", updateConnection);
      return () => connection.removeEventListener("change", updateConnection);
    }
  }, []);

  // Online/Offline status
  useEffect(() => {
    const handleOnline = () => setSystemInfo(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setSystemInfo(prev => ({ ...prev, isOnline: false }));

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Ping measurement
  useEffect(() => {
    const measurePing = async () => {
      try {
        const start = performance.now();
        await fetch("https://www.google.com/favicon.ico", { 
          mode: "no-cors",
          cache: "no-store"
        });
        const end = performance.now();
        const ping = Math.round(end - start);
        
        setSystemInfo(prev => ({
          ...prev,
          ping: Math.min(ping, 999), // Cap at 999ms for display
        }));
      } catch (error) {
        setSystemInfo(prev => ({
          ...prev,
          ping: -1, // Error state
        }));
      }
    };

    measurePing();
    const interval = setInterval(measurePing, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return systemInfo;
};
