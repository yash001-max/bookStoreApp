import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import list from "../assets/list.json";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-32">
        {/* ---------- Header Section ---------- */}
        <div className="text-center animate-fadeIn">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
            Welcome to Our Learning World! 🌟
          </h1>

          <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            🚀 Unlock your creativity with our exciting and beginner-friendly courses.  
            Explore a variety of fun and skill-based topics like{" "}
            <span className="text-purple-500 font-semibold">Music</span>,{" "}
            <span className="text-blue-500 font-semibold">Cooking</span>,{" "}
            <span className="text-rose-500 font-semibold">Comics</span>, and{" "}
            <span className="text-indigo-500 font-semibold">Travel</span>.  
            Learn, grow, and make every day a new adventure with{" "}
            <span className="text-pink-600 font-semibold">joyful learning</span> and hands-on experience. ✨
          </p>

          <Link to="/">
            <button className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-2 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300">
              ⬅ Back to Home
            </button>
          </Link>
        </div>

        {/* ---------- Cards Section ---------- */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
          {list.map((item) => (
            <div
              key={item.id}
              className="transform transition duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <Cards item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
