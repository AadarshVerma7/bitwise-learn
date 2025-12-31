"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import SectionCard from "./SectionCard";

type Topic = {
  title: string;
  duration: string;
  completed?: boolean;
};

type Section = {
  id: number;
  title: string;
  locked?: boolean;
  topics: Topic[];
};

const initialSections: Section[] = [
  {
    id: 1,
    title: "Learn the basics",
    topics: [
      { title: "Topic - 1", duration: "0:56", completed: true },
      { title: "Topic - 2", duration: "1:23" },
      { title: "Topic - 3", duration: "1:45" },
      { title: "Topic - 4", duration: "2:00" },
    ],
  },
  {
    id: 2,
    title: "Learn the basics - 2",
    locked: true,
    topics: [
      { title: "Topic - 1", duration: "1:10" },
      { title: "Topic - 2", duration: "2:00" },
    ],
  },
  {
    id: 3,
    title: "Learn the basics - 3",
    locked: true,
    topics: []
  },
];

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

export default function LeftSection() {
  const [IsOpen, setIsOpen] = useState(false);
  const [sections, setSections] = useState(initialSections);

  const updateTopic = (sectionIndex: number, topicIndex: number) => {
    setSections((prev) => {
      const updated = structuredClone(prev);

      const topic = updated[sectionIndex].topics[topicIndex];
      topic.completed = !topic.completed;

      const allCompleted = updated[sectionIndex].topics.every(
        (t) => t.completed
      );

      // 🔓 Unlock next section
      if (allCompleted && updated[sectionIndex + 1]) {
        updated[sectionIndex + 1].locked = false;
      }

      return updated;
    });
  };

  return (
    <div
      className={`${colors.secondary_Bg} p-4 w-full h-full rounded-xl flex flex-col gap-3`}
    >
      <button
        className={`${colors.primary_Bg} p-2 rounded-sm w-fit`}
        onClick={() => setIsOpen(!IsOpen)}
      >
        <Menu size={25} color={colors.primary_Icon} />
      </button>

      <div className="flex-1 w-full flex flex-col gap-4">
        {sections.map((section, i) => (
          <SectionCard
            key={section.id}
            section={section}
            sectionIndex={i}
            onToggleTopic={updateTopic}
          />
        ))}
      </div>
    </div>
  );
}
