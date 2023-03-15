import React from "react";
import CoinImage from "../assets/coin.png";

export const ServicesComp = () => {
  const ServiceItems = () => {
    return (
      <div className="mt-5">
        <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
          <img src={CoinImage} className="w-[20px] h-[20px]" />
        </div>
        <p className="text-black text-lg mt-2">Price Beating Guarantee</p>
        <div className="w-[200px] mt-1">
          <p className="text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[80%] px-20 py-20">
      <div class="grid grid-cols-2 gap-2 h-[90%]">
        <div>
          <p className="text-sm">BEST CHOICE</p>
          <p className="text-3xl mt-1">
            Why Should<br></br>You Use
            <span className="text-[#3781c5]">
              {" "}
              Our <br></br>Services
            </span>
          </p>
          <ServiceItems />
        </div>
        <div>
          <div className="flex justify-between">
            <ServiceItems />
            <ServiceItems />
          </div>
          <div className="flex justify-between">
            <ServiceItems />
            <ServiceItems />
          </div>
        </div>
      </div>
    </div>
  );
};
