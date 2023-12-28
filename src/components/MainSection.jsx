import React from "react";
import ilustration from "../assets/ilustration.png"
import { BiSolidShip } from "react-icons/bi";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaWarehouse } from "react-icons/fa";
import { FaTruckLoading } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

const MainSection = () => {
  return (
    <>
   <div className=" lg:ml-16 text-white lg:min-h-[90vh] lg:flex lg:items-center lg:justify justify-between">
    <div className="lg:max-w-[700px] flex flex-col max-sm:text-center max-sm:mx-16  gap-2">
      <h1 className="lg:font-bold lg:text-[3.5rem] 
      max-sm:text-[4rem] 
      mt-10 max-sm:font-bold">YOUR TRUSTED PARTNER IN LOGISTICS EXELLENCE!</h1>
     <p >We specialize in providing seamless logistics solutions tailored to meet your unique needs.
      Our Company is committed to delivering efficiency, reliability, and cost-effectiveness to optimize your supply chain.
      Explore our comprehensive range of services, including transportation, warehousing, and supply chain management.
     </p>
     
     <Image src={ilustration}  alt="photo" className="lg:w-[600px] lg:h-[600px] mx-auto md:hidden" />
     <Link href="/about" className="text-center text-[1.2rem]
     lg:rounded-lg lg:hover:bg-white lg:hover:text-blue-500  lg:font-bold lg:px-10 py-4 bg-blue-500 max-sm:text-[3rem] 
     max-sm:font-bold">FIND OUT MORE...
     </Link>
    
     </div>
    <Image src={ilustration}  alt="photo" className="lg:w-[600px] lg:h-[600px] mr-10 max-sm:hidden" />
   </div>

   <div className="lg:px-20 bg-white flex justify-between max-sm:hidden">
    <div>
      <h2 className="font-bold text-[1.5rem] bg-slate-200 w-[200px] text-center"><span className="text-blue-500 font-extrabold " >|</span>  WHAT WE DO </h2>
      <h2 className="mt-10 text-[2.5rem] font-bold text-blue-500">Safe and Reliable <br /> Cargo Solutions</h2>
  </div>
   
<div className="grid grid-cols-2 gap-10 max-w-[1150px] lg:py-10">

  <div id="1" className="flex gap-5 lg:shadow-lg lg:py-10 lg:px-5">
  <BiSolidPlaneAlt
 className="lg:my-1 lg:text-yellow-500 lg:text-[5rem]" />
  <div> 
    <h2 className="font-bold text-blue-500 text-[2rem] ">Air Fright Services</h2>
    <p>Our logistics companys air freight service is 
      characterized by a commitment to timely deliveries,
       providing a dependable solution for your urgent shipping needs.</p>
  </div>
 </div>
  <div id="2" className="flex gap-5 lg:shadow-lg lg:py-10 lg:px-5">
  <BiSolidShip className="lg:my-1 lg:text-yellow-500 lg:text-[5rem]" />
  <div> 
    <h2 className="font-bold text-blue-500 text-[2rem]">Sea Transport Services</h2>
    <p>Our logistics company offers a reliable sea transport service, ensuring the efficient and secure delivery 
      of your cargo across international waters.</p>
  </div>
 </div>
  <div id="3" className="flex gap-5 lg:shadow-lg lg:py-10 lg:px-5">
  <FaWarehouse className="lg:my-1 lg:text-yellow-500 lg:text-[5rem]" />
  <div> 
    <h2 className="font-bold text-blue-500 text-[2rem]">Warehousing Services</h2>
    <p>Our logistics company offers a reliable sea transport service, ensuring the efficient and secure delivery 
      of your cargo across international waters.</p>
  </div>
 </div>
  <div id="4" className="flex gap-5 lg:shadow-lg lg:py-10 lg:px-5">
  <FaTruckLoading  className="lg:my-1 lg:text-yellow-500 lg:text-[5rem]" />
  <div> 
    <h2 className="font-bold text-blue-500 text-[2rem]">Local Shipping Services</h2>
    <p>Our logistics company offers a reliable sea transport service, ensuring the efficient and secure delivery 
      of your cargo across international waters.</p>
  </div>
 </div>

</div>

   </div>

   <div id="Smartphone" className="md:hidden bg-white h-full mt-10" >
<h1 className="text-[3.5rem] font font-extrabold text-blue-500 text-center py-10">WHAT WE DO </h1>
   <div id="1" className="flex gap-5 shadow-lg py-10 px-5 mx-10">
  <BiSolidPlaneAlt
 className="my-1 text-yellow-500 text-[5rem]" />
  <div> 
    <h2 className="font-bold text-blue-500 text-[3rem] ">Air Fright Services</h2>
    <p className="text-[1.5rem]">Our logistics companys air freight service is 
      characterized by a commitment to timely deliveries,
       providing a dependable solution for your urgent shipping needs.</p>
  </div>
 </div>
 <div id="2" className="flex gap-5 shadow-lg py-10 px-5 mx-10">
  <BiSolidShip
 className="my-1 text-yellow-500 text-[5rem]" />
  <div> 
    <h2 className="font-bold text-blue-500 text-[3rem] ">Sea Transport Services</h2>
    <p className="text-[1.5rem]">Our logistics company offers a reliable sea transport service, ensuring the efficient and secure delivery 
      of your cargo across international waters.</p>
  </div>
 </div>
 <div id="1" className="flex gap-5 shadow-lg py-10 px-5 mx-10">
  <FaTruckLoading
 className="my-1 text-yellow-500 text-[5rem]" />
  <div> 
    <h2 className="font-bold text-blue-500 text-[3rem] ">Local Shipping Services</h2>
    <p className="text-[1.5rem]">Our logistics company offers a reliable sea transport service, ensuring the efficient and secure delivery of your cargo across international waters.</p>
  </div>
 </div>
 <div id="1" className="flex gap-5 shadow-lg py-10 px-5 mx-10">
  <FaWarehouse
 className="my-1 text-yellow-500 text-[5rem]" />
  <div> 
    <h2 className="font-bold text-blue-500 text-[3rem] ">Warehousing Services</h2>
    <p className="text-[1.5rem]">Our logistics company offers a reliable sea transport service, ensuring the efficient and secure delivery of your cargo across international waters.</p>
  </div>
 </div>
     
   </div>
   </>
  );
};

export default MainSection;
