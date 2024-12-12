import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleProductPage = () => {
  const { productId } = useParams(); // Get product ID from URL
  const { products } = useSelector((state) => state.product || {});
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products) {
      const foundProduct = products.find(
        (product) => product._id === productId
      );
      setProduct(foundProduct);
    }
  }, [products, productId]);

  // Handle Add to Cart functionality
  const addToCart = () => {
    if (product) {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      cartItems.push(product); // Add current product to the cart
      localStorage.setItem("cart", JSON.stringify(cartItems)); // Save cart to localStorage
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 shadow-lg border rounded-lg">
      {/* Header Section */}
      <h2 className="text-xl font-bold mb-4">{product.brand}</h2>
      <h1 className="text-2xl font-semibold">{product.title}</h1>
      <p className="text-gray-500 text-sm">{product.main_category}</p>

      {/* Image and Gallery */}
      <div className="flex flex-col md:flex-row mt-6">
        {/* Main Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={product.main_img}
            alt="Main Product"
            className="w-full h-auto max-h-96 object-cover rounded-lg"
          />
        </div>
        {/* Gallery Images */}
        <div className="flex-1 flex flex-wrap gap-2 mt-4 md:mt-0">
          {product.galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-24 h-24 object-cover rounded-md border border-gray-200 hover:shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Pricing and Discounts */}
      <div className="mt-6">
        <p className="text-red-500 text-sm font-medium">Limited-Time Sale</p>
        <div className="flex items-center gap-2 text-lg">
          <p className="font-bold text-green-600">
            Current Price {product.priceRange}
          </p>
          <p className="line-through text-gray-500">{product.originalPrice}</p>
        </div>
        <p className="text-gray-600">Up to 39% off select items.</p>
        <p className="text-gray-500 text-sm">
          Comparable value {product.originalPrice}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={addToCart}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button className="bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default SingleProductPage;
