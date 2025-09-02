"use client";

import { useState } from "react";
import { format, parseISO, isSameDay, differenceInDays } from "date-fns";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Notification from "../components/notification/page";

interface Exam {
  subject: string;
  date: string;
  time: string;
  description: string;
  details: string;
}

const exams: Exam[] = [
  {
    subject: "Chapter 1: Basics of Electronics",
    date: "2024-09-10",
    time: "10:00 AM",
    description:
      "This exam covers the fundamental concepts of Electronics, including mechanics, thermodynamics, and electromagnetism.",
    details:
      "Duration: 2 hours\nTotal Marks: 100\nSyllabus: Mechanics (10%), Thermodynamics (30%), Electromagnetism (60%).",
  },
  {
    subject: "Chapter 2: Fundamentals of Electronics",
    date: "2024-09-15",
    time: "2:00 PM",
    description: "Covers wave motion, oscillations, and basic optics.",
    details:
      "Duration: 1.5 hours\nTotal Marks: 80\nSyllabus: Waves (40%), Optics (60%).",
  },
  {
    subject: "Chapter 3: Electronics",
    date: new Date().toISOString().split("T")[0], // today's date → ongoing
    time: "11:00 AM",
    description: "Focuses on the laws of Electronics.",
    details:
      "Duration: 2 hours\nTotal Marks: 90\nSyllabus: Short question(40%), Long Question (40%), MCQ (20%).",
  },
];

export default function ExamDashboard() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [date, setDate] = useState<Date | null>(new Date());
  const [activeTab, setActiveTab] = useState("Ongoing");

  const filteredExams = exams.filter((exam) => {
    if (activeTab === "Upcoming") {
      return parseISO(exam.date) > new Date();
    } else if (activeTab === "Completed") {
      return (
        parseISO(exam.date) < new Date() &&
        !isSameDay(parseISO(exam.date), new Date())
      );
    } else {
      return isSameDay(parseISO(exam.date), new Date());
    }
  });

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Notification />
      <h1 className="text-4xl font-bold mb-2 text-gray-900">Exam Dashboard</h1>
      <p className="text-gray-700 mb-8">
        Track, prepare, and take your exams with an organized view.
      </p>

      {/* Tabs */}
      <div className="flex space-x-6 border-b mb-8">
        {["Ongoing", "Upcoming", "Completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-2 font-medium transition ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Exam Cards */}
      <div className="space-y-6 max-w-4xl">
        {filteredExams.length > 0 ? (
          filteredExams.map((exam, idx) => {
            const examDate = parseISO(exam.date);
            const daysRemaining = differenceInDays(examDate, new Date());

            return (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {exam.subject}
                  </h2>
                  <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    {activeTab}
                  </span>
                </div>

                <p className="text-gray-700 mt-3">{exam.description}</p>

                <div className="flex items-center space-x-4 mt-6">
                  {activeTab === "Ongoing" && (
                    <button className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                      Start Exam
                    </button>
                  )}

                  {activeTab === "Upcoming" && (
                    <button
                      disabled
                      className="px-5 py-2 rounded-lg bg-gray-300 text-gray-600 font-medium cursor-not-allowed"
                    >
                      {daysRemaining} days remaining
                    </button>
                  )}

                  {activeTab === "Completed" && (
                    <button
                      disabled
                      className="px-5 py-2 rounded-lg bg-green-100 text-green-700 font-medium cursor-not-allowed"
                    >
                      Completed
                    </button>
                  )}

                  <button
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                    className="px-5 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
                  >
                    {expanded === idx ? "Hide Details" : "View Details"}
                  </button>
                </div>

                {/* Expandable details */}
                {expanded === idx && (
                  <div className="mt-5 border-t pt-4 text-gray-800 whitespace-pre-line">
                    <p>
                      <strong>Date:</strong> {format(examDate, "PPP")} at{" "}
                      {exam.time}
                    </p>
                    <p className="mt-3">{exam.details}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-600 italic">
            No exams found in this category.
          </p>
        )}
      </div>

      {/* Calendar */}
      <div className="mt-12 max-w-md">
        <h2 className="text-lg font-semibold mb-3 text-gray-900">
          Exam Calendar
        </h2>
        <div className="border rounded-2xl p-4 shadow-sm bg-white">
          <Calendar
            onChange={(value) => {
              if (value instanceof Date) {
                setDate(value);
              }
            }}
            value={date}
            className="rounded-lg w-full text-black"
            tileClassName={({ date }) => {
              return exams.some((exam) => isSameDay(parseISO(exam.date), date))
                ? "bg-blue-500 text-white rounded-full"
                : "";
            }}
          />
        </div>
      </div>
    </div>
  );
}
