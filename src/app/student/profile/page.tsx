export default function StudentProfile() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        {/* Student Info */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-2xl p-6 h-full">
          <div className="flex flex-col items-center mb-10">
            <img
              src="/student.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">John Doe</h2>
          </div>

          <hr className="border-t border-gray-300 mb-4" />

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
              <span className="font-semibold">Email:</span>
              <span>john@example.com</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Phone:</span>
              <span>+977-9800000000</span>
            </div>

            <hr className="border-t border-gray-300 my-4" />

            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Guardian:</span>
              <span>Mr. Alex Doe</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span className="font-semibold">Phone:</span>
              <span>+977-9811111111</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Course Progress */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Course Progress</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold mb-1">IoT Level 1</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">Robotics Level 1</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full w-2/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Projects Completed</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Smart Home System</li>
              <li>Line Follower Robot</li>
              <li>Weather Monitoring Device</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Skills & Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {["Arduino", "Python", "3D Printing", "Sensor Integration"].map(skill => (
                <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Upcoming Sessions</h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>IoT Networking - Sep 5</li>
              <li>Robotics Sensors - Sep 12</li>
              <li>Arduino Programming - Sep 19</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
