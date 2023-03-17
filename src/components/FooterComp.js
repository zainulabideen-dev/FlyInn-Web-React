import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const FooterComp = () => {
  return (
    <div className="h-[50%] px-20 py-5 bg-slate-600">
      <div class="grid grid-cols-4 gap-10 text-white h-[80%]">
        <div>
          <p className="text-2xl font-bold">Fiyinn</p>
          <p className="text-sm">BUDGET</p>
          <p className="mt-5 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum{" "}
          </p>
          <div className="flex h-14 items-center">
            <a href="#">
              <BsFacebook size={20} />
            </a>
            <a href="#">
              {" "}
              <AiFillTwitterCircle size={20} className="ml-2" />
            </a>
            <a href="#">
              {" "}
              <AiFillInstagram size={20} className="ml-2" />
            </a>
            <a href="#">
              {" "}
              <AiFillLinkedin size={20} className="ml-2" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">Get in Touch</p>
          <p className="text-sm">BUDGET</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">Phone: +92 123 456789</p>
            <p className="text-sm ml-2">Email: info@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">Flights</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">Asia</p>
            <p className="text-sm ml-2">Africa</p>
            <p className="text-sm ml-2">Europe</p>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">Useful Links</p>
          <div className="items-center mt-10">
            <p className="text-sm ml-2">Contact Us</p>
            <p className="text-sm ml-2">About Us</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full text-white mt-10 text-sm h-[10%]">
        <p>All Rights Reserved</p>
        <p>Terms and Conditions - Privacy policy</p>
      </div>
    </div>
  );
};
