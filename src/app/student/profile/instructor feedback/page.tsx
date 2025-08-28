"use client";

export default function FeedbackPage() {
  const feedbacks = [
    { name: "Prof. Smith", comment: "Great job on your recent project!", date: "Aug 22" },
    { name: "Mentor Jane", comment: "Keep improving your React skills.", date: "Aug 18" },
  ];

  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4">Feedback</h2>
      <div className="space-y-4">
        {feedbacks.map((f, index) => (
          <div key={index} className="border rounded-xl p-4">
            <h3 className="font-semibold">{f.name}</h3>
            <p className="text-gray-600 mt-1">{f.comment}</p>
            <span className="text-sm text-gray-400">{f.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
