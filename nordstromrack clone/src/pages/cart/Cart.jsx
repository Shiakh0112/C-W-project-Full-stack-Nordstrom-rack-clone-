import React, { useEffect, useState } from "react";
import { GoGift } from "react-icons/go";
import { MdOutlineLocalShipping } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiInformationLine } from "react-icons/ri";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        // Update quantity and discounted price for existing product
        return prevCart.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1,
                discountedPrice:
                  parseFloat(item.discountedPrice) +
                  parseFloat(product.discountedPrice),
              }
            : item
        );
      } else {
        // Add new product with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Save the updated cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="product-bag bg-[#f0f3f5] w-full h-auto p-1 mt-10">
      <div className="cart-box w-[90%] flex gap-5 m-auto">
        <div className="cart-box-first m-auto mt-4 w-[63%] h-auto">
          <div className="Shopping-bag-count bg-white w-full pl-4 pt-2">
            <h1 className="text-[28px] font-bold m-auto">
              Shopping Bag ({cartItems.length})
            </h1>
            <div className="flex mt-3 text-[14px]">
              Items in your bag are not on hold.
              <div className="border-l-2 border-black h-6 mb-4 ml-4"></div>
              <div className="gift flex gap-2">
                <GoGift size={22} className="ml-4 mt-2-" />
                <div className="gift-content mb-2">
                  Add a gift message when you check out.
                </div>
              </div>
            </div>
          </div>

          <div className="shopping-items bg-white w-full m-auto mt-4 py-3 p-10">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="cart-item flex justify-between gap-6 mt-4"
                >
                  <div className="w-32">
                    <img
                      src={item.main_img}
                      alt={item.title}
                      className="w-[100%]"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#024124]">
                      Arrives before Christmas
                    </p>
                    <p className="brand text-[17px]">{item.brand}</p>
                    <p className="title text-[18px]">{item.title}</p>
                    <div className="cart-details mt-3 text-[17px]">
                      <p className="saleTime">new!</p>
                      <p className="offer">{item.discountLabel}</p>
                      <p className="items-id">ID: {item._id}</p>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p>Shipping to 98101</p>
                    <p className="text-[14px] font-bold text-[#024124]">
                      Sat, Dec 14
                    </p>
                  </div>
                  <div className="ml-3">
                    <div className="price">
                      <h1 className="text-[16px] font-bold m-auto">
                        <p>Price: ${item.discountedPrice}</p>
                      </h1>
                      <p>({item.quantity} items)</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>

        <div className="cart-box-second m-auto mt-4 w-[37%] h-auto">
          {/* Order Summary */}
          <div className="Shopping-bag-count bg-white h-auto w-full m-auto py-3">
            <h1 className="text-[15px] font-bold ml-8">
              You’re saving $9.95 with free standard shipping!
            </h1>
            <div className="flex justify-between mx-8 mt-2">
              <div className="titles text-[17px]">
                <p className="mt-2 text-[19px]">Subtotal</p>
                <p className="mt-2">Shipping</p>
                <p className="mt-2">Estimated tax</p>
              </div>
              <div className="prices text-[17px]">
                <p className="mt-2 text-[19px]">
                  $
                  {cartItems
                    .reduce(
                      (acc, item) =>
                        acc + parseFloat(item.discountedPrice) * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
                <p className="mt-2 flex gap-1">
                  <RiInformationLine size={25} className="text-[#094ebe]" />
                  Free
                </p>
                <p className="mt-2">$27.94</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
