"use client"

import SideBar from "@/component/general/SideBar"
import CourseBuilder from "@/component/(admin-course-pages)/course-builder/CourseBuilder";
import { useState } from "react";

export default function AdminCourse() {

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto px-10 py-10">
                <CourseBuilder />
            </main>
        </div>
    )
}