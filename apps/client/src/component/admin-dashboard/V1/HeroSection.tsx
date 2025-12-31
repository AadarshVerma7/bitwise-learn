"use client"
import {Plus, Check, Trash, PenLine, User, KeyRound, School, Handshake, BookOpen, Search, SlidersHorizontal, MoreHorizontal } from "lucide-react";
import { useState } from "react";

type fieldtype = "Admins" | "Partners" | "Institutions" | "Batches"


export default function HeroSection() {
    const [data, setData] = useState({
        Admins: [
            { id: 1, name: "Admin 1" },
            { id: 2, name: "Admin 2" },
            { id: 3, name: "Admin 3" },
            { id: 4, name: "Admin 4" },
            { id: 5, name: "Admin 5" },
        ],
        Partners: [
            { id: 1, name: "Partner A" },
            { id: 2, name: "Partner B" },
        ],
        Institutions: [
            { id: 1, name: "Institution X" },
            { id: 2, name: "Institution Y" },
        ],
        Batches: [
            { id: 1, name: "Batch 2024" },
            { id: 2, name: "Batch 2025" },
        ],
    });

    const admin_name = "Britto Anand"
    const admin_email = "brittoanand@example.com"

    const [field, setField] = useState<fieldtype>("Admins");

    const currentData = data[field];

    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingValue, setEditingValue] = useState("");

    function handleEditSave(id: number) {
        setData((prev) => ({
            ...prev,
            [field]: prev[field].map((item) =>
                item.id === id ? { ...item, name: editingValue } : item
            ),
        }));

        setEditingId(null);
        setEditingValue("");
    }

    const fieldIcons = {
        Admins: KeyRound,
        Partners: Handshake,
        Institutions: School,
        Batches: BookOpen,
    };

    const ActiveIcon = fieldIcons[field];

    function handleDelete(id: Number) {
        setData((prev) => ({
            ...prev,
            [field]: prev[field].filter((item) => item.id !== id),
        }));
    }

    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = currentData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [isAdding, setIsAdding] = useState(false);
    const [newValue, setNewValue] = useState("");

    function handleAdd() {
        if (!newValue.trim()) return;

        setData((prev) => ({
            ...prev,
            [field]: [
                ...prev[field],
                {
                    id: Date.now(),
                    name: newValue,
                },
            ],
        }));

        setNewValue("");
        setIsAdding(false);
    }

    return (
        <>
            {/* Top-Most Section  */}
            <div className="flex justify-between p-4">
                <div>
                    <span className="text-primaryBlue text-5xl">Greetings,</span>{" "}
                    <span className="text-white text-5xl">Admin</span>
                    <div className="mt-2 text-lg">
                        <span className="text-white">Enjoy managing</span>{" "}
                        <span className="text-primaryBlue">B</span>
                        <span className="text-white">itwise Learn</span>
                    </div>
                </div>

                <div className="flex mr-11">
                    <div className="p-8 bg-white rounded-full flex justify-center items-center">
                        <User size={35} color="black" />
                    </div>
                    <div className="text-white flex flex-col mt-3 ml-4">
                        <h1 className="text-3xl">{admin_name}</h1>
                        <p>{admin_email}</p>
                    </div>
                </div>
            </div>

            {/* Select field type*/}
            <div className="bg-divBg mr-40 ml-20 mt-4 flex rounded-2xl">

                <div className="relative flex flex-1 items-center justify-center py-4">
                    <button
                        onClick={() => {
                            setField("Admins")
                            setSearchTerm("");
                        }}
                        className="flex flex-col items-center hover:scale-105 transition transform duration-200">
                        <KeyRound size={30} color="white" />
                        <h1 className="text-white text-lg">Admins</h1>
                    </button>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[2px] bg-white" />
                </div>

                <div className="relative flex flex-1 items-center justify-center py-4">
                    <button
                        onClick={() => {
                            setField("Partners")
                            setSearchTerm("");
                        }}
                        className="flex flex-col items-center hover:scale-105 transition transform duration-200">
                        <Handshake size={30} color="white" />
                        <h1 className="text-white text-lg">Partners</h1>
                    </button>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[2px] bg-white" />
                </div>

                <div className="relative flex flex-1 items-center justify-center py-4">
                    <button
                        onClick={() => {
                            setField("Institutions")
                            setSearchTerm("");
                        }}
                        className="flex flex-col items-center hover:scale-105 transition transform duration-200">
                        <School size={30} color="white" />
                        <h1 className="text-white text-lg">Institutions</h1>
                    </button>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[2px] bg-white" />
                </div>

                <div className="flex flex-1 items-center justify-center py-4">
                    <button
                        onClick={() => {
                            setField("Batches")
                            setSearchTerm("");
                        }}
                        className="flex flex-col items-center hover:scale-105 transition transform duration-200">
                        <BookOpen size={30} color="white" />
                        <h1 className="text-white text-lg">Batches</h1>
                    </button>
                </div>
            </div>

            {/* Search,Filter & More options */}
            <div className="flex items-center justify-between mt-6 ml-20 mr-40">

                {/* Search bar */}
                <div className="flex items-center bg-divBg rounded-xl px-4 py-3 w-[55%]">
                    <Search size={20} className="text-primaryBlue mr-3" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none text-white w-full"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-4">

                    {/* Filter */}
                    <button className="flex items-center gap-2 bg-primaryBlue px-5 py-3 rounded-xl text-black font-medium hover:opacity-90 transition">
                        <SlidersHorizontal size={20} />
                        Filter
                    </button>

                    {/* Options */}
                    <button className="flex items-center gap-2 bg-primaryBlue px-5 py-3 rounded-xl text-black font-medium hover:opacity-90 transition">
                        <MoreHorizontal size={20} />
                        Options
                    </button>

                </div>
            </div>

            {/* Data List Section */}
            <div className="bg-divBg ml-5 mr-15 mt-6 rounded-2xl p-4">

                {/* Section Title */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <ActiveIcon size={20} className="text-white" />
                        <h1 className="text-white text-lg font-semibold">{field}</h1>
                    </div>

                    <button
                        onClick={() => setIsAdding(true)}
                        className="text-primaryBlue hover:scale-110 transition"
                    >
                        <Plus />
                    </button>
                </div>


                {/* Scrollable List */}
                <div className="max-h-[320px] overflow-y-auto space-y-3 pr-2">
                    {filteredData.length === 0 && (
                        <div className="text-neutral-400 text-center py-6">
                            No {field.toLowerCase()} found
                        </div>
                    )}

                    {isAdding && (
                        <div className="flex items-center gap-3 bg-black/30 px-4 py-3 rounded-xl">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                <User size={16} color="black" />
                            </div>

                            <input
                                value={newValue}
                                onChange={(e) => setNewValue(e.target.value)}
                                placeholder={`New ${field.slice(0, -1)}`}
                                className="bg-transparent border-b border-primaryBlue outline-none text-white flex-1"
                                autoFocus
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleAdd();
                                    if (e.key === "Escape") {
                                        setIsAdding(false);
                                        setNewValue("");
                                    }
                                }}
                            />

                            <button
                                onClick={handleAdd}
                                className="text-primaryBlue hover:scale-110 transition"
                            >
                                <Check />
                            </button>
                        </div>
                    )}


                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-black/30 px-4 py-3 rounded-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                    <User size={16} color="black" />
                                </div>
                                {editingId === item.id ? (
                                    <input
                                        value={editingValue}
                                        onChange={(e) => setEditingValue(e.target.value)}
                                        className="bg-transparent border-b border-primaryBlue outline-none text-white"
                                        autoFocus
                                        onBlur={() => handleEditSave(item.id)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                handleEditSave(item.id);
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="text-white">{item.name}</span>
                                )}

                            </div>

                            <div className="flex items-center gap-4 ">
                                <button
                                    onClick={() => {
                                        setEditingId(item.id);
                                        setEditingValue(item.name);
                                    }}
                                    className="text-primaryBlue hover:scale-110 transition">
                                    <PenLine />
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="text-red-500 hover:scale-110 transition">
                                    <Trash />
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </>
    )
}