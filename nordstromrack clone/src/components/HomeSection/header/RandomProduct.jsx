import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick"; // Import Slider from react-slick
import { fetchProduct } from "../../../redux/action/productActions";
import { Link } from "react-router-dom"; // Import Link for routing
import "../../../index.css";

const RandomProduct = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.product || {}
  );

  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch Products
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // Filter Products by "Random" Category
  useEffect(() => {
    if (products) {
      const randomCategoryProducts = products.filter(
        (product) => product.main_category === "Random"
      );
      setFilteredProducts(randomCategoryProducts);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!filteredProducts || filteredProducts.length === 0) {
    return <div>No products available in the "Random" category</div>;
  }

  // Slider settings for React Slick
  const sliderSettings = {
    dots: false, // Shows dots for navigation
    infinite: true, // Infinite loop scrolling
    speed: 500, // Speed of transition
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024, // For larger screens, 3 slides will be shown
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For medium screens, 1 slide will be shown
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1>Random Category Products</h1>
      {/* React Slick Slider */}
      <div className="w-[95%] m-auto">
        <Slider {...sliderSettings} className="m-auto">
          {filteredProducts.map((product) => (
            <div key={product._id} className="m-auto slider-item">
              <div className="card-background w-[90%] bg-white shadow-lg my-14 p-2">
                {/* Product Image */}
                <div
                  className="flex justify-center w-[100%] items-center h-52 object-cover mask-circle"
                  // Matches the card background
                >
                  <img
                    src={product.main_img}
                    alt="Product"
                    className="h-full object-contain w-[100%] rounded-md shadow-lg"
                  />
                </div>
                {/* Popular Badge */}
                <span className="block text-sm font-semibold text-gray-600 mt-2">
                  Popular
                </span>
                {/* Color Options */}
                <div className="flex items-center mt-2 space-x-2">
                  {product.galleryImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Color ${index + 1}`}
                      className="w-6 h-6 rounded-full border border-gray-300"
                    />
                  ))}
                </div>
                {/* Availability */}
                <p className="text-green-600 font-medium mt-2">
                  Arrives before Christmas
                </p>
                {/* Product Title */}
                <h2 className="text-lg font-medium text-gray-800 mt-1">
                  {product.brand}
                </h2>
                {/* Price Section */}
                <p className="text-gray-800 font-semibold mt-1">
                  {product.priceRange}{" "}
                  <span className="text-gray-500">{product.discountLabel}</span>
                </p>
                <p className="text-gray-400 text-sm line-through">
                  {product.originalPrice}
                </p>
                {/* Rating */}
                <div className="flex items-center mt-2">
                  <span className="text-blue-500 text-sm">★★★★☆</span>
                  <span className="text-gray-500 ml-2 text-sm">(24)</span>
                </div>

                {/* Link to Single Product Page */}
                <Link
                  to={`/product/${product._id}`}
                  className="mt-4 text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RandomProduct;
