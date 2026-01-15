"use client";

import { useState } from "react";

type CourseFormData = {
  name: string;
  description: string;
  level: "BASIC" | "INTERMEDIATE" | "ADVANCE";
  duration: string;
  instructorName: string;
  thumbnail: File | null;
  certificate: File | null;
};

const steps = [
  "Title",
  "Description",
  "Level",
  "Duration",
  "Instructor",
  "Assets",
];

const CourseForm = () => {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState<CourseFormData>({
    name: "",
    description: "",
    level: "BASIC",
    duration: "",
    instructorName: "",
    thumbnail: null,
    certificate: null,
  });

  const progress = ((step + 1) / steps.length) * 100;

  const isStepValid = (s = step) => {
    switch (s) {
      case 0:
        return formData.name.trim() !== "";
      case 1:
        return formData.description.trim() !== "";
      case 2:
        return !!formData.level;
      case 3:
        return formData.duration.trim() !== "";
      case 4:
        return formData.instructorName.trim() !== "";
      case 5:
        return !!formData.thumbnail && !!formData.certificate;
      default:
        return false;
    }
  };

  const canNavigateTo = (targetStep: number) => {
    for (let i = 0; i < targetStep; i++) {
      if (!isStepValid(i)) return false;
    }
    return true;
  };

  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-[#1E1E1E] p-8 text-white shadow-2xl">
      {/* Progress */}
      <div className="mb-6 h-1.5 w-full rounded-full bg-neutral-800">
        <div
          className="h-1.5 rounded-full bg-[#64ACFF] transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step Pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        {steps.map((label, i) => {
          const active = i === step;
          const clickable = canNavigateTo(i);

          return (
            <button
              key={label}
              onClick={() => clickable && setStep(i)}
              disabled={!clickable}
              className={`rounded-full px-3 py-1 text-xs font-medium transition
                ${
                  active
                    ? "bg-[#64ACFF] text-black"
                    : "bg-neutral-800 text-neutral-400"
                }
                ${clickable ? "cursor-pointer" : "cursor-not-allowed opacity-40"}
              `}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Card */}
      <div className="rounded-xl bg-[#121313] p-6">
        <h2 className="mb-6 text-xl font-semibold">{steps[step]}</h2>

        {step === 0 && (
          <input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full rounded-lg bg-neutral-900 px-4 py-3 outline-none focus:ring-1 focus:ring-[#64ACFF]"
            placeholder="Course title"
          />
        )}

        {step === 1 && (
          <textarea
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full rounded-lg bg-neutral-900 px-4 py-3 outline-none focus:ring-1 focus:ring-[#64ACFF]"
            placeholder="Course description"
          />
        )}

        {step === 2 && (
          <div className="grid grid-cols-3 gap-4">
            {["BASIC", "INTERMEDIATE", "ADVANCE"].map((lvl) => (
              <button
                key={lvl}
                onClick={() =>
                  setFormData({
                    ...formData,
                    level: lvl as CourseFormData["level"],
                  })
                }
                className={`rounded-lg border px-4 py-3 text-sm transition
                  ${
                    formData.level === lvl
                      ? "border-[#64ACFF] bg-[#64ACFF]/20"
                      : "border-neutral-700 hover:border-neutral-500"
                  }
                `}
              >
                {lvl}
              </button>
            ))}
          </div>
        )}

        {step === 3 && (
          <input
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            className="w-full rounded-lg bg-neutral-900 px-4 py-3 outline-none focus:ring-1 focus:ring-[#64ACFF]"
            placeholder="e.g. 8 weeks"
          />
        )}

        {step === 4 && (
          <input
            value={formData.instructorName}
            onChange={(e) =>
              setFormData({ ...formData, instructorName: e.target.value })
            }
            className="w-full rounded-lg bg-neutral-900 px-4 py-3 outline-none focus:ring-1 focus:ring-[#64ACFF]"
            placeholder="Instructor name"
          />
        )}

        {step === 5 && (
          <div className="space-y-6">
            <label className="block cursor-pointer rounded-xl border border-dashed p-6 text-center hover:border-[#64ACFF]">
              Upload course thumbnail
              <input
                type="file"
                hidden
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    thumbnail: e.target.files?.[0] || null,
                  })
                }
              />
            </label>

            <label className="block cursor-pointer rounded-xl border border-dashed p-6 text-center hover:border-[#64ACFF]">
              Upload certificate
              <input
                type="file"
                hidden
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    certificate: e.target.files?.[0] || null,
                  })
                }
              />
            </label>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mt-8 flex justify-between">
        <button
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
          className="text-sm text-neutral-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>

        {step < steps.length - 1 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={!isStepValid()}
            className="rounded-lg bg-[#64ACFF] px-6 py-2 font-medium text-black
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue →
          </button>
        ) : (
          <button
            onClick={() => console.log(formData)}
            disabled={!isStepValid()}
            className="rounded-lg bg-[#64ACFF] px-6 py-2 font-medium text-black
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Course
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseForm;
