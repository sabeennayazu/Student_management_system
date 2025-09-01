"use client";

import { useState, useEffect, useRef } from "react";
import { MoreVertical, Calendar, Plus } from "lucide-react";

export default function FeedbackPage() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const feedbacks = [
    { 
      name: "ram bahadur", 
      role: "IOT Professor",
      comment: "Excellent work on your Arduino project! Your understanding of circuit design and programming logic is impressive. Keep up the great work and consider exploring more advanced sensor integration.",
      date: "2025-08-22",
      subject: "Physics IOT",
      avatar: "RB"
    },
    { 
      name: "Mentor Jane", 
      role: "Robotics tutor",
      comment: "Focus more on component optimization and state management. I'd recommend practicing with more complex projects to strengthen your foundation.",
      date: "2025-08-18",
      subject: "Computer Science",
      avatar: "MJ"
    },
  ];

  return (
    <div className="p-8  bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-light text-gray-900 mb-2">Instructor Feedback</h1>
          <p className="text-gray-600">Feedback and comments from your instructors</p>
        </div>

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
                Request Feedback
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Feedback List */}
      <div className="space-y-6">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl border border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-semibold text-sm">
                {feedback.avatar}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{feedback.name}</h3>
                    <p className="text-sm text-gray-600">{feedback.role}</p>
                    <p className="text-xs text-gray-500 mt-1">{feedback.subject}</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{feedback.comment}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {new Date(feedback.date).toLocaleDateString("en-US", { 
                      year: "numeric", 
                      month: "short", 
                      day: "numeric" 
                    })}
                  </div>
                  <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                    Reply →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
