// src/app/student/page.tsx
export default function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">WELCOME ADMIN</h2>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Courses */}
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
          <h3 className="text-lg">Listed Courses</h3>
          <p className="text-3xl font-bold">5</p>
          <button className="mt-2 text-sm underline">View Details</button>
        </div>

        {/* Subjects */}
        <div className="bg-green-500 text-white p-4 rounded-lg shadow">
          <h3 className="text-lg">Subjects</h3>
          <p className="text-3xl font-bold">4</p>
          <button className="mt-2 text-sm underline">View Details</button>
        </div>

        {/* Students */}
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow">
          <h3 className="text-lg">Total Students</h3>
          <p className="text-3xl font-bold">3</p>
          <button className="mt-2 text-sm underline">View Details</button>
        </div>

        {/* Example extra card */}
        <div className="bg-red-500 text-white p-4 rounded-lg shadow">
          <h3 className="text-lg">Pending Tasks</h3>
          <p className="text-3xl font-bold">12</p>
          <button className="mt-2 text-sm underline">View Details</button>
        </div>
      </div>
    </div>
  );
}
