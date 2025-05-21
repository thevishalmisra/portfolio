import React from "react";

const experiences = [
  {
    id: 1,
    company: "Bluestock Fintech",
    role: "Software Development Engineer Intern",
    tools: "HTML, CSS, JavaScript, React.js, Python",
    location: "Virtual",
    duration: "Jan 2025 - Feb 2025",
  },
  {
    id: 2,
    company: "Skillrisers Pvt Ltd",
    role: "Data Analytics Using Python Intern",
    tools:
      "Python and its libraries (Numpy, Pandas, Matplotlib), Jupyter Notebook, Tableau",
    location: "On-Site",
    duration: "Jan 2024 - Mar 2024",
  },
];

const Experience = () => {
  return (
    <div className="bg-black text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-800 px-8 py-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {exp.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {exp.company}
              </h3>
              <p className="mt-2 text-lg font-semibold text-white leading-relaxed">
                {exp.role}
              </p>
              <div className="mt-4 space-y-2 text-gray-300 leading-relaxed text-[15px]">
                <p>
                  <span className="font-semibold text-white">
                    Tools & Technologies:
                  </span>{" "}
                  {exp.tools}
                </p>
                <p>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  {exp.location}
                </p>
                <p>
                  <span className="font-semibold text-white">Duration:</span>{" "}
                  {exp.duration}
                </p>
              </div>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;


