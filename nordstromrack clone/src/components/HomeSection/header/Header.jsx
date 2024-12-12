import React, { useState, useEffect } from "react";
import BannerSlider from "./BannerSlider";
import BannerSliderSecond from "./BannerSliderSecond";
// import BannerSlider from "./BannerSlider";
import { NavLink } from "react-router-dom";
import Login from "../../../pages/LoginSignup/Login";
import RandomProduct from "./RandomProduct";

function Header() {
  const Details = [
    {
      imgURL:
        "https://n.nordstrommedia.com/it/182c27d0-2967-4235-8d25-5b5ba45c17a3.jpeg?h=188&w=402",
      title: "An Exclusive Offer",
      content: "Just for new Nordstrom credit cardmembers. Restrictions apply.",
      link: "Apply Now",
    },
    {
      imgURL:
        "	https://n.nordstrommedia.com/id/2961092c-5387-4c52-9c94-1379fe2ac7ec.jpeg?h=188&w=402",
      title: "We Launched a Podcast!",
      content:
        "Join Pete Nordstrom and special guests for a behind-the-scenes look at Nordstrom.",
      link: "Listen to All Episodes",
    },
    {
      imgURL:
        "https://n.nordstrommedia.com/it/b391f894-dfd3-4312-8f2b-0d6689583272.jpeg?h=188&w=402",
      title: "Sponsor a Moment. It Takes Little to Be Big.",
      content: "You can help by giving the gift of mentorship.",
      link: "Donate Now & Learn More",
    },
    {
      imgURL:
        "https://n.nordstrommedia.com/it/1e3d4c7c-d622-4e91-addd-365c00ca23d3.png?h=188&w=402",

      link: "Learn More",
    },
  ];
  return (
    <header>
      <Login />
      {/* Login Popup */}

      <div className="banner-first relative w-[95%] h-[200px] overflow-hidden m-auto mt-16">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://n.nordstrommedia.com/it/268f7dd3-05c0-49aa-8652-b060b8327a42.mp4?h=&w="
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="banner-slider mt-8">
        <BannerSlider />
      </div>
      <div className="banner-second">
        <div className="banner-first relative w-[95%] h-[200px] overflow-hidden m-auto mt-8">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://n.nordstrommedia.com/it/fbc77913-e397-4b76-b755-4cbf8dcefcd0.png?h=200&w=1608"
          />
        </div>
      </div>
      <div className="random-product ">
        {" "}
        <RandomProduct />{" "}
      </div>
      <div className="banner-slider-second">
        <BannerSliderSecond />
      </div>
      <div className="banner-third">
        <div className="banner-first relative w-[95%] h-[200px] overflow-hidden m-auto mt-10">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="	https://n.nordstrommedia.com/it/05fa468c-4c3c-4d6d-838c-69a5a34f3009.png?h=200&w=1608"
          />
        </div>
      </div>
      <div className="random-product">{/* adit latter  */}</div>
      <div className="banner-third">
        <div className="banner-first relative w-[95%] h-[80vh] overflow-hidden m-auto mt-10">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="	https://n.nordstrommedia.com/it/cda3c63a-706c-4f54-801e-406f69335a18.gif?h=720&w=1608"
          />
        </div>
      </div>
      <div className="details py-10 w-[95%] m-auto">
        <div className="main-title text-left my-12">
          <h1 className="text-3xl font-bold text-gray-800">More to Know</h1>
        </div>
        <div className="brands grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
          {Details.map((ele, index) => (
            <div key={index} className=" overflow-hidden w-[100%] ">
              <img
                src={ele.imgURL}
                alt={ele.title || "Image"}
                className="w-[100%] h-44 object-cover m-auto"
              />
              <div className="py-4">
                {ele.title && (
                  <h2 className="text-lg font-semibold text-gray-800">
                    {ele.title}
                  </h2>
                )}
                {ele.content && (
                  <p className="text-sm text-gray-600 mt-2">{ele.content}</p>
                )}
                <a
                  href="#"
                  className="inline-block mt-4 text-blue-500 hover:text-blue-700 font-medium"
                >
                  {ele.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
