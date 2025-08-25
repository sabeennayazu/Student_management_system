export default function StudentProfile() {
  return (
    <div className="space-y-6 p-6">
      {/* Top Section: Student Info + 4 Cards */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        {/* Left Card: Student Info */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-2xl p-6 h-screen">
          {/* Photo */}
          <div className="flex flex-col items-center mb-10">
            <img
              src="/student.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">John Doe</h2>
          </div>

          <hr className="border-t border-gray-300 mb-4" />

          {/* Basic Info */}
          <div className="text-gray-700 space-y-2 mx-auto w-full max-w-xs">
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">DOB:</span>
              <span>Jan 15, 2010</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Student ID:</span>
              <span>12345</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Class:</span>
              <span>10</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Section:</span>
              <span>A</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Email:</span>
              <span>john@example.com</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Phone:</span>
              <span>+977-9800000000</span>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            {/* Guardian Info */}
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Guardian's Name:</span>
              <span>Mr. Alex Doe</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Relation:</span>
              <span>Father</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Guardian's Phone:</span>
              <span>+977-9811111111</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Guardian's Email:</span>
              <span>alex@example.com</span>
            </div>
          </div>
        </div>

        {/* Right Cards: 4 Cards in 2x2 */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* 1️⃣ Academic Overview */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Academic Overview</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Current GPA:</strong> 3.8 / 4.0</p>
              <p><strong>Enrolled Courses:</strong> Math, Science, English, History</p>
              <p><strong>Upcoming Assignments:</strong> 2</p>
              <p><strong>Upcoming Exams:</strong> 1</p>
            </div>
          </div>

          {/* 2️⃣ Achievements */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Math Olympiad - First Place</li>
              <li>Science Fair - Best Project</li>
              <li>Football Team Captain</li>
              <li>Perfect Attendance - Last Month</li>
            </ul>
          </div>

          {/* 3️⃣ Profile Analytics */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Profile Analytics</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold mb-1">Attendance Rate</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full w-5/6"></div>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">Course Completion</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">Task Completion</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full w-3/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 4️⃣ Recent Activity */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>Submitted Assignment 3 in Math</li>
              <li>Completed Quiz in Science</li>
              <li>Received message from Teacher</li>
              <li>Updated profile information</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Attendance Calendar + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="bg-white shadow rounded-xl p-6 lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Attendance Calendar</h3>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 30 }, (_, i) => {
              const day = i + 1;
              const status = day % 6 === 0 ? "absent" : "present";
              return (
                <div
                  key={i}
                  className={`text-center py-2 rounded ${
                    status === "present" ? "bg-green-200" : "bg-red-300"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Attendance Stats</h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Total Days:</strong> 30</p>
            <p><strong>Present:</strong> 25</p>
            <p><strong>Absent:</strong> 5</p>
            <p><strong>Holidays:</strong> 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
