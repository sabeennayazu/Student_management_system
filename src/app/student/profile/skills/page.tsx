"use client";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SkillsPage() {
  const skills = [
    { name: 'JavaScript', level: 85, color: '#f7df1e' },
    { name: 'React', level: 78, color: '#61dafb' },
    { name: 'TypeScript', level: 72, color: '#3178c6' },
    { name: 'Node.js', level: 68, color: '#339933' },
    { name: 'Python', level: 75, color: '#3776ab' },
    { name: 'CSS', level: 82, color: '#1572b6' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-24 h-24 mx-auto mb-4">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: skill.color,
                  pathColor: skill.color,
                  trailColor: '#f3f4f6',
                  textSize: '16px',
                })}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
            <p className="text-sm text-gray-600 mt-2">
              {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Skill Development Goals</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Complete Advanced React Course</span>
            <span className="text-sm text-gray-500">In Progress</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Learn GraphQL</span>
            <span className="text-sm text-gray-500">Planned</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Master TypeScript</span>
            <span className="text-sm text-gray-500">In Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
}
