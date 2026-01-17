"use client";

import { useState } from "react";
import { X, Pencil, Trash2 } from "lucide-react";

type CompanyData = {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  createdAt: string;
  updatedAt: string;
};

type UpdatePayload = {
  entity: "vendor";
  data: CompanyData;
};

type DeletePayload = {
  entity: "vendor";
  id: string;
};

type Props = {
  data: CompanyData[];
  onUpdate: (payload: UpdatePayload) => void;
  onDelete: (payload: DeletePayload) => void;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

function formatValue(value: any) {
  if (value === null || value === undefined) return "—";
  if (typeof value === "string" && value.includes("T")) {
    const date = new Date(value);
    if (!isNaN(date.getTime())) return date.toLocaleString();
  }
  return String(value);
}

export default function DashboardInfo({ data, onUpdate, onDelete }: Props) {
  const [selected, setSelected] = useState<CompanyData | null>(null);

  /* ------------------ HANDLERS ------------------ */

  const handleUpdate = () => {
    if (!selected) return;

    onUpdate({
      entity: "vendor",
      data: selected,
    });
  };

  const handleDelete = () => {
    if (!selected) return;

    onDelete({
      entity: "vendor",
      id: selected.id,
    });

    setSelected(null);
  };

  /* ---------------------------------------------- */

  if (!data || data.length === 0) {
    return (
      <div className="py-12 my-12 text-center text-sm text-white/50">
        No companies found
      </div>
    );
  }

  return (
    <>
      {/* Table */}
      <div className="w-full overflow-y-auto border border-white/10 bg-divBg shadow-lg">
        <table className="w-full">
          <thead className="bg-black/30">
            <tr className="text-left text-[11px] font-semibold uppercase tracking-wide text-white/40">
              <th className="px-6 py-4">Company Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Created</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {data.map((company) => (
              <tr
                key={company.id}
                className="text-sm text-white transition hover:bg-primaryBlue/10"
              >
                <td className="px-6 py-4 font-medium">{company.name}</td>
                <td className="px-6 py-4 text-white/70">{company.email}</td>
                <td className="px-6 py-4 text-white/70">
                  {company.phoneNumber || "—"}
                </td>
                <td className="px-6 py-4 text-white/60">
                  {formatDate(company.createdAt)}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => setSelected(company)}
                    className="rounded-md border border-primaryBlue/40 px-3 py-1.5 text-xs font-medium text-primaryBlue transition hover:bg-primaryBlue/20"
                  >
                    See details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-divBg p-6 shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 text-white/50 hover:text-white transition"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-6 mt-6 flex  items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Company Details
                </h2>
                <p className="mt-1 text-sm text-white/40">ID: {selected.id}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={handleUpdate}
                  className="flex items-center gap-1 rounded-md border border-primaryBlue/40 px-3 py-1.5 text-xs font-medium text-primaryBlue transition hover:bg-primaryBlue/20"
                >
                  <Pencil size={14} />
                  Edit
                </button>

                <button
                  onClick={handleDelete}
                  className="flex items-center gap-1 rounded-md border border-red-500/40 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-red-500/20"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              {Object.entries(selected).map(([key, value]) => (
                <div key={key}>
                  <p className="mb-1 mt-2 text-[11px] uppercase tracking-wide text-primaryBlue">
                    {key.replace(/_/g, " ")}
                  </p>
                  <p className="break-words text-sm text-white">
                    {formatValue(value)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
