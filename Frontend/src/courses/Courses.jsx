import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/Course";

const Courses = () => {
  return (
    <>
      {/* ---------- Navbar ---------- */}
      <Navbar />

      {/* ---------- Main Content Section ---------- */}
      <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-500">
        <div className="container mx-auto px-4">
          <Course />
        </div>
      </main>

      {/* ---------- Footer ---------- */}
      <Footer />
    </>
  );
};

export default Courses;
