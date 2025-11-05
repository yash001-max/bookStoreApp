import React from "react";
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center justify-between my-16 md:my-24">
        
        {/* ---------- Left Section ---------- */}
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-800 dark:text-white">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Amazing & Fun
            </span>{" "}
            courses every day! 🌟
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            🎶 Discover a colorful range of creative courses — from{" "}
            <span className="text-pink-500 font-semibold">Food</span> delights 🍳 and{" "}
            <span className="text-blue-500 font-semibold">Music</span> vibes 🎵 to{" "}
            <span className="text-rose-500 font-semibold">Romantic</span> journeys 💖 and{" "}
            <span className="text-purple-500 font-semibold">Travel</span> adventures ✈️ —  
            and so much more!  
            <br />
            📚 New and exciting courses are added regularly, so there's always something fresh to learn and enjoy.  
            Dive in and make learning a joyful part of your everyday life! 🌈
          </p>

          {/* ---------- Email Input ---------- */}
          <div className="mt-8 flex items-center gap-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-pink-500 px-3 py-2 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="h-5 w-5 text-gray-500 dark:text-gray-300"
            >
              <path d="M2.5 3A1.5 1.5 0 001 4.5v.793l6.674 3.217a.75.75 0 00.652 0L15 5.293V4.5A1.5 1.5 0 0013.5 3h-11zM15 6.954L8.978 9.86a2.25 2.25 0 01-1.956 0L1 6.954V11.5A1.5 1.5 0 002.5 13h11a1.5 1.5 0 001.5-1.5V6.954z" />
            </svg>
            <input
              type="email"
              placeholder="Enter your email to get course updates"
              className="w-full bg-transparent outline-none text-gray-700 dark:text-gray-200"
            />
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-md hover:scale-105 hover:shadow-lg transition duration-300">
              Get Startedgit
            </button>
          </div>
        </div>

        {/* ---------- Right Section (Improved Image) ---------- */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center relative group">
          {/* Glowing background behind image */}
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

          {/* Image with smooth hover effects */}
          <img
            src={banner}
            alt="Creative Learning Banner"
            className="relative w-[85%] md:w-[90%] rounded-3xl shadow-2xl hover:scale-105 hover:shadow-pink-200/50 transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
