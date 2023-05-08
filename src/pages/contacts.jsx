import Navbar from "@/components/Navbar";
import React from "react";

const Contacts = () => {
  return (
    <div className="h-screen bg-[url('https://wallpapercave.com/wp/wp3704690.png')]">
      <Navbar />

      <h1 className="text-center font-bold text-rose-700 text-[7rem]  ">
        Lets have a talk !
      </h1>
      <div className="grid grid-cols-3 bg-rose-700 ] ">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4237.223685465344!2d19.833658964896557!3d41.32692523426859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1683541601335!5m2!1sen!2s"
            width="550"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="max-w-[600px] h-[450px] text-[1.5rem] bg-rose-700 text-white">
          <h2 className="text-[3rem] ">Meet Us</h2>
          <p className=" font-light">Feel free to call us any time.</p>
          <br />
          <div className="flex flex-col gap-5 mt-14">
            <p>Phone : +0123 4567 8910</p>
            <p>Email : hello@logistics.com</p>
            <p>Adress : Shyqyri Ishmi 43</p>
          </div>
        </div>
        <div className="bg-rose-800 pl-[20px] flex flex-col gap-[120px] ">
          <h2 className="text-[3rem] text-white ">Reach us</h2>
          <p className="text-white">
            hello, <br /> my name is{" "}
            <input
              type="text"
              placeholder="your name"
              className="bg-transparent border-none outline-none max-w-[100px] px-2"
            />
            and my e-mail address is{" "}
            <input
              type="text"
              placeholder="your e-mail"
              className="bg-transparent border-none outline-none max-w-[100px] px-2"
            />
            and i <br />
            would like to discuss about{" "}
            <input
              type="text"
              placeholder="this project ."
              className="bg-transparent border-none outline-none min-w-[250px] px-2"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
