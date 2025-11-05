import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ On form submit
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Successfully created!');
          setTimeout(()=>{
            document.getElementById("my_modal_2").close();
             window.location.reload();
             localStorage.setItem("Users", JSON.stringify(res.data.user));
          },1000);
          
         
        }
        
      })
      .catch((error) => {
       if(error.response){
        console.log(error);
        toast.error("Error:"+ error.response.data.message);
        setTimeout(()=>{},2000)
       }
      });
  };

  // ✅ Return UI (fixed curly brace issue)
  return (
    <>
      {/* ---------- Login Modal ---------- */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box relative overflow-hidden rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-[#1e1e2f] via-[#2a2a3d] to-[#1a1a28] text-white border border-white/10">
          
          {/* ---------- Background Glow Circles ---------- */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full -top-16 -left-20 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full bottom-0 right-0 animate-pulse"></div>
          </div>

          {/* ---------- Close Button ---------- */}
          <Link
            to={"/"}
            className="absolute top-4 right-4 text-gray-400 hover:text-fuchsia-300 transition duration-200 text-2xl font-bold"
            onClick={() => document.getElementById("my_modal_2").close()}
          >
            &times;
          </Link>

          {/* ---------- Header ---------- */}
          <div className="text-center mb-6">
            <h3 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-fuchsia-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              Welcome Back 👋
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Sign in to continue your amazing journey 🚀
            </p>
          </div>

          {/* ---------- Form ---------- */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-300">
                Email
              </label>
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
              <label className="text-sm font-medium text-gray-300">
                Password
              </label>
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

            {/* ✅ Fixed Login Button */}
            <button
              type="submit"
              className="w-full py-2 font-semibold text-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 hover:from-fuchsia-600 hover:to-blue-600 text-white rounded-xl shadow-lg hover:shadow-fuchsia-400/40 transition-all duration-300 hover:scale-[1.03]"
            >
              Login
            </button>
          </form>

          {/* ---------- Footer Links ---------- */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            Not registered?{" "}
            <Link
              to="/signup"
              onClick={() => document.getElementById("my_modal_2").close()}
              className="text-fuchsia-400 font-semibold hover:text-fuchsia-300 transition duration-200 underline"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Login;
