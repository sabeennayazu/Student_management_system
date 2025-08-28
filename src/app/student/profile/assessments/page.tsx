"use client";

export default function AssessmentsPage() {
  const assessments = [
    { name: "Midterm Exam", score: 85, date: "2025-08-20" },
    { name: "Quiz 1", score: 90, date: "2025-07-10" },
    { name: "Final Project", score: 88, date: "2025-09-15" },
  ];

  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4">Assessments</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Score</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((a, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{a.name}</td>
              <td className="p-2">{a.score}%</td>
              <td className="p-2">{a.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
