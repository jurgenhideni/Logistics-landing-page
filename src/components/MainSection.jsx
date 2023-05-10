import React from "react";
import Image from "next/image";
import image1 from "../assets/image1.png";
import Link from "next/link";
import Socials from "./Socials";

const MainSection = () => {
  return (
    <div className="max-sm:block flex items-center justify-between lg:gap-10  ">
      <Image
        className="lg:max-h-[950px] lg:w-auto max-sm:min-w-[800px]"
        src={image1}
        alt="image"
      />

      <div className="grid gap-10 grid-cols-1 max-sm:min-w-[600px]  max-sm:ml-[5rem]">
        <h1 className="font-bold text-rose-700 text-[5rem]  max-sm:text-[4rem] ">
          A new Perspective of Delivering Goods
        </h1>
        <h2 className=" my-[50px] font-semibold text-rose-700 text-[1.5rem] text-left ">
          Efficient Packing for Seamless Shipping. Trust Our Logistics Experts
          to Handle Your Packaging Needs and Ensure Safe Delivery Every Time.
        </h2>
        <div className="max-md:grid max-md:justify-center">
          <Link
            href="/prices"
            className=" w-[150px] max-sm:w-[260px] text-center py-3 text-white px-3 
          font-bold text-[1.5rem] rounded-md max-sm:text-[2.5rem] 
          transition ease-in-out bg-rose-700 hover:text-rose-700 hover:bg-white shadow-md"
          >
            Get a Quote
          </Link>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
