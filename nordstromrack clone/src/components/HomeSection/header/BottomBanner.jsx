import React from "react";

function BottomBanner() {
  return (
    <div>
      <div className="signUp-banner">
        <div className="banner-first relative w-[95%] h-[160px] overflow-hidden m-auto mt-32">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="	https://n.nordstrommedia.com/id/9124cf9a-7133-4e76-85dc-d7052869884a.png?h=179&w=1608"
          />
        </div>
      </div>
      <div className="signUp-email mb-10 mt-10">
        <form
          action=""
          className="flex flex-col lg:flex-row items-center gap-2 lg:justify-end  lg:gap-2 w-[90%] lg:w-[95%] mx-auto"
        >
          <h1 className="text-lg font-semibold text-gray-800 lg:text-right">
            Get Email Updates:
          </h1>
          <div className="w-full lg:w-[22%] border border-gray-400 h-[41px] flex items-center px-2 focus-within:border-b-[3px] focus-within:border-blue-500 ">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 focus:outline-none focus:ring-0 p-1.5 text-xs sm:text-sm lg:text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full lg:w-[22%] h-[41px] bg-blue-500 text-white font-medium text-sm lg:text-base  hover:bg-blue-600 transition-all duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default BottomBanner;
