import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
      {/* Dark & Light mode container */}
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Courses Page */}
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
