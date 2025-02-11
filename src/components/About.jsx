import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello! I'm Mayank Mathur, a passionate and driven frontend web
          developer with a strong foundation in computer applications. I am
          currently pursuing my B.Tech degree in Computer Science from
          Government Engineering College, Bikaner, and have further refined my
          skills in frontend development through a specialized course at OILAB
          Learning Institute, Jodhpur.
        </p>

        <br />

        <p className="text-xl">
          I'm a passionate frontend web developer with a keen eye for design and
          a love for creating beautiful, responsive, and user-friendly websites.
          As a fresher, I am eager to bring creative ideas to life using
          technologies like HTML, CSS, JavaScript, and React. I enjoy building
          seamless web experiences that not only look great but also perform
          efficiently.I am constantly learning and exploring new trends in web development to enhance my skills and stay updated with the latest technologies.
        </p>

        <br/>

        <p className="texl-xl">I am excited to contribute my creativity, problem-solving skills, and technical knowledge to build seamless digital solutions. Let’s connect and collaborate to create something amazing!</p>
      </div>
    </div>
  );
};

export default About;
