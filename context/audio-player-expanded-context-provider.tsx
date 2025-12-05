"use client";
import React, { createContext, useContext, useState } from "react";

type AudioPlayerExpandedContextType = {
  isAudioPlayerExpanded: boolean;
  setIsAudioPlayerExpanded: (val: boolean) => void;
};

const AudioPlayerExpandedContext = createContext<AudioPlayerExpandedContextType | undefined>(undefined);

export function AudioPlayerExpandedContextProvider({ children }: { children: React.ReactNode }) {
  const [isAudioPlayerExpanded, setIsAudioPlayerExpanded] = useState<boolean>(false);
  return (
    <AudioPlayerExpandedContext.Provider value={{ isAudioPlayerExpanded, setIsAudioPlayerExpanded }}>
      {children}
    </AudioPlayerExpandedContext.Provider>
  );
}

export function useAudioPlayerExpanded() {
  const context = useContext(AudioPlayerExpandedContext);
  if (context === undefined) {
    throw new Error("useAudioPlayerExpanded must be used within an AudioPlayerExpandedContextProvider");
  }
  return context;
}