import React from "react";
import { GoGift } from "react-icons/go";
import { MdOutlineLocalShipping } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiInformationLine } from "react-icons/ri";

function Cart() {
  return (
    <div className="product-bag bg-[#f0f3f5] w-full h-[100vh] p-1 mt-10">
      <div className="cart-box  w-[90%] flex gap-5 m-auto">
        <div className="cart-box-first   m-auto mt-4 w-[63%] h-auto  ">
          <div className="Shopping-bag-count bg-white  w-full pl-4 pt-2">
            <h1 className="text-[28px] font-bold m-auto">Shopping Bag (1)</h1>
            <div className="flex mt-3 text-[14px] ">
              Items in your bag are not on hold.
              <div className=" border-l-2 border-black h-6 mb-4  ml-4"></div>
              <div className="gift flex gap-2">
                <GoGift size={22} className="ml-4 mt-2-" />
                <div className="gift-content mb-2">
                  Add a gift message when you check out.
                </div>
              </div>
            </div>
          </div>
          <div className="shopping-items bg-white w-full m-auto  mt-4  py-3">
            <div className="flex ml-4">
              <MdOutlineLocalShipping className="mt-2 text-[25px] font-bold mr-2" />
              <div className="content ">
                <h1 className="text-[25px] font-bold m-auto ">
                  Shipping (1 item) to{" "}
                  <NavLink className="  text-[25px] underline text-[#094ebe]">
                    98101
                  </NavLink>
                </h1>
                <div className=" mb-2">
                  Free standard shipping to your address or store on orders $89+
                </div>
                <NavLink className="  text-[16px]  text-[#094ebe]">
                  Change all to pickup
                </NavLink>
              </div>
            </div>
            <hr className="w-[95%] m-auto mt-6   border border-[#c2cbcd]-4 text-[#c2cbcd]" />
            <div className="cart-item flex justify-evenly gap-12 mt-4">
              <div>
                {" "}
                <img
                  src="https://n.nordstrommedia.com/it/4c9a2ba1-a20d-4e8a-951d-92706cf6d830.jpeg?w=156&h=240"
                  alt=""
                />{" "}
              </div>
              <div>
                <p className="  text-[14px] font-bold text-[#024124]">
                  Arrives before Christmas
                </p>
                <p className="brand text-[17px] ">adidas</p>
                <p className="title text-[18px] ">NMD Sneaker</p>
                <div className="cart-details mt-3 text-[17px] ">
                  <p className="saleTime">new!</p>
                  <p className="offer">28% off.</p>
                  <p className="items-id">12345678910 </p>
                </div>
              </div>
              <div className="ml-3">
                <p>Shipping to 98101</p>
                <p className="  text-[14px] font-bold text-[#024124]">
                  Sat, Dec 14–Sat, Dec 21
                </p>
              </div>
              <div className="ml-3">
                <div className="price">
                  <h1 className="text-[16px] font-bold m-auto">$269.91</h1>
                  <p>($89.97 each)</p>
                </div>
                <div className="offer-price mt-7">
                  <p>Now:$89.99(currant price)</p>
                  <p className="ml-8">*$160.00 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-box-second  m-auto mt-4 w-[37%] h-auto ">
          <div className="Shopping-bag-count bg-white h-auto w-full m-auto py-3 ">
            <h1 className="text-[15px] font-bold ml-8">
              You’re saving $9.95 with free standard shipping!
            </h1>
            <div className="w-[80%] h-3  ml-8 mt-1 flex gap-2">
              <div className="discount w-full h-4 bg-[#186adc] mt-2"></div>
              <span className="text-[#647175] text-[16px]">$89</span>
            </div>
            <div className="ml-8 mt-6  ">
              <span className="text-[#094ebe] underline my-3 text-[14px] line-clamp-2">
                Exclusions apply
              </span>
            </div>
          </div>
          <div className="Shopping-bag-count bg-white h-auto w-full m-auto py-3 mt-4">
            <h1 className="text-[25px] font-bold ml-8 mb-0">Order summary</h1>
            <div className="  flex justify-between mx-8 mt-2">
              <div className="titles text-[17px] ">
                <p className="mt-2 text-[19px]">Subtotal</p>
                <p className="mt-2">Shipping</p>
                <p className="mt-2">Estimated tax</p>
              </div>
              <div className="prices text-[17px]">
                <p className="mt-2 text-[19px]">$269.91</p>
                <p className="mt-2 flex gap-1">
                  <RiInformationLine size={25} className="text-[#094ebe]" />{" "}
                  Free
                </p>
                <p className="mt-2">$27.94</p>
              </div>
            </div>
            <hr className="w-[90%] my-4 m-auto" />
            <div className="flex justify-between mx-8">
              <div className="Estimated">
                <p className="text-[19px]">Estimated total</p>
              </div>
              <div className="Estimated-price">
                <p className=" text-[19px]">$297.85</p>
              </div>
            </div>
            <div className="paypal-img">
              <img
                className="w-[75px] h-[16px] ml-7 mt-3 "
                src="https://n.nordstrommedia.com/id/ec0b665d-d1fa-44e3-8efb-d85017c11bf1.png"
                alt=""
              />
            </div>
            <div className="content-checkout w-[70%] h-10 m-auto text-center align-middle mt-5 ">
              <h1 className=" bg-[#f0f3f5] p-2 m-auto text-center ">
                Way to go—you're saving $210.09! 🙌
              </h1>
            </div>
            <div className="text-[18px] checkout-btn w-[88%] h-12 text-center bg-blue-500 p-3 mt-4 m-auto text-white hover:bg-blue-700  ">
              <NavLink>Check Out</NavLink>
            </div>
            <div className="content-checkout w-[70%] h-10 m-auto text-center  mt-2 ">
              <h1 className="  p-1 m-auto text-center ">
                Continue to Checkout to pay with PayPal.
              </h1>
            </div>
          </div>
        </div>x
      </div>
    </div>
  );
}

export default Cart;
