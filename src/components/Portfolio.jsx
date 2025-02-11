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
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  code
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
