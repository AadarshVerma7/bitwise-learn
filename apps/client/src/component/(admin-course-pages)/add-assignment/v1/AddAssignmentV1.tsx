"use client";

import React, { useState } from "react";
import AssignmentInfo from "./AssignmentInfo";
import QuestionEditor from "./QuestionEditor";
import { Colors } from "@/component/general/Colors";
import { v4 as uuid } from "uuid";

export default function AddAssignmentV1() {
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    instructions: "",
    marksPerQuestion: 0,
    questions: [
      {
        id: uuid(),
        text: "",
        options: [{ id: uuid(), text: "", isCorrect: false }],
      },
    ],
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [locked, setLocked] = useState(false);

  const currentQuestion = assignment.questions[currentIndex];

  const saveQuestion = (updatedQuestion: any) => {
    const updatedQuestions = [...assignment.questions];
    updatedQuestions[currentIndex] = updatedQuestion;
    setAssignment({ ...assignment, questions: updatedQuestions });
  };

  const addNewQuestion = () => {
    setAssignment({
      ...assignment,
      questions: [
        ...assignment.questions,
        {
          id: uuid(),
          text: "",
          options: [{ id: uuid(), text: "", isCorrect: false }],
        },
      ],
    });
    setCurrentIndex(assignment.questions.length);
  };

  return (
    <div className="my-6">
      <div
        className={`${Colors.background.secondary} ${Colors.border} rounded-xl w-[90%] max-w-6xl min-h-[60%] p-6`}
      >
        <div className="flex h-full gap-6">
          {/* LEFT SECTION */}
          <AssignmentInfo
            assignment={assignment}
            setAssignment={setAssignment}
            locked={locked}
          />

          {/* VERTICAL DIVIDER */}
          <div className={`w-px ${Colors.border.fadedThin}`} />

          {/* RIGHT SECTION */}
          <QuestionEditor
            question={currentQuestion}
            index={currentIndex}
            total={assignment.questions.length}
            saveQuestion={saveQuestion}
            onPrev={() => setCurrentIndex((i) => i - 1)}
            onNext={() => setCurrentIndex((i) => i + 1)}
            onNew={addNewQuestion}
            onSubmit={() => setLocked(true)}
            locked={locked}
            onEdit={() => setLocked(false)}
          />
        </div>
      </div>
    </div>
  );
}
