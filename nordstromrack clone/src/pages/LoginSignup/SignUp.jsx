import React from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className=" flex items-center justify-center  mt-10">
        {/* Background Blur */}
        <div className="  "></div>

        {/* Modal */}
        <div className=" w-[90%] max-w-md p-6    ">
          {/* Close Button */}

          {/* Form Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h1>
          <p className="text-sm text-gray-600">
            You have already an account?{" "}
            <NavLink to="/">
              <span className="text-blue-700 cursor-pointer">Sign In</span>
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
                Username
              </label>
              <div className="w-full  border border-gray-400 h-[41px] flex items-center px-2 focus-within:border-b-[3px] focus-within:border-blue-500 ">
                <input
                  type="text"
                  placeholder="username"
                  className="flex-1 focus:outline-none focus:ring-0 p-1.5 text-xs sm:text-sm lg:text-base"
                />
              </div>
            </div>
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
