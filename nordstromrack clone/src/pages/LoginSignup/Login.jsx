import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Sign In Details:", { email, password });
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-[90%] max-w-md p-6">
        {/* Form Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sign In</h1>
        <p className="text-sm text-gray-600">
          Don’t have an account yet?{" "}
          <NavLink to="/signup">
            <span className="text-blue-700 cursor-pointer">Sign Up</span>
          </NavLink>
        </p>

        {/* Logo */}
        <div className="logo my-4">
          <img
            className="w-[7rem] mx-auto"
            src="https://via.placeholder.com/150"
            alt="Logo"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
