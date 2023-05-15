import Navbar from "@/components/Navbar";
import React from "react";
import box from "../assets/box.png";
import Image from "next/image";

import { BsTiktok } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contacts = () => {
  return (
    <div className="h-screen  lg:bg-[url('https://wallpapercave.com/wp/wp3704690.png')] flex flex-col gap-10 ">
      <Navbar />
      <div className="flex max-sm:mb-16">
        <Image src={box} alt="box" className="lg:hidden max-sm:min-w-[350px]" />
        <h1 className="text-center font-bold text-rose-700 lg:text-[7rem] max-md:text-[6rem] max-sm:min-w-[500px] ">
          Lets have a talk !
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 bg-rose-700 max-sm:bg-none ">
        <div className="max-sm:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.191179938245!2d19.826457911960315!3d41.326455971187976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503117c11e3f9b%3A0x6d2e57eb3fb56bdd!2sRruga%20Shyqyri%20Ishmi%2C%20Tirana%2C%20Albania!5e0!3m2!1sen!2s!4v1684145580398!5m2!1sen!2s"
            width="550"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          className="max-w-[600px] h-[450px] text-[1.5rem] bg-rose-700 
        text-white max-sm:min-w-[900px] max-sm:min-h-[600px] max-sm:text-center max-sm:border-b-8 border-slate-200 max-sm:pt-3 "
        >
          <h2 className="text-[4rem]">Meet Us</h2>
          <p className=" font-light text-[2.5rem]">
            Feel free to call us any time.
          </p>

          <div className="flex flex-col gap-[30px] mt-14 max-sm:text-[2.3rem] ">
            <p>Phone : +0123 4567 8910</p>
            <p>Email : hello@logistics.com</p>
            <p>Adress : Shyqyri Ishmi 43</p>
          </div>
        </div>
        <div className="bg-rose-800  flex flex-col   max-sm:min-w-[900px] lg:gap[100px] max-sm:text-center max-sm:items-center lg:px-6 max-sm:py-5 ">
          <h2 className="text-[3rem] text-white max-sm:text-[4rem]  ">
            Reach us
          </h2>
          <div
            className="flex flex-col gap-7  max-sm:text-[2rem] text-xl
          text-white  max-sm:py-10 max-sm:px-10 max-sm:gap-10 relative top-10 max-sm:mb-[100px]"
          >
            <p className=" flex items-center gap-10">
              <MdOutgoingMail className="max-sm:text-[3rem]" />
              logisticshideni@gmail.com
            </p>

            <p className=" flex items-center gap-10">
              <BsWhatsapp className="max-sm:text-[2rem]" />
              00355697431224
            </p>

            <p className=" flex items-center gap-10">
              <FaInstagram className="max-sm:text-[2rem]" />
              @hidenilogistics
            </p>

            <p className=" flex items-center  gap-10">
              <FaFacebook className="max-sm:text-[2rem]" /> Hideni Logistics
            </p>

            <p className=" flex items-center  gap-10">
              <BsTiktok className="max-sm:text-[2rem]" />
              @hidenilogistics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
