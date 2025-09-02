"use client";
import { useState, useEffect, useRef } from "react";
import {
  MoreVertical,
  FolderOpen,
  Clock,
  CheckCircle,
  Circle,
  Plus,
  Calendar,
  User,
} from "lucide-react";

export default function ProjectsPage() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  const projects = [
    {
      title: "Traffic Lights",
      status: "Completed",
      description: "Arduino-based traffic light control system",
      dueDate: "2025-07-15",
      team: ["John", "Alice"],
    },
    {
      title: "Line Following Robot",
      status: "In Progress",
      description: "Autonomous robot using sensors and motors",
      dueDate: "2025-09-30",
      team: ["John", "Bob", "Carol"],
    },
    {
      title: "Decibel Meter",
      status: "Pending",
      description: "Sound level measurement device",
      dueDate: "2025-10-15",
      team: ["John"],
    },
    {
      title: "Smart Home Automation",
      status: "Pending",
      description: "IoT-based home control system",
      dueDate: "2025-11-30",
      team: ["John", "David"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "In Progress":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Pending":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "Planned":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4" />;
      case "In Progress":
        return <Clock className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-8  bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-light text-gray-900 mb-2">
            Projects Portfolio
          </h1>
          <p className="text-gray-600">
            Manage and track your academic and personal projects
          </p>
        </div>

        {/* Dropdown Menu */}
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
                <Plus className="w-4 h-4" />
                New Project
              </button>
              <button className="flex items-center gap-3 w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <FolderOpen className="w-4 h-4" />
                Manage Projects
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl border border-gray-300 shadow-sm hover:border-gray-200 hover:shadow-md transition-all duration-200 bg-white"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {project.description}
                </p>
              </div>
              <span
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                  project.status
                )}`}
              >
                {getStatusIcon(project.status)}
                {project.status}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                {project.dueDate}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                {project.team.length} member
                {project.team.length > 1 ? "s" : ""}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-50">
              <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
