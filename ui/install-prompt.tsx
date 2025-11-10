"use client";
import { useState, useEffect } from "react";

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Detect iOS & standalone
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !(window as Window & { MSStream?: unknown }).MSStream
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    // Listen for desktop/Android install event
    window.addEventListener("appinstalled", () => {
      setIsStandalone(true);
    });

    // Listen for the beforeinstallprompt event
    function handleBeforeInstallPrompt(e: Event) {
      e.preventDefault();
      setDeferredPrompt(e); // save the event so we can call prompt() later
    }
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  if (isStandalone) {
    // Don’t show an install button if app is in standalone mode
    return null;
  }

  async function handleInstallClick() {
    if (!deferredPrompt) return;
    // Show the install prompt
    (deferredPrompt as any).prompt();
    const { outcome } = await (deferredPrompt as any).userChoice;
    // Reset it so it can’t be used again
    setDeferredPrompt(null);
    console.log("User response to the install prompt:", outcome);
  }

  return (
    <div>
      {/* <button 
        onClick={handleInstallClick}
        className="bg-[#a8d4e8] text-black px-4 py-2 rounded-md border border-gray-300 text-gray-700 text-sm font-medium shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer"
      >
        Install App
      </button> */}
      {deferredPrompt && (
        <button
          onClick={handleInstallClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md border border-gray-300 text-sm font-medium shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer"
        >
          Install App
        </button>
      )}
     {!deferredPrompt && !isStandalone && (
  <p className="mx-auto p-6 max-w-2xl">
    App installation is not available in this browser mode. If you are using private or incognito browsing, try switching to a regular window. Otherwise, you can add this app to your home screen manually using your browser&apos;s menu (look for “Add to Home Screen” or similar).
  </p>
)}

      {isIOS && (
        <p>
          On iOS, tap the share button{" "}
          <span role="img" aria-label="share icon">
            ⎋
          </span>{" "}
          then “Add to Home Screen”{" "}
          <span role="img" aria-label="plus icon">
            ➕
          </span>
          .
        </p>
      )}
    </div>
  );
}