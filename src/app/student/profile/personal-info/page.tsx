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
    <div className="p-8">
      <h1 className="text-2xl font-bold text-black mb-6">Personal Information</h1>

      {/* Info List (Vertical, Left Aligned) */}
      <div className="space-y-4 text-black">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Class:</strong> {student.class}</p>
        <p><strong>Section:</strong> {student.section}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Guardian's Name:</strong> {student.guardianName}</p>
        <p><strong>Guardian's Phone:</strong> {student.guardianPhone}</p>
        <p><strong>Guardian's Relation:</strong> {student.guardianRelation}</p>
      </div>
    </div>
  );
}
