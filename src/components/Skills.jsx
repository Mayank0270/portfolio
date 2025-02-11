import React from "react";

import html from "../assets/img1.png";
import css from "../assets/img2.png";
import javascript from "../assets/img3.png";
import reactImage from "../assets/img4.png";
import tailwind from "../assets/img5.png";
import bootstrap from "../assets/img6.png";
import nodejs from "../assets/img7.png";
import express from "../assets/img8.png";
import github from "../assets/img9.png";
import mongoDB from "../assets/img10.png";

const Skills = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-500" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-500" },
    { id: 6, src: bootstrap, title: "Bootstrap", style: "shadow-purple-500" },
    { id: 7, src: nodejs, title: "NodeJS", style: "shadow-green-500" },
    { id: 8, src: express, title: "Express", style: "shadow-gray-500" },
    { id: 9, src: github, title: "GitHub", style: "shadow-gray-500" },
    { id: 10, src: mongoDB, title: "MongoDB", style: "shadow-green-500" },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full py-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col justify-center w-full text-white">
        {/* Heading */}
        <div className="pb-6 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-4 text-gray-300">These are the technologies I've worked with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 transition-transform duration-300 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-lg font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

