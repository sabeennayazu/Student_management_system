"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  
  { name: "Learning Materials", href: "/student/learning-materials" },
  { name: "Tasks", href: "/student/tasks" },
  { name: "Exams", href: "/student/exams_and_marks" },
  { name: "Projects", href: "/student/projects" },
  { name: "Routine", href: "/student/routine" },
  // Removed Notifications and Logout
];

export default function StudentLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const settingsItems = [
    { name: "Settings & Privacy", href: "/student/settings-privacy" },
    { name: "Help & Support", href: "/student/help-support" },
    { name: "Feedback", href: "/student/feedback" },
    { name: "Logout", href: "/logout" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white/90 border-r border-blue-100 shadow-lg p-6 flex flex-col justify-between transform transition-transform duration-300 z-50
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <div>
          <div className="flex items-center mb-4">

          <a href="/student" className="text-xl font-bold text-blue-700 mb-4 pl-4">
            Dashboard
          </a>
          </div>
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
        </div>

        {/* Settings Dropdown at the bottom */}
        <div className="mt-4">
          <button
            className="w-full flex justify-between items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 font-medium transition-colors"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            Settings
            <ChevronDown className={`w-5 h-5 transition-transform ${settingsOpen ? "rotate-180" : ""}`} />
          </button>
          {settingsOpen && (
            <div className="mt-2 flex flex-col gap-1 pl-2">
              {settingsItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen ml-0 md:ml-64 bg-gradient-to-br from-blue-50 to-purple-100 transition-all duration-300">
        {/* Top bar */}
        <header className="w-full flex items-center p-4 bg-white/80 shadow-md md:hidden">
          <button
            className="p-2 rounded-md hover:bg-blue-100 transition"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="w-6 h-6 text-blue-700" /> : <Menu className="w-6 h-6 text-blue-700" />}
          </button>
          <h1 className="ml-4 font-bold text-blue-700 text-lg">Dashboard</h1>
        </header>

        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
