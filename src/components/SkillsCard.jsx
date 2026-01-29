import React from "react";
import { FaReact, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const SkillsCard = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: FaReact,
      description:
        "Building responsive and interactive user interfaces with modern frameworks.",
      tags: [ "React", "TailwindCss"],
    },
    {
      title: "Backend Development",
      icon: FaServer,
      description: "Creating robust server-side applications and RESTful APIs",
      tags: ["Node.js", "Express.js"],
    },
    {
      title: "Database Management",
      icon: FaDatabase,
      description: "Designing and optimizing databases for performance and .",
      tags: ["MongoDb", "Firebase"],
    },
    {
      title: "Tools & Technologies",
      icon: FaTools,
      description: "Designing and optimizing databases for performance and .",
      tags: ["Git & GitHub", "Postman", "Thunder Client"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
      {skills.map((skills, idx) => {
        const Icon = skills.icon;
        return (
          <div
            key={idx}
            className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-500 cursor-pointer"
          >
            <div className="flex items-center mb-4">
              <Icon className="text-Turquoise w-12 h-12 mr-6" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {skills.title}
              </h3>
            </div>

            <p className="text-gray-400 mb-4"> {skills.description}</p>

            <div className="flex flex-wrap gap-2">
              {skills.tags.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-dark-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsCard;
