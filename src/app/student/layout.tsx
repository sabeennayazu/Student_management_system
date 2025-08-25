"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Profile", href: "/student/profile" },
  { name: "Learning Materials", href: "/student/learning-materials" },
  { name: "Tasks", href: "/student/tasks" },
  { name: "Exams", href: "/student/exams" },
  { name: "Marks", href: "/student/marks" },
  { name: "Projects", href: "/student/projects" },
  { name: "Routine", href: "/student/routine" },
  { name: "Notifications", href: "/student/notifications" },
  { name: "Logout", href: "/logout" },
];

export default function StudentLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-64 h-screen bg-white/90 border-r border-blue-100 shadow-lg p-6 flex flex-col gap-2">
        <a href="/student" className="text-xl font-bold text-blue-700 mb-4">
          Dashboard
        </a>
        <nav className="flex-1 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 font-medium transition-colors ${
                pathname === link.href ? "bg-blue-100 text-blue-700 font-semibold" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
