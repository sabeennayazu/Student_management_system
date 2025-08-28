"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Clock, MapPin, FileText, BookOpen } from "lucide-react";

export default function ExamsPage() {
  const previousExams = [
    { subject: "Physics", date: "2025-05-10", result: "A" },
    { subject: "Mathematics", date: "2025-05-15", result: "B+" },
    { subject: "IoT Basics", date: "2025-06-01", result: "A-" },
  ];

  const upcomingExams = [
    { subject: "Robotics", date: "2025-09-10", time: "10:00 AM", venue: "Hall A" },
    { subject: "AI Fundamentals", date: "2025-09-15", time: "1:00 PM", venue: "Hall B" },
  ];

  const examRoutine = [
    { date: "2025-09-10", subject: "Robotics", time: "10:00 AM", venue: "Hall A" },
    { date: "2025-09-15", subject: "AI Fundamentals", time: "1:00 PM", venue: "Hall B" },
    { date: "2025-09-20", subject: "Electronics", time: "9:00 AM", venue: "Hall C" },
  ];

  const examDates = examRoutine.map((exam) => exam.date);

  const tileClassName = ({ date }: { date: Date }) => {
    const dateStr = date.toISOString().split("T")[0];
    if (examDates.includes(dateStr)) {
      return "bg-blue-500 text-white rounded-md"; // highlight exam dates
    }
    return "";
  };

  return (
    <div className="p-8 space-y-8">
      {/* Top Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Previous Exams */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-bold text-black mb-4">Previous Exams</h2>
          <ul className="space-y-3 text-black">
            {previousExams.map((exam, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{exam.subject}</p>
                  <p className="text-sm text-gray-600">{exam.date}</p>
                </div>
                <span className="text-sm font-medium text-emerald-600">
                  Result: {exam.result}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Exams */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-bold text-black mb-4">Upcoming Exams</h2>
          <ul className="space-y-3 text-black">
            {upcomingExams.map((exam, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{exam.subject}</p>
                  <p className="text-sm text-gray-600">{exam.date}</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {exam.time}
                  </p>
                  <p className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {exam.venue}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Exam Calendar */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-bold text-black mb-4">Exam Calendar</h2>
          <Calendar className="rounded-lg border w-full" tileClassName={tileClassName} />
        </div>

        {/* Exam Routine */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-bold text-black mb-4">Exam Routine</h2>
          <ul className="space-y-3 text-black">
            {examRoutine.map((exam, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{exam.subject}</p>
                  <p className="text-sm text-gray-600">{exam.date}</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {exam.time}
                  </p>
                  <p className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {exam.venue}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Guidelines */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" /> Exam Guidelines
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Arrive at least 30 minutes before the exam.</li>
            <li>Bring your ID card and admit card.</li>
            <li>No electronic devices allowed except calculators (if permitted).</li>
            <li>Follow all invigilator instructions strictly.</li>
          </ul>
        </div>

        {/* Preparation Tips */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" /> Preparation Tips
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Revise all key formulas and definitions.</li>
            <li>Practice past question papers for time management.</li>
            <li>Focus on weak areas at least 2 weeks before the exam.</li>
            <li>Take proper rest and avoid last-minute cramming.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
