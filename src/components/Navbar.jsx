import React from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="lg:bg-blue-500 flex justify-between max-sm:mx-0 gap-10 max-sm:gap-[100px] lg:px-10 ">
      <div className="max-sm:hidden ">
        <h1 className="  font-bold text-[3rem] text-center text-white">
          HLS
        </h1>
        <p className=" lg:pb-5 font-bold text-white text-lg max-sm:hidden">
          Logistics Services™
        </p>
      </div>
      <div id="Desktop" className=" max-sm:hidden uppercase flex gap-[90px] items-center font-bold text-white text-xl max-sm:text-[1.8rem] ">
        <Link
          className="lg:hover:scale-125 transition 
          ease-in-out  
          lg:px-2 lg:py-1 rounded-lg"
          href="/"
        >
          Home 
        </Link>
        <Link
          className="lg:hover:scale-125 transition ease-in-out 
            lg:px-2
          lg:py-1 rounded-lg max-sm:min-w-[120px]"
          href="/about"
        >
          About
        </Link>
        <Link
          className="lg:hover:scale-125 transition ease-in-out 
            lg:px-2
          lg:py-1 rounded-lg max-sm:mx-5 "
          href="/contacts"
        >
          Contacts
        </Link>
      </div>

<div id="Smartphone" className="md:hidden flex text-[6rem]  text-blue-500 justify-around  w-full bg-slate-800 shadow-lg ">
<Link href="/" className="active:bg-white p-10 "><IoHome /></Link>
<Link href="/about" className="active:bg-white p-10 "><FaInfoCircle /></Link>
<Link href="/contacts" className="active:bg-white p-10 "><FaRegPaperPlane /></Link>
</div >

    </div>
  );
};

export default Navbar;
