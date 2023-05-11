import Navbar from "@/components/Navbar";
import React from "react";
import box from "../assets/box.png";
import Image from "next/image";
const Contacts = () => {
  return (
    <div className="h-screen  lg:bg-[url('https://wallpapercave.com/wp/wp3704690.png')] flex flex-col gap-10 ">
      <Navbar />
      <div className="flex">
        <Image src={box} alt="box" className="lg:hidden max-sm:min-w-[350px]" />
        <h1 className="text-center font-bold text-rose-700 lg:text-[7rem] max-md:text-[6rem] max-sm:min-w-[500px] ">
          Lets have a talk !
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 bg-rose-700 max-sm:bg-none ">
        <div className="max-sm:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4237.223685465344!2d19.833658964896557!3d41.32692523426859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1683541601335!5m2!1sen!2s"
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
        <div className="bg-rose-800  flex flex-col gap-[120px] max-sm:gap-[100px] max-sm:min-w-[900px]  max-sm:text-center max-sm:items-center lg:px-6 max-sm:py-5">
          <h2 className="text-[3rem] text-white max-sm:text-[4rem]  ">
            Reach us
          </h2>
          <p className="text-white max-sm:text-[2.2rem]">
            hello, <br /> my name is{" "}
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-none outline-none max-w-[100px] max-sm:px-2  max-sm:text-[1.7rem]"
            />
            and my e-mail address is{" "}
            <input
              type="text"
              placeholder="your e-mail"
              className="bg-transparent border-none outline-none max-w-[100px] max-sm:px-2  max-sm:text-[1.7rem]"
            />
            and i <br />
            would like to discuss about{" "}
            <input
              type="text"
              placeholder="this project ."
              className="bg-transparent border-none outline-none min-w-[250px] max-sm:px-2  max-sm:text-[1.7rem] "
            />
          </p>
          <button
            className="bg-white lg:max-w-[100px]  text-rose-700 px-10 py-3 rounded-md font-bold hover:text-white hover:bg-rose-500 max-sm:text-[2.5rem]"
            type="submit"
          >
            Send
          </button>
          <p className="lg:hidden text-[1.3rem] pb-3 text-white">
            The information you provide will be fully protected and will not be
            used illegally by any means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
