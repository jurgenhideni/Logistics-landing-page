import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-16  ">
      <div>
        <h1 className="font-bold text-[3.5rem] text-center text-rose-600">
          HLS
        </h1>
        <p className="font-bold text-lg">Hideni Logistics Services™</p>
      </div>
      <div className="uppercase flex gap-[150px] items-center font-bold text-rose-700 text-xl">
        <Link
          className="hover:scale-125 transition 
          ease-in-out hover:text-white hover:bg-rose-700 
          lg:px-2 lg:py-1 rounded-lg"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:scale-125 transition ease-in-out 
          hover:text-white hover:bg-rose-700 lg:px-2
          lg:py-1 rounded-lg"
          href="/about"
        >
          About us
        </Link>
        <Link
          className="hover:scale-125 transition ease-in-out 
          hover:text-white hover:bg-rose-700 lg:px-2
          lg:py-1 rounded-lg"
          href="/contacts"
        >
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
