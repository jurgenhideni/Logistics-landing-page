import React from "react";

const prices = () => {
  return (
    <div>
      <h1 className="text-center text-[3.5rem] font-bold text-rose-700 mb-3">
        Get a Quote
      </h1>

      <div className="grid justify-center gap-5">
        <h2 className="text-[2rem]">Basic Information</h2>
        <form className=" flex flex-col justify-center gap-5 text-[1.2rem] text-rose-700">
          <input
            type="email"
            placeholder="E-mail"
            required
            className="py-1 px-2 outline-none border-0"
          />
          <div className="flex items-center gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="py-1 px-2 outline-none border-0"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="py-1 px-2 outline-none border-0"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="py-1 px-2 outline-none border-0"
          />

          <h2 className="text-black text-[2rem] pt-2">Adress Information</h2>
          <input
            type="text"
            placeholder="Adress"
            required
            className="py-1 px-2 outline-none border-0"
          />
          <div className="flex items-center gap-5">
            <input
              type="text"
              placeholder="City"
              className="py-1 px-2 outline-none border-0"
            />
            <input
              type="text"
              placeholder="State"
              className="py-1 px-2 outline-none border-0"
            />
          </div>
          <input
            type="number"
            placeholder="ZIP"
            className="py-1 px-2 outline-none border-0"
          />
          <h2 className="text-black text-[2rem] pt-2">Relocation Details</h2>
          <input
            type="number"
            placeholder="Estimated HHE volume  (cbm)"
            required
            className="py-1 px-2 outline-none border-0"
          />
          <div className="flex items-center gap-5">
            <input
              type="text"
              placeholder="Pick-Up Adress"
              className="py-1 px-2 outline-none border-0"
            />
            <input
              type="text"
              placeholder="Unloading Adress"
              className="py-1 px-2 outline-none border-0"
            />
          </div>
          <input
            type="text"
            placeholder="House Type (Villa/Apartment)"
            className="py-1 px-2 outline-none border-0"
          />
          <input
            type="date"
            placeholder="Packing Day"
            className="py-1 px-2 outline-none border-0"
          />
        </form>
        <button className="bg-rose-700 px-10 py-1 mx-auto my-1 text-white rounded-lg font-bold">
          Submit
        </button>
      </div>
    </div>
  );
};

export default prices;
