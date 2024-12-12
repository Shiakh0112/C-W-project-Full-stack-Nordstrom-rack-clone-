import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";

function BannerSlider() {
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute left-[8px] top-1/2 transform -translate-y-1/2 z-10   py-4 cursor-pointer hover:bg-white"
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
        className="absolute right-[8px] top-1/2 transform-translate-y-1/2 z-10   py-4 cursor-pointer hover:bg-white"
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    nextArrow: <NextArrow />, // Custom Next Arrow
  };

  return (
    <div className="relative w-[95%] mx-auto">
      <Slider {...settings}>
        <div>
          <img
            className="w-full"
            src="https://n.nordstrommedia.com/it/9e30ddb6-3d5a-4bac-947f-35823025c98f.gif?h=720&w=1608"
            alt="Cyber Monday Deals"
          />
        </div>
        <div>
          <img
            className="w-full"
            src="https://n.nordstrommedia.com/it/6e28e69e-9559-438f-a162-45cac837a8fb.png?h=720&w=1608"
            alt="Boot Sale"
          />
        </div>
        <div>
          <img
            className="w-full"
            src="https://n.nordstrommedia.com/it/c6b9e604-8220-4c25-8417-87a8a4667e67.jpeg?h=720&w=1608"
            alt="Winter Essentials"
          />
        </div>
      </Slider>
    </div>
  );
}

export default BannerSlider;
