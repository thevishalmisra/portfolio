import React from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="container mx-auto px-8 md:px-16 lg:px-24 pt-4">

            {/* About Points */}
            <ul className="list-disc list-inside text-lg mb-8 space-y-2">
              <li>
              Passionate about technology, problem-solving, and innovation
              </li>
              <li>
                I have a strong foundation in both frontend and backend technologies.
              </li>
              <li>
                I strive to create seamless and efficient user experiences across all platforms.
              </li>
               <li>
              Always eager innovate, and connect with like-minded professionals in the tech industry!🚀
              </li>
            </ul>

            {/* Skills Section with Heading and Animated Bars */}
            <div className="mt-12">
              <h3 className="text-3xl font-bold mb-6 text-center">Skills</h3>
              <div className="space-y-4">
                {[
                  { label: "HTML & CSS", width: "w-10/12" },
                  { label: "JavaScript", width: "w-10/12" },
                  { label: "React.js", width: "w-11/12" },
                  { label: "Bootstrap", width: "w-9/12" },
                  { label: "Python", width: "w-8/12" },
                  { label: "Core Java", width: "w-7/12" },
                  { label: "OOP", width: "w-9/12" },
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <label className="w-3/12">{skill.label}</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${skill.width}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-12 flex justify-between text-center">
              {[
                { value: "1+", label: "Years Experience" },
                { value: "5+", label: "Projects Completed" },
                { value: "Learning", label: "and Growing Daily" },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {item.value}
                  </h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-6 text-center">Education</h3>
              <ul className="space-y-4">
                <li>
                  <p className="text-xl font-semibold">
                    Bachelor of Technology in Computer Science
                  </p>
                  <p className="text-gray-400">
                    IMS Engineering College — 2026
                  </p>
                </li>
                <li>
                  <p className="text-xl font-semibold">Intermediate</p>
                  <p className="text-gray-400">
                    Holly Kids International School — 2021
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;




