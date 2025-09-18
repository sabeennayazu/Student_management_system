"use client";

import { useState, useRef, useEffect } from "react";
import { MoreVertical, Plus, Award, BookOpen, Clock } from "lucide-react";
import DialogBox from "../../components/dialog/page";

export default function SkillsPage() {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<null | Skill>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const skills: Skill[] = [
    {
      title: "Arduino Programming",
      institute: "ABC Institute",
      period: "Jan 2023 - Mar 2023",
      level: "Intermediate",
      description:
        "Learned microcontroller programming, sensor integration, and automation projects.",
    },
    {
      title: "Raspberry Pi",
      institute: "XYZ College",
      period: "Apr 2023 - Jun 2023",
      level: "Beginner",
      description:
        "Hands-on projects with Raspberry Pi, GPIO control, and Linux basics.",
    },
    {
      title: "IoT & Sensors",
      institute: "Tech Lab",
      period: "Jul 2023 - Sep 2023",
      level: "Advanced",
      description:
        "Implemented IoT solutions, real-time data collection, and cloud integration.",
    },
    {
      title: "Robotics (Motors & Actuators)",
      institute: "Robotics Academy",
      period: "Oct 2023 - Dec 2023",
      level: "Expert",
      description:
        "Designed and controlled robotic systems using motors, actuators, and sensors.",
    },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    }

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-black">Skills & Expertise</h1>
        <div className="relative" ref={menuRef}>
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MoreVertical className="w-5 h-5 text-black" />
          </button>
          {openMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-md border border-gray-200 z-10">
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-black hover:bg-gray-100">
                <Plus className="w-4 h-4" /> Add Skill
              </button>
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-black hover:bg-gray-100">
                <Award className="w-4 h-4" /> Edit Skills
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className="p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <h3 className="font-semibold text-black">{skill.title}</h3>
          </div>
        ))}
      </div>

      {/* ✅ DialogBox is still controlled here, but rendered globally */}
     <DialogBox
  isOpen={!!selectedSkill}
  onClose={() => setSelectedSkill(null)}
  title={selectedSkill?.title || ""}
>
  {selectedSkill && (
    <div className="space-y-4">
      {/* Institute */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
        <BookOpen className="w-6 h-6 text-blue-500 mt-1" />
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Institute / College</h3>
          <p className="text-gray-800">{selectedSkill.institute}</p>
        </div>
      </div>

      {/* Period */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
        <Clock className="w-6 h-6 text-green-500 mt-1" />
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Period</h3>
          <p className="text-gray-800">{selectedSkill.period}</p>
        </div>
      </div>

      {/* Level */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm justify-between">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-yellow-500" />
          <div>
            <h3 className="text-sm font-semibold text-gray-500">Level</h3>
            <p className="text-gray-800">{selectedSkill.level}</p>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
          {selectedSkill.level}
        </span>
      </div>

      {/* Details */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
        <BookOpen className="w-6 h-6 text-purple-500 mt-1" />
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Details</h3>
          <p className="text-gray-800">{selectedSkill.description}</p>
        </div>
      </div>
    </div>
  )}
</DialogBox>

    </div>
  );
}

interface Skill {
  title: string;
  institute: string;
  period: string;
  level: string;
  description: string;
}
