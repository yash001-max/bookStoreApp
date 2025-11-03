import React from "react";

const Footer = () => {
  return (
    <>
      {/* Neon Top Border Animation */}
      <div className="w-full h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse"></div>

      <footer className="footer footer-center p-10 text-base-content bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500 shadow-inner z-50 relative overflow-hidden">

        {/* Soft animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-2xl animate-pulse"></div>

        {/* Navigation Links */}
        <nav className="grid grid-flow-col gap-6 text-lg font-medium relative z-10">
          <a className="link link-hover hover:text-yellow-300 hover:scale-105 duration-300">About Us</a>
          <a className="link link-hover hover:text-yellow-300 hover:scale-105 duration-300">Contact</a>
          <a className="link link-hover hover:text-yellow-300 hover:scale-105 duration-300">Jobs</a>
          <a className="link link-hover hover:text-yellow-300 hover:scale-105 duration-300">Press Kit</a>
        </nav>

        {/* Social Media Icons */}
        <nav className="relative z-10">
          <div className="grid grid-flow-col gap-6">
            {/* Twitter */}
            <a
              href="#"
              className="hover:scale-110 hover:text-sky-300 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.86 9.86 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.384 4.482A13.957 13.957 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.574 4.902 4.902 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.93 4.93 0 0 0 4.6 3.419 9.875 9.875 0 0 1-7.29 2.04A13.933 13.933 0 0 0 8.29 21c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z"></path>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="hover:scale-110 hover:text-red-400 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"></path>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="hover:scale-110 hover:text-blue-300 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"></path>
              </svg>
            </a>
          </div>
        </nav>

        {/* Footer Text */}
        <aside className="text-sm mt-4 opacity-80 hover:opacity-100 transition-opacity duration-300 relative z-10">
          <p>
            © {new Date().getFullYear()} — All Rights Reserved |{" "}
            <span className="font-semibold text-yellow-300">Yash’s BookStore</span>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
