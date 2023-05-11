import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-16 max-sm:mx-0 gap-10 max-sm:gap-[100px] ">
      <div>
        <h1 className="font-bold text-[4.5rem] text-center text-rose-600 mx-5 ">
          HLS
        </h1>
        <p className="font-bold text-lg max-sm:hidden">
          Hideni Logistics Services™
        </p>
      </div>
      <div className="uppercase flex gap-[90px] items-center font-bold text-rose-700 text-xl max-sm:text-[1.8rem] ">
        <Link
          className="lg:hover:scale-125 transition 
          ease-in-out lg:hover:text-white lg:hover:bg-rose-700 
          lg:px-2 lg:py-1 rounded-lg"
          href="/"
        >
          Home
        </Link>
        <Link
          className="lg:hover:scale-125 transition ease-in-out 
          lg:hover:text-white lg:hover:bg-rose-700 lg:px-2
          lg:py-1 rounded-lg max-sm:min-w-[120px]"
          href="/about"
        >
          About
        </Link>
        <Link
          className="lg:hover:scale-125 transition ease-in-out 
          lg:hover:text-white lg:hover:bg-rose-700 lg:px-2
          lg:py-1 rounded-lg max-sm:mx-5 "
          href="/contacts"
        >
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
