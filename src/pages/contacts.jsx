import Navbar from "@/components/Navbar";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import box from "../assets/box.png";
import management from "../assets/management-team.jpg";
import Image from "next/image";

const Contacts = () => {
  const messageSent = () => {
    alert(
      "Thank you for submitting the form on our website. We have received your information, and we appreciate your interest. We are currently reviewing your submission, and one of our team members will get back to you shortly regarding your inquiry."
    );
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="flex max-sm:mb-16">
        <Image src={box} alt="box" className="lg:hidden max-sm:min-w-[350px]" />
        <h1 className="text-center lg:mx-auto font-bold text-rose-700 lg:text-[7rem] max-md:text-[6rem] max-sm:min-w-[500px] ">
          Lets have a talk !
        </h1>
      </div>
      <div className="flex justify-center my-10 ">
        <Image
          src={management}
          width={465}
          height={600}
          alt=""
          className="rounded-l-xl max-sm:hidden"
        />

        <form
          ref={form}
          onSubmit={sendEmail}
          className=" grid grid-cols-1 max-w-[600px] gap-7 px-10 py-10 bg-white rounded-r-xl max-sm:flex max-sm:flex-col max-sm:relative left-56 max-sm:max-w-[900px]
         "
        >
          <h1 className="text-center font-bold text-[2rem] text-red-700">
            Contact us
          </h1>
          <div className="flex gap-10">
            <input
              autoComplete="off"
              className="py-3 px-5 rounded-lg outline-none bg-slate-100"
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />

            <input
              autoComplete="off"
              className="py-3 px-5 rounded-lg outline-none bg-slate-100"
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>

          <input
            autoComplete="off"
            className="py-3 px-5 rounded-lg outline-none bg-slate-100"
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            autoComplete="off"
            className="py-3 px-5 rounded-lg outline-none bg-slate-100"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            autoComplete="off"
            className="py-3 px-5 rounded-lg outline-none bg-slate-100"
            type="text"
            name="volume"
            placeholder="Estimated HHE Volume (m3)"
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="7"
            className="bg-slate-100 rounded-xl p-2 outline-none"
          />
          <button
            onClick={messageSent}
            className="bg-rose-700 text-white text-[1.5rem] font-bold py-2 rounded-xl hover:bg-rose-900"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
