"use client";
import { createContext, useState } from "react";

interface activeTabContextType {
  activeTab: "step1" | "step2" | "step3" | "step4";
  setActiveTab: React.Dispatch<
    React.SetStateAction<"step1" | "step2" | "step3" | "step4">
  >;
}

export const tabContext = createContext<activeTabContextType>({
  activeTab: "step1",
  setActiveTab: () => {},
});

export const ActiveTabContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState<
    "step1" | "step2" | "step3" | "step4"
  >("step1");
  console.log("active", activeTab);
  return (
    <tabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </tabContext.Provider>
  );
};
