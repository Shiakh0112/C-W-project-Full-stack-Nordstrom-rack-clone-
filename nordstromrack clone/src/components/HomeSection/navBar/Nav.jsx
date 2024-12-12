import React, { useState, useEffect } from "react";
import StoreRackIcon from "./../../svg/StoreRackIcon";
import { AiOutlineShopping } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icon
import { NavLink } from "react-router-dom";

function Nav() {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const toggleMenu = () => setHamburgerToggle(!hamburgerToggle);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setHamburgerToggle(false); // Close the menu when screen width is >= lg breakpoint
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let bottomNav = [
    { name: "Clearance", path: "/clearance", color: "rgb(184, 0, 9)" },
    { name: "New", path: "/new", color: "rgb(24, 106, 220)" },
    { name: "Women", path: "/women" },
    { name: "Men", path: "/men" },
    { name: "Kids", path: "/kids" },
    { name: "Shoes", path: "/shoes" },
    { name: "Bags & Accessories", path: "/bags-accessories" },
    { name: "Home", path: "/home" },
    { name: "Beauty", path: "/beauty" },
    { name: "Gift Guide", path: "/gift-guide" },
    { name: "Flash Events", path: "/flash-events", color: "rgb(24, 106, 220)" },
  ];

  return (
    <nav>
      {/* Upper Navigation */}
      <div className="upper-nav text-center px-4 w-full h-max flex items-center justify-center bg-[rgb(0,0,0)]">
        <span className="TFM6u" color="light">
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg p-1">
            <strong>EXTRA 40% OFF CLEARANCE.</strong> Online and in stores
            through Dec. 3. ALL SALES FINAL. Restrictions apply. &nbsp;&nbsp;
            <a href="#" className="text-white underline">
              Shop Clearance
            </a>
          </p>
        </span>
      </div>

      {/* Middle Navigation */}
      <div className="middle-nav relative">
        <div className="flex flex-col lg:flex-row justify-between p-5 gap-5 lg:gap-10 mt-3 ml-4">
          {/* Hamburger Icon */}
          <div className="2xl:hidden xl:hidden lg:hidden absolute top-8 left-10">
            <button
              onClick={toggleMenu}
              className={`text-black focus:outline-none text-2xl `}
            >
              {hamburgerToggle ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Logo Section */}
          <div className="w-full lg:w-[23%] flex lg:justify-start 2xl:ml-0 xl:ml-0 lg:ml-0 ml-12">
            <NavLink to="/">
              <img
                className="w-[5rem] sm:w-[6rem] lg:w-[7rem]"
                src="https://n.nordstrommedia.com/id/df3a0d48-0df8-483c-81af-7e456c0a47bb.svg"
                alt="Logo"
              />
            </NavLink>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-full border border-gray-400 h-[41px] flex items-center px-2 focus-within:border-b-[3px] focus-within:border-blue-500">
            <IoSearch className="text-gray-500 text-sm sm:text-base lg:text-lg" />
            <input
              type="text"
              placeholder="Search by category"
              className="flex-1 focus:outline-none focus:ring-0 p-1.5 text-xs sm:text-sm lg:text-base"
            />
          </div>

          {/* Menu Options */}
          {hamburgerToggle ? (
            <div
              className={`${"block"} flex-col lg:flex-row lg:justify-evenly w-full text-[20px] sm:text-[15px] gap-5 xl:text-[12px] lg:gap-8 mt-3 lg:ml-6  xl:hidden`}
            >
              <div className="flex  text-xs sm:text-sm lg:text-base">
                Sign In
                <BiSolidDownArrow
                  size={10}
                  className="mt-1 text-[10px] sm:text-[12px] lg:text-[14px]"
                />
              </div>
              <div className="flex  text-xs sm:text-sm lg:text-base">
                <StoreRackIcon
                  size={18}
                  className="sm:size-[20] lg:size-[25]"
                />
                <span>Set Your Store</span>
                <BiSolidDownArrow
                  size={10}
                  className="sm:size-[20] lg:size-[25]"
                />
              </div>
              <div className="flex gap-2 text-xs sm:text-sm lg:text-base">
                <BsBoxSeam size={18} className="sm:size-[20] lg:size-[25]" />
                <span>Purchases</span>
              </div>
              <div>
                <NavLink to="cart">
                  <AiOutlineShopping
                    size={18}
                    className="sm:size-[20] lg:size-[25]"
                  />
                </NavLink>
              </div>
            </div>
          ) : (
            <div
              className={`${"hidden lg:flex"} flex-col lg:flex-row lg:justify-evenly w-full text-[20px] sm:text-[15px] gap-0 xl:text-[12px] lg:gap-8 mt-3 lg:ml-6 `}
            >
              <div className="flex gap-2 text-xs sm:text-sm lg:text-base ">
                Sign In
                <BiSolidDownArrow
                  size={10}
                  className="mt-1 text-[10px] sm:text-[12px] lg:text-[14px]"
                />
              </div>
              <div className="flex gap-2 text-xs sm:text-sm lg:text-base">
                <StoreRackIcon
                  size={22}
                  className="sm:size-[20] lg:size-[25]"
                />
                <span className="flex">
                  Set Your Store{" "}
                  <BiSolidDownArrow
                    size={10}
                    className="mt-1 text-[10px] sm:text-[12px] lg:text-[14px] "
                  />
                </span>
              </div>
              <div className="flex gap-2 text-xs sm:text-sm lg:text-base">
                <BsBoxSeam size={22} className="sm:size-[20] lg:size-[25]" />
                <span>Purchases</span>
              </div>
              <div>
                <NavLink to="cart">
                  <AiOutlineShopping
                    size={25}
                    className="sm:size-[20] lg:size-[25]"
                  />
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}

      <div
        className={`bottom-nav border-t py-2 w-[95%] m-auto mt-0 2xl:block xl:block lg:block hidden`}
      >
        <div className="container mx-auto flex justify-around items-center">
          {bottomNav.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="text-sm md:text-base hover:text-black transition"
              style={{
                color: item.color || "inherit",
              }}
              activeClassName="font-bold border-b-2 border-black"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
