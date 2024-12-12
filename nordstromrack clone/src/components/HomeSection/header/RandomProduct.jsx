import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../redux/actions/productActions";
import Slider from "react-slick"; // Import Slider from react-slick
import { fetchProduct } from "../../../redux/action/productActions";

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
    dots: true, // Shows dots for navigation
    infinite: true, // Infinite loop scrolling
    speed: 500, // Speed of transition
    slidesToShow: 3, // Number of slides to show at once
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
      <Slider {...sliderSettings}>
        {filteredProducts.map((product) => (
          <div key={product._id} className="slider-item">
            <img src={product.main_img} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RandomProduct;
