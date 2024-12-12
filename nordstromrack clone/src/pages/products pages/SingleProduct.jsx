import React from "react";

const SingleProductPage = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-4 shadow-lg border rounded-lg">
      {/* Header Section */}
      <h2 className="text-xl font-bold mb-4">Brand Name</h2>
      <h1 className="text-2xl font-semibold">Product Title</h1>
      <p className="text-gray-500 text-sm">Main Category</p>

      {/* Image and Gallery */}
      <div className="flex flex-col md:flex-row mt-6">
        {/* Main Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Main Product"
            className="w-full h-auto max-h-96 object-cover rounded-lg"
          />
        </div>
        {/* Gallery Images */}
        <div className="flex-1 flex flex-wrap gap-2 mt-4 md:mt-0">
          <img
            src="https://via.placeholder.com/100"
            alt="Gallery 1"
            className="w-24 h-24 object-cover rounded-md border border-gray-200 hover:shadow-md"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Gallery 2"
            className="w-24 h-24 object-cover rounded-md border border-gray-200 hover:shadow-md"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Gallery 3"
            className="w-24 h-24 object-cover rounded-md border border-gray-200 hover:shadow-md"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Gallery 4"
            className="w-24 h-24 object-cover rounded-md border border-gray-200 hover:shadow-md"
          />
        </div>
      </div>

      {/* Pricing and Discounts */}
      <div className="mt-6">
        <p className="text-red-500 text-sm font-medium">Limited-Time Sale</p>
        <div className="flex items-center gap-2 text-lg">
          <p className="font-bold text-green-600">
            Current Price $36.38 to $49.97
          </p>
          <p className="line-through text-gray-500">$60.00</p>
        </div>
        <p className="text-gray-600">Up to 39% off select items.</p>
        <p className="text-gray-500 text-sm">Comparable value $60.00</p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
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
