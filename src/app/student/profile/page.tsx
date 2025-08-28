"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Skills", href: "/profile/skills" },
  { name: "Course Progress", href: "/profile/courses" },
  { name: "Projects", href: "/profile/projects" },
  { name: "Assessments", href: "/profile/assessments" },
  { name: " Instructor Feedback", href: "/profile/instructor feedback" },
];

export default function ProfilePage() {
  const pathname = usePathname();

  return (
    <div className="space-y-6 p-6">
      {/* Student Info Section */}
      <div className="bg-white shadow rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar */}
        <img
          src="/avatar.png"
          alt="Student Avatar"
          className="w-32 h-32 rounded-full object-cover"
        />
        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-gray-600">Computer Science Student</p>
          <p className="text-gray-500 text-sm">ID: 202500123</p>
          <div className="mt-4 flex gap-6 text-gray-700">
            <span>📚 Class: 10</span>
            
            <span>📅 Joined: 2022</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-300">
        <nav className="flex gap-6">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`pb-2 font-medium ${
                pathname === tab.href
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Default Info */}
      <div>
        <p className="text-gray-600">
          Select a tab to view detailed information about your profile.
        </p>
      </div>
    </div>
  );
}
