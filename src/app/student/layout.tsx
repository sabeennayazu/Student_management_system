// src/app/student/layout.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  BookOpen,
  CheckSquare,
  FileText,
  BarChart,
  Briefcase,
  Calendar,
  Bell,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { ReactNode } from "react";

const links = [
  { name: "Dashboard", href: "/student", icon: <Home size={18} /> },
  { name: "Profile", href: "/student/profile", icon: <User size={18} /> },
  { name: "Learning Materials", href: "/student/learning-materials", icon: <BookOpen size={18} /> },
  { name: "Tasks", href: "/student/tasks", icon: <CheckSquare size={18} /> },
  { name: "Exams", href: "/student/exams", icon: <FileText size={18} /> },
  { name: "Marks", href: "/student/marks", icon: <BarChart size={18} /> },
  { name: "Projects", href: "/student/projects", icon: <Briefcase size={18} /> },
  { name: "Routine", href: "/student/routine", icon: <Calendar size={18} /> },
  { name: "Notifications", href: "/student/notifications", icon: <Bell size={18} /> },
  { name: "Logout", href: "/logout", icon: <LogOut size={18} /> },
];

export default function StudentLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f9fa]">
      {/* Sidebar */}
      <aside
        className={`fixed z-40 inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static transition-transform duration-200 w-64 bg-white shadow-lg`}
      >
        <div className="p-4 text-lg font-bold border-b">Student Management</div>
        <nav className="mt-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-200 ${
                pathname === link.href ? "bg-blue-100 text-blue-600 font-semibold" : ""
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Top Navbar */}
        <header className="bg-white shadow flex justify-between items-center px-6 py-4">
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <span className="font-medium">John Doe</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
