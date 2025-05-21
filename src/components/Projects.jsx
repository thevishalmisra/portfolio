import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import medicalImage from "../assets/medical.png";


const projects = [
{
  id: 1,
  name: "AI-powered medication management system",
  description: [
    "Automates medication tracking and scheduling.",
    "Provides personalized reminders for users.",
    "Integrates with healthcare provider databases.",
  ],
  image: medicalImage,
  github: "https://github.com/thevishalmisra",
},

  {
    id: 2,
    name: "Smart parking management:",
    description: [
     "Developed a smart parking system to optimize parking and reduce urban traffic.",
      "Implemented real-time slot tracking for efficient space monitoring.",
      "Created an automated booking system with a user-friendly interface.",
    ],
    image: bookMSImage,
    github: "https://github.com/thevishalmisra",
  },
  {
    id: 3,
    name: "Make My Trip Clone:",
    description: [
      "Built a travel booking website inspired by MakeMyTrip for flights, hotels, and packages.",
      "Designed a responsive homepage with intuitive travel category navigation.",
      "Added dynamic search, filters, and real-time price updates for bookings.",
    ],
    image: employeeMSImage,
    github:"https://github.com/thevishalmisra",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>

              <ul className="text-gray-400 mb-4 list-disc list-inside">
                {project.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <a
                href={project.github}
                className="inline-block bg-gradient-to-r 
                  from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

