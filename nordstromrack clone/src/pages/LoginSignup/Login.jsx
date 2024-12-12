import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const openLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  useEffect(() => {
    if (isLoginPopupOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [isLoginPopupOpen]);

  return (
    <>
      {/* Sign In Button */}
      <div className="sign w-full mt-8 text-center">
        <p>
          <strong className="text-3xl font-bolder">
            More to Rack, easier and faster.
          </strong>
        </p>

        <button
          onClick={openLoginPopup}
          className="hover:bg-gray-100 border border-blue-400 text-gray-900 px-8 py-2 mt-5 transition duration-300 ease-in-out"
        >
          Sign In or Create an Account
        </button>
      </div>

      {/* Login Popup */}
      {isLoginPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          {/* Background Blur */}
          <div className="absolute inset-0 bg-gray-700 bg-opacity-50 backdrop-blur-md"></div>

          {/* Modal */}
          <div
            className="bg-white w-[90%] max-w-md p-6 border  relative z-10 "
            style={{
              boxShadow: "box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;",
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLoginPopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Form Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Sign In</h1>
            <p className="text-sm text-gray-600">
              New to Nordstrom Rack?{" "}
              <NavLink to="signup">
                <span className="text-blue-700 cursor-pointer">
                  Create an account.
                </span>
              </NavLink>
            </p>

            {/* Logo */}
            <div className="logo my-4">
              <img
                className="w-[7rem] mx-auto"
                src="https://n.nordstrommedia.com/id/df3a0d48-0df8-483c-81af-7e456c0a47bb.svg"
                alt="Nordstrom Rack Logo"
              />
            </div>

            {/* Input Fields */}
            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600">
                  Email
                </label>
                <div className="w-full  border border-gray-400 h-[41px] flex items-center px-2 focus-within:border-b-[3px] focus-within:border-blue-500 ">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 focus:outline-none focus:ring-0 p-1.5 text-xs sm:text-sm lg:text-base"
                  />
                </div>
              </div>

              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-600">
                  Password
                </label>
                <div className="relative w-full  border border-gray-400 h-[41px] flex items-center px-2 focus-within:border-b-[3px] focus-within:border-blue-500">
                  <input
                    type="password"
                    className="w-full flex-1 focus:outline-none focus:ring-0 p-1.5 text-xs sm:text-sm lg:text-base"
                    placeholder="Enter your password"
                  />
                  <span className="absolute right-3 top-2 text-sm text-blue-700 cursor-pointer">
                    Show
                  </span>
                </div>
              </div>

              {/* Forgot Password */}
              <p className="text-sm text-blue-700 mb-4 cursor-pointer">
                Forgot password?
              </p>

              {/* Checkbox */}
              <div className="flex items-center mb-4">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Keep me signed in.{" "}
                  <span className="text-blue-700 cursor-pointer">Details</span>
                </label>
              </div>

              {/* Terms & Conditions */}
              <p className="text-xs text-gray-500 mb-6">
                By signing in to your account, you agree to our{" "}
                <span className="text-blue-700 cursor-pointer">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-blue-700 cursor-pointer">
                  Terms & Conditions
                </span>
                .
              </p>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2  hover:bg-blue-700 transition duration-200"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
