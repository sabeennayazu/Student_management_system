"use client";

import { useState } from "react";
import { MoreVertical, Plus, Award } from "lucide-react";

export default function SkillsPage() {
  const [openMenu, setOpenMenu] = useState(false);

  const skills = [
    "Arduino Programming",
    "Raspberry Pi",
    "IoT & Sensors",
    "Robotics (Motors & Actuators)",
    "3D Design & Printing",
    "Drone Technology",
  ];

  return (
    <div className="p-8 border-l-8 border-purple-500 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-black">Skills & Expertise</h1>

        <div className="relative">
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MoreVertical className="w-5 h-5 text-black" />
          </button>

          {openMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-md border border-gray-200 z-10">
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-black hover:bg-gray-100">
                <Plus className="w-4 h-4" />
                Add Skill
              </button>
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-black hover:bg-gray-100">
                <Award className="w-4 h-4" />
                Edit Skills
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-black">{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
