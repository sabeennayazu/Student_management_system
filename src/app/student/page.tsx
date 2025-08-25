"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

export default function DashboardPage() {
  const gradesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "GPA",
        data: [3.2, 3.5, 3.6, 3.8, 3.7, 3.9],
        borderColor: "rgba(59,130,246,1)",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.3,
      },
    ],
  };

  const attendanceData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Attendance",
        data: [1, 1, 0, 1, 1, 0, 0],
        backgroundColor: (ctx: any) =>
          ctx.raw === 1 ? "rgba(34,197,94,0.7)" : "rgba(239,68,68,0.7)",
        borderRadius: 4,
      },
    ],
  };

  // Quick stats for cards
  const stats = [
    { label: "Attendance", value: 92, color: "#22c55e", unit: "%" },
    { label: "GPA", value: 3.8, color: "#7c3aed", unit: "" },
    { label: "Pending Assignments", value: 5, color: "#facc15", unit: "" },
    { label: "Upcoming Exams", value: 2, color: "#3b82f6", unit: "" },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Top Row: Quick Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white shadow rounded-xl p-6 flex flex-col items-center h-48">
            <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
            <div className="w-24 h-24">
              <CircularProgressbar
                value={stat.value}
                text={`${stat.value}${stat.unit}`}
                styles={buildStyles({
                  pathColor: stat.color,
                  textColor: "#111827",
                  trailColor: "#e5e7eb",
                  textSize: "24px",
                })}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Middle Row: Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GPA Trend */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">GPA Trend</h3>
          <Line data={gradesData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>

        {/* Attendance Trend */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Weekly Attendance</h3>
          <Bar
            data={attendanceData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: { y: { ticks: { stepSize: 1 }, min: 0, max: 1 } },
            }}
          />
        </div>
      </div>

      {/* Bottom Row: Recent Activity + Quick Links */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Submitted Assignment 3 in Math</li>
            <li>Completed Quiz in Science</li>
            <li>Received message from Teacher</li>
            <li>Updated profile information</li>
            <li>Checked exam schedule</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition">Assignments</button>
            <button className="bg-green-100 text-green-700 font-semibold py-2 px-4 rounded-lg hover:bg-green-200 transition">Exams</button>
            <button className="bg-yellow-100 text-yellow-700 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-200 transition">Grades</button>
            <button className="bg-purple-100 text-purple-700 font-semibold py-2 px-4 rounded-lg hover:bg-purple-200 transition">Learning Materials</button>
          </div>
        </div>
      </div>
    </div>
  );
}
