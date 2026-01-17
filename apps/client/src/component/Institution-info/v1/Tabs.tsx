import BatchesForm from "@/component/general/BatchesForm";
import CourseForm from "@/component/general/CourseForm";
import TeacherForm from "@/component/general/TeacherForm";
import VendorForm from "@/component/general/VendorForm";
import { Plus, X } from "lucide-react";
import { useState } from "react";

type TabsProps = {
  value: string;
  onValueChange: (value: string) => void;
};

const RenderComponent = ({ value }: { value: string }) => {
  switch (value) {
    case "Teachers":
      return <TeacherForm />;
    case "Batches":
      return <BatchesForm />;
    case "Vendors":
      return <VendorForm />;
    case "Courses":
      return <CourseForm />;
    default:
      return null;
  }
};

export const Tabs = ({ value, onValueChange }: TabsProps) => {
  const [addNew, setAddNew] = useState(false);
  const tabs = ["Teachers", "Batches", "Vendors", "Courses"];

  return (
    <>
      {addNew && (
        <div className="fixed inset-0 z-50 bg-black/80 text-white flex justify-center items-center">
          <div className="relative bg-neutral-900 p-6 rounded-lg w-full max-w-3xl">
            <button
              onClick={() => setAddNew(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X />
            </button>

            <RenderComponent value={value} />
          </div>
        </div>
      )}

      <div className="flex items-center gap-6">
        <div className="flex gap-4 px-5 my-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onValueChange(tab)}
              className={`px-4 py-1.5 rounded-md text-md transition ${
                value === tab
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          onClick={() => setAddNew(true)}
          className="flex items-center gap-2 border border-primaryBlue px-3 py-2 rounded text-white hover:bg-primaryBlue/10"
        >
          <Plus size={18} />
          Add New {value}
        </button>
      </div>
    </>
  );
};
