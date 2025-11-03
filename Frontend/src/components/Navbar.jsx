import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/contact">Contact</Link></li> {/* ✅ Linked to Contact */}
      <li><Link to="/about">About</Link></li>
    </>
  );

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        sticky ? "bg-base-200 shadow-md" : "bg-base-100"
      }`}
    >
      <div className="navbar max-w-screen-2xl container mx-auto md:px-20 px-4">
        
        {/* ---------- Left Section ---------- */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>

          <Link
            to="/"
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative cursor-pointer group"
          >
            bookStore
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-500"></span>
          </Link>
        </div>

        {/* ---------- Right Section ---------- */}
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* Search Box */}
          <div className="hidden md:block">
            <label className="px-3 py-2 border rounded-md flex items-center gap-2 mx-2">
              <input
                type="text"
                className="grow outline-none bg-transparent"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {/* 🌞 / 🌙 Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-base-300 transition"
            title="Toggle Theme"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M21.64 13a1 1 0 0 0-1.05-.14A8.05 8.05 0 1 1 9.08 5.49a8.59 8.59 0 0 1 .25-2A10.14 10.14 0 1 0 22 14.05a1 1 0 0 0-.36-1.05Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z" />
              </svg>
            )}
          </button>

          {/* Login Button */}
          <button
            className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Login
          </button>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
