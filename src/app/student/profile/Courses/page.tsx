"use client";

export default function CourseProgressPage() {
  const courses = [
    { name: "Web Development", progress: 80 },
    { name: "Database Systems", progress: 60 },
    { name: "Machine Learning", progress: 50 },
  ];

  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4">Course Progress</h2>
      <div className="grid gap-4">
        {courses.map((course) => (
          <div key={course.name} className="p-4 border rounded-xl">
            <h3 className="font-semibold">{course.name}</h3>
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">{course.progress}% Complete</p>
          </div>
        ))}
      </div>
    </div>
  );
}
