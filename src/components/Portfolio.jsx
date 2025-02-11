import React from "react";
import Ecommerce from "../assets/portfolio/ecom.png";
import Todo from "../assets/portfolio/todo.png";
import Netflix from "../assets/portfolio/clone.png";
import Coffee from "../assets/portfolio/coffee.png";
import food from "../assets/portfolio/food.png";
import photo from "../assets/portfolio/onepage.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: Ecommerce,
      demoLink: "https://ecommerce-exln.vercel.app/",
      codeLink: "https://github.com/Mayank0270",
    },
    {
      id: 2,
      src: Todo,
      demoLink: "https://todo-eta-olive.vercel.app/",
      codeLink: "https://github.com/Mayank0270",
    },
    {
      id: 3,
      src: Netflix,
      demoLink: "https://clone-gamma-coral.vercel.app/",
      codeLink: "https://github.com/Mayank0270",
    },
    {
      id: 4,
      src: Coffee,
      demoLink: "https://coffee-c6af.vercel.app/",
      codeLink: "https://github.com/Mayank0270",
    },
    {
      id: 5,
      src: food,
      demoLink: "https://food-mu-puce.vercel.app/",
      codeLink: "https://github.com/Mayank0270",
    },
    {
      id: 6,
      src: photo,
      demoLink: "https://photo-green.vercel.app/",
      codeLink: "https://github.com/Mayank0270",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col justify-center w-full">
        {/* Heading */}
        <div className="pb-6 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-4 text-gray-300">Check out some of my projects</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt="Project"
                className="rounded-t-md w-full h-52 object-cover duration-300 hover:scale-105"
              />
              <div className="flex justify-between items-center bg-gray-900 p-4">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-semibold transition duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

