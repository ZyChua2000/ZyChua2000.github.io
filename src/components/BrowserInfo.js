import { useState, useEffect } from "react";


export default function LiveBrowserInfo() {
  const [browserInfo, setBrowserInfo] = useState({
    name: navigator.appName,
    platform: navigator.platform,
    language: navigator.language,
    online: navigator.onLine,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Handler for online/offline changes
    const handleOnline = () =>
      setBrowserInfo((prev) => ({ ...prev, online: true }));
    const handleOffline = () =>
      setBrowserInfo((prev) => ({ ...prev, online: false }));

    // Handler for window resize
    const handleResize = () =>
      setBrowserInfo((prev) => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      }));

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("resize", handleResize);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Live Browser Info</h2>
      <p>Browser Name: {browserInfo.name}</p>
      <p>Platform: {browserInfo.platform}</p>
      <p>Language: {browserInfo.language}</p>
      <p>Online: {browserInfo.online ? "Yes" : "No"}</p>
      <p>
        Window Size: {browserInfo.width} x {browserInfo.height}
      </p>
    </div>
  );
}