import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ Submit handler
  const onSubmit = (data) => {
    console.log("✅ Signup Data:", data);
  };

  return (
    <>
      {/* ---------- Signup Page ---------- */}
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1e1e2f] via-[#2a2a3d] to-[#1a1a28] text-white relative overflow-hidden">
        
        {/* ---------- Background Glow Circles ---------- */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full -top-16 -left-20 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full bottom-0 right-0 animate-pulse"></div>
        </div>

        {/* ---------- Signup Box ---------- */}
        <div className="w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 relative">
          
          {/* ---------- Close Button ---------- */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 text-gray-400 hover:text-fuchsia-300 transition duration-200 text-2xl font-bold"
          >
            &times;
          </button>

          {/* ---------- Header ---------- */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              Create Account ✨
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Join us and start your journey today 🚀
            </p>
          </div>

          {/* ---------- Form ---------- */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className={`w-full mt-1 px-4 py-2 bg-white/10 border ${
                  errors.name ? "border-red-400" : "border-white/20"
                } rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition duration-200`}
                {...register("name", { required: "Full Name is required" })}
              />
              {errors.name && (
                <span className="text-red-400 text-sm mt-1 block">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className={`w-full mt-1 px-4 py-2 bg-white/10 border ${
                  errors.email ? "border-red-400" : "border-white/20"
                } rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition duration-200`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-1 block">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full mt-1 px-4 py-2 bg-white/10 border ${
                  errors.password ? "border-red-400" : "border-white/20"
                } rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition duration-200`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-400 text-sm mt-1 block">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-2 font-semibold text-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 hover:from-fuchsia-600 hover:to-blue-600 text-white rounded-xl shadow-lg hover:shadow-fuchsia-400/40 transition-all duration-300 hover:scale-[1.03]"
            >
              Sign Up
            </button>
          </form>

          {/* ---------- Footer ---------- */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="text-fuchsia-400 hover:text-fuchsia-300 font-medium underline underline-offset-2 transition-all"
            >
              Login
            </button>
          </div>

          {/* ---------- Login Modal ---------- */}
          <Login />
        </div>
      </div>
    </>
  );
};

export default Signup;
