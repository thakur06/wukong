import { useState, useEffect } from "react";

const useNetworkStatus = () => {
  const [status, setStatus] = useState({
    online: navigator.onLine,
    downlink: navigator.connection?.downlink || 0,
    effectiveType: navigator.connection?.effectiveType || "unknown",
    rtt: navigator.connection?.rtt || 0,
    measuredSpeed: 0,
    measuredLatency: 0,
    speedUnit: "Mbps", 
  });

  useEffect(() => {
    const updateStatus = () => {
      setStatus(prev => ({
        ...prev,
        online: navigator.onLine,
        downlink: navigator.connection?.downlink || 0,
        effectiveType: navigator.connection?.effectiveType || "unknown",
        rtt: navigator.connection?.rtt || 0,
      }));
    };

    const measureSpeedAndLatency = async () => {
      const testUrl = "https://thingproxy.freeboard.io/fetch/https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";

      const startTime = performance.now();
      try {
        const response = await fetch(testUrl, { cache: "no-store" });
        const endTime = performance.now();
        const latency = endTime - startTime;
        const blob = await response.blob();
        const sizeInBytes = blob.size; 
        const sizeInBits = sizeInBytes * 8; 
        const durationInSeconds = (endTime - startTime) / 1000;
        const speedMbps = (sizeInBits / durationInSeconds) / 1_000_000; 

        let speed;
        let unit;
        if (speedMbps < 1) {
          speed = (sizeInBits / durationInSeconds) / 1_000; // Convert to Kbps
          unit = "Kbps";
        } else {
          speed = speedMbps;
          unit = "Mbps";
        }

        console.log(`${speed.toFixed(2)} ${unit} is the speed`);

        setStatus(prev => ({
          ...prev,
          measuredLatency: Math.round(latency),
          measuredSpeed: speed.toFixed(3), 
          speedUnit: unit, 
        }));
      } catch (error) {
        console.error("Speed test failed", error);
      }
    };

    // Listen for online/offline and network changes
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    if (navigator.connection) {
      navigator.connection.addEventListener("change", updateStatus);
    }

    
    const interval = setInterval(() => {
      updateStatus();
      measureSpeedAndLatency();
    }, 3000);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
      if (navigator.connection) {
        navigator.connection.removeEventListener("change", updateStatus);
      }
      clearInterval(interval);
    };
  }, []);

  return status;
};

export default useNetworkStatus;