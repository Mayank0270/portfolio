import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-6 text-white flex justify-center items-center"
    >
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <div className="pb-6 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Submit the form below to get in touch with me
          </p>
        </div>

        {/* Form */}
        <div className="flex justify-center">
          <form
            action="https://getform.io/f/amddqjnb"
            method="POST"
            className="w-full space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number"
              className="w-full p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="w-full p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>

            <button className="w-full text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-105 transition-transform duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

