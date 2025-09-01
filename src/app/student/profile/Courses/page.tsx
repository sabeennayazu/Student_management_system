"use client";

import { useState, useRef, useEffect } from "react";
import { 
  MoreVertical, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  User, 
  Eye 
} from "lucide-react";

export default function CourseProgressPage() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const courses = [
    { 
      name: "Introduction to Robotics", 
      progress: 85, 
      category: "Engineering",
      duration: "12 weeks",
      instructor: "Dr. Smith",
      status: "In Progress"
    },
    { 
      name: "IoT & Smart Devices", 
      progress: 70, 
      category: "Technology",
      duration: "10 weeks",
      instructor: "Prof. Johnson",
      status: "In Progress"
    },
    { 
      name: "Arduino & Embedded Systems", 
      progress: 60, 
      category: "Programming",
      duration: "8 weeks",
      instructor: "Mr. Wilson",
      status: "In Progress"
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Engineering": return "bg-blue-50 text-blue-700 border-blue-200";
      case "Technology": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Programming": return "bg-purple-50 text-purple-700 border-purple-200";
      case "Design": return "bg-orange-50 text-orange-700 border-orange-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-emerald-500";
    if (progress >= 60) return "bg-blue-500";
    if (progress >= 40) return "bg-orange-500";
    return "bg-purple-500";
  };

  // 🔹 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-8  bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-light text-gray-900 mb-2">Course Progress</h1>
          <p className="text-gray-600">Track your learning journey across different subjects</p>
        </div>

        {/* Menu */}
        <div className="relative" ref={menuRef}>
          <button
            className="p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MoreVertical className="w-5 h-5 text-gray-400" />
          </button>
          {openMenu && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
              <button className="flex items-center gap-3 w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <BookOpen className="w-4 h-4" />
                View All Courses
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl border border-gray-300 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white"
          >
            {/* Title + Category */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900">{course.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(course.category)}`}>
                    {course.category}
                  </span>
                </div>
                {/* Metadata */}
                <div className="flex items-center gap-6 text-sm text-gray-700 opacity-90">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {course.instructor}
                  </span>
                </div>
              </div>
              {/* Status */}
              <span className="flex items-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                <CheckCircle className="w-4 h-4" />
                {course.status}
              </span>
            </div>

            {/* Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 opacity-90">Progress</span>
                <span className="font-medium text-gray-900">{course.progress}% Complete</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(course.progress)}`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-gray-50">
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                <Eye className="w-4 h-4" />
                View Course Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
