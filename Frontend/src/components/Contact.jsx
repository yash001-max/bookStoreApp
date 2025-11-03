import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react"; // for cross icon

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-pink-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center py-10 px-4">
      <div className="card w-full max-w-2xl shadow-2xl bg-base-100 dark:bg-slate-800 relative overflow-hidden">

        {/* ❌ Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 btn btn-sm btn-circle btn-ghost hover:bg-red-500 hover:text-white transition-all"
          title="Go Back Home"
        >
          <X size={18} />
        </button>

        <div className="card-body">
          <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered input-primary w-full"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered input-secondary w-full"
                required
              />
            </div>

            {/* Message Field */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-semibold text-base-content">
                  Message
                </span>
              </label>
              <textarea
                name="message"
                placeholder="Write your message..."
                className="textarea textarea-bordered textarea-accent w-full"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-control">
              <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:scale-105 transition-all duration-300 w-full">
                Send Message 🚀
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>📍 Bengaluru, India</p>
            <p>📞 +91 6200446225</p>
            <p>✉️ yjha2616@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
