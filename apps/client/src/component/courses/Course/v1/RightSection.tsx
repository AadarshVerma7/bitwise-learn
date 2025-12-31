"use client";

import { useState } from "react";
import Study from "./Study";
import Assignments from "./Assignments";

type ActiveTab = "study" | "assignments";


const colors = {
  primary_Bg: "bg-[#121313]",
  secondary_Bg: "bg-[#1E1E1E]",
  primary_Hero: "bg-[#129274]",
  primary_Hero_Faded: "bg-[rgb(18, 146, 116, 0.24)]",
  secondary_Hero: "bg-[#64ACFF]",
  secondary_Hero_Faded: "bg-[rgb(100, 172, 255, 0.56)]",
  primary_Font: "text-[#FFFFFF]",
  secondary_Font: "text-[#B1AAA6]",
  special_Font: "text-[#64ACFF]",
  accent: "#B1AAA6",
  accent_Faded: "bg-[rgb(177, 170, 166, 0.41)]",
  primary_Icon: "white",
  secondary_Icon: "black",
  special_Icon: "#64ACFF",
  border_Accent: "border-gray-600",
};

export default function RightSection() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("study");

  return (
    <div
      className={`${colors.secondary_Bg} p-4 w-full h-full rounded-xl flex flex-col gap-4 font-mono ${colors.primary_Font}`}
    >
      {/* TOP TOGGLE */}
      <div
        className={`${colors.primary_Bg} w-fit flex items-center mx-auto py-2 px-6 rounded-md gap-6`}
      >
        <button
          onClick={() => setActiveTab("study")}
          disabled={activeTab === "study"}
          className={`text-xl rounded-md px-4 py-2 transition
            ${
              activeTab === "study"
                ? "bg-gray-600 cursor-not-allowed"
                : colors.secondary_Hero
            }`}
        >
          Study
        </button>

        <div className={`border ${colors.border_Accent} h-full`} />

        <button
          onClick={() => setActiveTab("assignments")}
          disabled={activeTab === "assignments"}
          className={`text-xl rounded-md px-4 py-2 transition
            ${
              activeTab === "assignments"
                ? "bg-gray-600 cursor-not-allowed"
                : colors.secondary_Hero
            }`}
        >
          Assignments
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 w-full overflow-hidden">
        {activeTab === "study" && <Study />}
        {activeTab === "assignments" && <Assignments />}
      </div>
    </div>
  );
}