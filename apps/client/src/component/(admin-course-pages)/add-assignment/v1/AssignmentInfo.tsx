"use client";

import React, { useState } from "react";
import { Colors } from "@/component/general/Colors";

export default function AssignmentInfo({
  assignment,
  setAssignment,
  locked,
}: any) {
  const update = (key: string, value: any) =>
    setAssignment({ ...assignment, [key]: value });
  // const [title, setTitle] = useState("");
  return (
    <div className="flex w-1/2 flex-col gap-6">
      <h1 className={`${Colors.text.primary} font-semibold text-xl`}>
        {assignment.title || "Assignment Title"}
      </h1>
      {/* Assignment Name */}
      <div className="flex flex-col gap-2">
        <input
          disabled={locked}
          placeholder="Title: Example Title"
          value={assignment.title}
          className={`h-10 w-full rounded-lg ${Colors.text.primary} p-2 ${Colors.background.secondary} ${Colors.border.fadedThin} text-sm placeholder:text-white/40 disabled:opacity-50`}
          onChange={(e) => update("title", e.target.value)}
        />
      </div>

      {/* Assignment Description */}
      <div className="flex flex-col gap-2">
        <textarea
          disabled={locked}
          placeholder="Description: Example Description"
          value={assignment.description}
          className={`h-20 w-full no-scrollbar rounded-lg ${Colors.text.primary} p-2 ${Colors.background.secondary} ${Colors.border.fadedThin} resize-none text-sm placeholder:text-white/40 disabled:opacity-50`}
          onChange={(e) => update("description", e.target.value)}
        />
      </div>

      {/* Assignment Instructions */}
      <div className="flex flex-col gap-2">
        <textarea
          disabled={locked}
          placeholder="Instructions: Example Instruction"
          value={assignment.instructions}
          className={`h-20 w-full no-scrollbar rounded-lg ${Colors.text.primary} p-2 ${Colors.background.secondary} ${Colors.border.fadedThin} resize-none text-sm placeholder:text-white/40 disabled:opacity-50`}
          onChange={(e) => update("instructions", e.target.value)}
        />
      </div>

      {/* Marks Per Question */}
      <div className="flex items-center justify-between gap-4">
        <input
          disabled={locked}
          type="number"
          placeholder="Marks Per Question"
          value={assignment.marksPerQuestion}
          className={`h-8 w-1/2 rounded-lg ${Colors.text.primary} p-2 ${Colors.background.secondary} ${Colors.border.fadedThin} text-sm placeholder:text-white/40 disabled:opacity-50`}
          onChange={(e) => update("marksPerQuestion", +e.target.value)}
        />
      </div>
    </div>
  );
}
