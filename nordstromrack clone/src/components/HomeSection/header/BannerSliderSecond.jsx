import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";

function BannerSliderSecond() {
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute left-[8px] top-[240px] transform -translate-y-1/2 z-10   py-4 cursor-pointer hover:bg-white"
        onClick={onClick}
      >
        <span className="text-[#dce3e6] hover:text-[#d37ab3]">
          {" "}
          <RiArrowLeftWideLine size={40} />
        </span>
      </div>
    );
  };

  // Next Arrow
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-[8px] top-[200px] transform-translate-y-1/2 z-10   py-4 cursor-pointer hover:bg-white"
        onClick={onClick}
      >
        <span className="text-[#dce3e6] hover:text-[#d37ab3]">
          <RiArrowRightWideLine size={40} />
        </span>
      </div>
    );
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    nextArrow: <NextArrow />, // Custom Next Arrow
  };
  const slides = [
    {
      title: "EFFY Fine Jewelry Up to 65% Off + Extra 10% Off",
      imgUrl:
        "https://n.nordstrommedia.com/it/5adcea29-0e84-4f96-b837-2285ce6bc364.jpeg?h=1224&w=1224",
      endDate: "Event ends in 5 days, 1 hour, and 39 minutes",
      link: "/events/1018857",
    },
    {
      title: "Veronica Beard Up to 65% Off",
      imgUrl:
        "https://n.nordstrommedia.com/it/4c4e129f-f526-434e-8893-1bf219fbb106.jpeg?h=1224&w=1224",
      endDate: "Event ends in 4 days, 1 hour, and 39 minutes",
      link: "/events/1019085",
    },
    {
      title: "New-In Designer Sunglasses",
      imgUrl:
        "https://n.nordstrommedia.com/it/6e774b32-08fb-482d-a85c-04753a19dc73.jpeg?h=1224&w=1224",
      endDate: "Event ends in 5 days, 1 hour, and 39 minutes",
      link: "/events/1019058",
    },
    {
      title: "Peter Millar Up to 50% Off",
      imgUrl:
        "https://n.nordstrommedia.com/it/aa036b7c-918b-4f41-b801-2dd4649404ea.jpeg?h=1224&w=1224",
      endDate: "Event ends in 5 days, 1 hour, and 39 minutes",
      link: "/events/1018941",
    },
    {
      title: "Cinq à Sept Up to 65% Off",
      imgUrl:
        "https://n.nordstrommedia.com/it/1116fbf1-f58e-42e6-8076-017e6bd7e662.jpeg?h=1224&w=1224",
      endDate: "Event ends in 4 days, 1 hour, and 39 minutes",
    },
    {
      title: "Ramy Brook Up to 75% Off",
      imgUrl:
        "https://n.nordstrommedia.com/it/c636e77e-680c-4c54-a989-b5e973889ccb.jpeg?h=1224&w=1224",
      endDate: "Event ends in 4 days, 1 hour, and 39 minutes",
    },
    {
      title: "Sweaters Up to 70% Off",
      imgUrl:
        "https://n.nordstrommedia.com/it/eee980db-da54-42c4-85db-b2db85130dcf.jpeg?h=1224&w=1224",
      endDate: "Event ends in 4 days, 1 hour, and 39 minutes",
    },
    {
      title: "Kids' Pajamas & Slippers Up to 60% Off",
      imgUrl:
        "https://n.nordstrommedia.com/it/44808ab5-3c65-4a28-8c93-bec8d026280c.jpeg?h=1224&w=1224",
      endDate: "Event ends in 4 days, 1 hour, and 39 minutes",
    },
    {
      title: "Home Reset & Refresh Up to 50% Off",
      imgUrl:
        "https://n.nordstrommedia.com/it/a688cf15-4f5c-4071-b584-c58b8fc49648.jpeg?h=1224&w=1224",
      endDate: "Event ends in 4 days, 1 hour, and 39 minutes",
    },
  ];

  return (
    <div className="relative w-[97%] mx-auto mt-5">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full ">
            <div className="w-full flex-shrink-0 flex flex-col  justify-start  p-4">
              <img
                src={slide.imgUrl}
                alt={slide.title}
                className="w-full h-full object-cover "
              />
              <h2 className="text-lg font-bold mt-2">{slide.title}</h2>
              <p className="text-sm text-gray-500">{slide.endDate}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerSliderSecond;
