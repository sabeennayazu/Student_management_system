export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Welcome, Student!</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#ffffff] text-[#4a4a4a] p-4 rounded-lg shadow">
          <h3 className="text-lg">Listed Courses</h3>
          <p className="text-3xl font-bold">5</p>
        </div>

        <div className="bg-[#ffffff] text-[#4a4a4a] p-4 rounded-lg shadow">
          <h3 className="text-lg">Subjects</h3>
          <p className="text-3xl font-bold">4</p>
        </div>

        <div className="bg-[#ffffff] text-[#4a4a4a] p-4 rounded-lg shadow">
          <h3 className="text-lg">Total Students</h3>
          <p className="text-3xl font-bold">3</p>
        </div>

        <div className="bg-[#ffffff] text-[#4a4a4a] p-4 rounded-lg shadow">
          <h3 className="text-lg">Pending Tasks</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
      </div>
    </div>
  );
}
