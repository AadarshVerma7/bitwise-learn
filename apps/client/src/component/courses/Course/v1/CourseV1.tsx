"use client";

import { useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

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
};

export default function CourseV1() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={`${colors.primary_Bg} min-h-screen grid grid-cols-3 p-4 gap-4`}>
      <div className={`col-span-1 rounded-xl`}><LeftSection /></div>
      <div className={`h-full w-full col-span-2 rounded-xl`}><RightSection /></div>
    </div>
  );
}
