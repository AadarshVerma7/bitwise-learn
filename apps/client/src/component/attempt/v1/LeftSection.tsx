import React from "react";

import "./assignment.css";

type Props = {
  question: string;
  currentIndex: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
};


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

export default function LeftSection({
  question,
  currentIndex,
  totalQuestions,
  onNext,
  onPrevious,
}: Props) {
  return (
    <div
      className={`flex flex-col justify-between font-mono ${colors.primary_Font} ${colors.secondary_Bg} h-full p-4 rounded-lg`}
    >
      <div
        className={`${colors.primary_Bg} p-4 rounded-lg mb-4 overflow-y-auto`}
      >
        <p className="text-lg">
          {question}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <button onClick={onPrevious} disabled={currentIndex === 0}
          className={`${colors.primary_Bg} group px-8 py-2 rounded-md hover:scale-105`}
        >
          <p className="button-wrap-left">Previous</p>
        </button>
        <div>
          <span>Question: </span>{" "}
          <span className={`${colors.special_Font}`}>{currentIndex + 1}</span> <span> / </span>
          <span>{totalQuestions}</span>
        </div>
        <button
          onClick={onNext}
          disabled={currentIndex === totalQuestions - 1}
          className={`${colors.primary_Bg} group px-8 py-2 rounded-md hover:scale-105 hover:opacity-90`}
        >
          <p className="button-wrap-right">Next</p>
        </button>
      </div>
    </div>
  );
}
