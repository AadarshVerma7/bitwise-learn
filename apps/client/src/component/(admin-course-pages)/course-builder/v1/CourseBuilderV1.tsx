"use client"

import React, { useState } from 'react'
import AddAssignment from '../../add-assignment/AddAssignment'
import AddSection from '../../add-section/v1/AddSectionV1'

import { Trash2 } from "lucide-react";

const courseName = "Demo Course"
const instructorName = "John Doe"

const CourseBuilderV1 = () => {

  const [blocks, setBlocks] = useState([
    { id: 1, type: "section" }
  ])

  const addSection = () => {
    setBlocks(prev => [
      ...prev,
      { id: Date.now(), type: "section" }
    ])
  }

  const addAssignment = () => {
    setBlocks(prev => [
      ...prev,
      { id: Date.now(), type: "assignment" }
    ])
  }
  return (
    <div className='p-4 pt-0'>
      {/* top nav */}
      <div className='flex items-center justify-between'>
        <h1 className='text-white text-2xl'>{courseName} by {instructorName}</h1>

        <div className="flex gap-3 mt-4">
          <button
            className="px-3 py-1.5 text-sm rounded-md
               border border-slate-700 text-sky-300
               hover:border-sky-500 transition">
            Upload Certificate
          </button>

          <button
            className="px-3 py-1.5 text-sm rounded-md
               border border-slate-700 text-sky-300
               hover:border-sky-500 transition">
            Upload Thumbnail
          </button>

          <button
            className="px-4 py-1.5 text-sm rounded-md
               bg-sky-600 text-black font-medium
               hover:bg-sky-500 transition">
            Publish
          </button>
        </div>

      </div>

      {/* course creation section  */}
      <div className="mt-10 space-y-8">
        {blocks.map((block, index) => {
          if (block.type === "section") {
            return (
              <AddSection
                key={block.id}
                sectionNumber={
                  blocks
                    .filter(b => b.type === "section")
                    .findIndex(b => b.id === block.id) + 1
                }
              />
            );
          }

          if (block.type === "assignment") {
            return <AddAssignment key={block.id} />;
          }

          return null;
        })}
      </div>



      {/* section/assignment buttons  */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={addSection}
          className="px-3 py-1.5 text-sm rounded-md bg-slate-800 text-sky-300 hover:bg-slate-700 transition">
          + Add Section
        </button>

        <button
          onClick={addAssignment}
          className="px-3 py-1.5 text-sm rounded-md bg-slate-800 text-sky-300 hover:bg-slate-700 transition">
          + Add Assignment
        </button>
      </div>


      {/* Floating Delete Button */}
      <button
        onClick={() => {
          console.log("Delete clicked");
        }}
        className="
          fixed bottom-6 right-6
          flex items-center gap-2
          px-4 py-3
          rounded-full

         bg-red-500/15
          backdrop-blur-md
          border border-red-500/30

         text-red-300
          shadow-lg

         hover:border-red-400/60
          hover:shadow-[0_0_18px_rgba(239,68,68,0.25)]
          hover:scale-102 transition"
      >
        <Trash2 size={18} />
        Delete
      </button>


    </div>
  )
}

export default CourseBuilderV1