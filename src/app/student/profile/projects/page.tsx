"use client";

export default function ProjectsPage() {
  const projects = [
    { title: "Portfolio Website", status: "Completed" },
    { title: "E-commerce App", status: "In Progress" },
    { title: "Chat Application", status: "Pending" },
  ];

  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.title} className="border rounded-xl p-4 hover:shadow-md">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{project.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
