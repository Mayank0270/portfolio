import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center px-6 sm:px-12"
    >
      <div className="max-w-5xl mx-auto flex flex-col justify-center w-full">
        {/* Heading */}
        <div className="pb-6 text-center sm:text-left">
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        {/* About Content */}
        <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-gray-300">
          <p>
            Hello! I'm{" "}
            <span className="font-semibold text-white">Mayank Mathur</span>, a
            passionate frontend web developer with a strong foundation in
            computer applications. I am currently pursuing my{" "}
            <span className="text-white font-medium">B.Tech in Computer Science</span>{" "}
            from Government Engineering College, Bikaner, and have refined my
            frontend skills through a specialized course at{" "}
            <span className="text-white font-medium">
              OILAB Learning Institute, Jodhpur
            </span>.
          </p>

          <p>
            I have a keen eye for design and a love for creating beautiful,
            responsive, and user-friendly websites. I enjoy building seamless
            web experiences using{" "}
            <span className="text-white font-medium">
              HTML, CSS, JavaScript, React, and Tailwind CSS
            </span>. I am always eager to learn new technologies and stay
            updated with the latest trends in web development.
          </p>

          <p>
            I am excited to contribute my creativity, problem-solving skills,
            and technical knowledge to build seamless digital solutions.{" "}
            <span className="text-white font-medium">
              Let’s connect and collaborate
            </span>{" "}
            to create something amazing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

