import React from "react";
import Image from "next/image";
import image1 from "../assets/image1.png";
import Link from "next/link";
import Socials from "./Socials";

const MainSection = () => {
  return (
    <div className="flex items-center justify-between mr-5">
      <Image className="lg:max-h-[950px] lg:w-auto" src={image1} alt="image" />

      <div className="grid gap-10 grid-cols-1">
        <h1 className="font-bold text-rose-700 text-[5rem] ">
          A new Perspective <br />
          of Delivering Goods
        </h1>
        <h2 className=" my-[50px] font-semibold text-rose-700 text-[1.5rem] ">
          Efficient Packing for Seamless Shipping. <br /> Trust Our Logistics
          Experts to Handle <br /> Your Packaging Needs and Ensure Safe <br />
          Delivery Every Time.
        </h2>
        <Link
          href="/prices"
          className=" w-[150px] text-center py-3 text-rose-600 
          font-bold text-[1.5rem] rounded-md 
          hover:bg-rose-700 hover:text-white
          transition ease-in-out "
        >
          Prices $$$
        </Link>
        <Socials />
      </div>
    </div>
  );
};

export default MainSection;
