"use client";

import "./assignment.css";
import { RefreshCcw, LogOut } from "lucide-react";

type Props = {
  assignmentName: string;
  choices: string[];
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
  onResetCurrentAnswer: () => void;
  onJumpToQuestion: (index: number) => void;
  onExit: () => void;
  onSubmit: () => void;
  questionIds: string[];
  userAnswers: Record<string, string | null>;
};

const colors = {
  primary_Bg: "bg-[#121313]",
  secondary_Bg: "bg-[#1E1E1E]",
  primary_Font: "text-[#FFFFFF]",
  special_Border: "border-2 border-[#64ACFF]",
  primary_Border: "border-2 border-[#1E1E1E]",
  attempted_Border: "border-2 border-[#129274]",
};

export default function RightSection({
  assignmentName,
  choices,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onResetCurrentAnswer,
  onJumpToQuestion,
  onExit,
  onSubmit,
  questionIds,
  userAnswers,
}: Props) {
  return (
    <div
      className={`h-full w-full flex flex-col ${colors.primary_Font} ${colors.secondary_Bg} rounded-xl p-4`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onExit}
          className={`p-2 rounded-md hover:opacity-80 ${colors.primary_Bg}`}
        >
          <LogOut />
        </button>

        <h1 className="text-lg font-semibold">
          <span className="text-[#64ACFF]">
            {assignmentName.split(" ")[0]}{" "}
          </span>
          <span>{assignmentName.slice(assignmentName.indexOf(" "))}</span>
        </h1>

        <div className="flex gap-3">
          <button
            onClick={onResetCurrentAnswer}
            className={`p-2 rounded-md hover:opacity-80 ${colors.primary_Bg}`}
          >
            <RefreshCcw className="transition-transform duration-700 group-active:rotate-[-360deg]" />
          </button>

          <button
            onClick={onSubmit}
            className={`${colors.primary_Bg} px-4 py-1 rounded-md hover:opacity-80`}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-4 flex-1">
        {choices.map((choice) => {
          const isSelected = selectedAnswer === choice;

          return (
            <button
              key={choice}
              onClick={() => onSelectAnswer(choice)}
              className={`
                flex items-center justify-between
                ${colors.primary_Bg}
                px-4 py-4 rounded-lg
                transition-all
                ${isSelected ? colors.special_Border : colors.primary_Border}
              `}
            >
              <span>{choice}</span>
              {isSelected && <span className="text-green-600 font-bold">✓</span>}
            </button>
          );
        })}
      </div>

      {/* Question Navigation */}
      <div className="flex gap-2 overflow-x-auto mt-auto">
        {Array.from({ length: totalQuestions }).map((_, i) => {
          const answered =
            userAnswers[questionIds[i]] != null;

          return (
            <button
              key={i}
              onClick={() => onJumpToQuestion(i)}
              className={`
                px-3 py-1 rounded-md ${colors.primary_Bg}
                ${
                  i === currentIndex
                    ? colors.special_Border
                    : answered
                    ? colors.attempted_Border
                    : colors.primary_Border
                }
              `}
            >
              Q{i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
