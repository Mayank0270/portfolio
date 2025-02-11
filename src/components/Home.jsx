import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HeroImage from "../assets/pic.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Web Designer", "Front-End Developer", "Mern-stack-Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex flex-col items-center justify-center h-full px-4 md:flex-row gap-8">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-6xl  text-white">
            <span>Hello,</span>I am{" "}
            <span className="text-[#be4f0c]">Mayank Mathur</span>
          </h1>
          <br />
          <h2 className="text-4xl sm:text-4xl font-bold text-[#be4f0c]">
            {text}
            <Cursor />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a passionate and enthusiastic fresher in web development, eager
            to build and design innovative solutions. I have a strong interest
            in web application development and enjoy working with modern
            technologies like React, Tailwind,Express,Node.js, and MongoDb. I am
            always keen to learn new technologies and improve my skills to
            create efficient and user-friendly applications.
          </p>

          <div>
            <Link
              to="project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-9- duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
