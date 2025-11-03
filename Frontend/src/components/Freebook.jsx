import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../assets/list.json";
import Cards from "./Cards";

const Freebook = () => {
  // ✅ Filter only free category
  const filterData = list.filter((data) => data.category === "Free");

  // ✅ Slider settings
  const settings = {
    dots: true,
    infinite: filterData.length > 3,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-16">
      {/* 🔥 Section Header */}
      <div className="text-center mb-10">
        <h1 className="font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Learn for Free 🚀
        </h1>
        <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl mx-auto">
          Unlock your potential with our <span className="font-semibold text-blue-600">free courses</span>!  
          Dive into categories like <span className="italic text-purple-600">Food, Music, Romance, Travel</span> and more —  
          new content keeps coming every week. 🌈
        </p>
      </div>

      {/* 🎓 Course Carousel */}
      <div className="mt-10 ">
        <Slider {...settings}>
          {filterData.map((item) => (
            <div key={item.id} className="px-2">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>

      {/* ✨ Footer Note */}
      <div className="text-center mt-10">
        <p className="text-gray-500 text-sm md:text-base">
          🎯 Keep learning, keep growing — your journey starts here!
        </p>
      </div>
    </div>
  );
};

export default Freebook;
