"use client";

export default function PersonalInfoPage() {
  const student = {
    name: "Sabin Nayaju",
    class: "10",
    section: "A",
    gender: "Male",
    phone: "+977 9800000000",
    email: "sabin@example.com",
    guardianName: "Nabin Nayaju",
    guardianPhone: "+977 9811111111",
    guardianRelation: "Father",
  };

  return (
    <div className="p-10 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-700 shadow-md">
            {student.name.charAt(0)}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">{student.name}</h1>
          <p className="text-gray-600">Class {student.class} • Section {student.section}</p>
        </div>

        {/* Info Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Info */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Student Info</h2>
            <ul className="space-y-3 text-gray-700">
              <li><span className="font-medium">Gender:</span> {student.gender}</li>
              <li><span className="font-medium">Phone:</span> {student.phone}</li>
              <li><span className="font-medium">Email:</span> {student.email}</li>
            </ul>
          </div>

          {/* Guardian Info */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Guardian Info</h2>
            <ul className="space-y-3 text-gray-700">
              <li><span className="font-medium">Name:</span> {student.guardianName}</li>
              <li><span className="font-medium">Phone:</span> {student.guardianPhone}</li>
              <li><span className="font-medium">Relation:</span> {student.guardianRelation}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
