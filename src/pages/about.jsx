import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import aboutImg from "../assets/about-img1.png";
import aboutImg2 from "../assets/about-img2.png";
import warehouse from "../assets/warehouse.jpeg";

const about = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mt-10 items-center gap-5 bg-gradient-to-r from-black py-[10px]  text-black ">
        <Image
          src={aboutImg}
          className="ml-5  max-h-[400px] w-auto  border-[5px] border-red-700 rounded-full  "
        />
        <p className=" text-[1.5rem] text-black font-semibold  leading-loose ">
          At our company, we understand that every client has unique needs, and
          we work closely with you to develop customized solutions to meet those
          needs. Whether you are looking for packing services, transportation,
          warehousing, or distribution, we have the expertise and experience to
          provide you with the best possible solution. <br /> Our team is made
          up of experienced professionals who are dedicated to providing
          exceptional service. We understand that the success of our business
          depends on our ability to provide our clients with the highest level
          of service, and we are committed to doing just that.
        </p>
      </div>
      <div className="flex  items-center gap-5 mt-2 bg-gradient-to-l from-black ">
        <p className=" ml-5 text-[1.5rem] text-black font-semibold  leading-loose">
          We are constantly investing in our technology and equipment to ensure
          that we stay ahead of the competition and provide our clients with the
          best possible service. Our state-of-the-art facilities are equipped
          with the latest technology to ensure that your goods are transported
          and stored safely and efficiently. <br /> We are committed to
          sustainability and environmental responsibility. We understand the
          impact that our industry can have on the environment, and we take
          steps to minimize that impact. We are constantly looking for ways to
          reduce our carbon footprint, such as using eco-friendly packaging
          materials and optimizing our transportation routes.
        </p>
        <Image
          src={aboutImg2}
          className="max-h-[400px] w-auto  border-[5px] border-red-700 rounded-full mr-[10px] my-2
          "
        />
      </div>
      <div className="flex  items-center gap-5 bg-gradient-to-r from-black mt-[10px]  text-black">
        <Image
          src={warehouse}
          className="max-h-[400px] w-auto  border-[5px] border-red-700 rounded-full mr-[10px] 
           my-2"
        />
        <p className=" ml-5 text-[1.5rem]  font-semibold  leading-loose text-black">
          We value our customers and take pride in the long-term relationships
          that we have built with them. We are always looking for ways to
          improve our services and exceed our customers' expectations. If you
          have any questions or would like to learn more about our services,
          please don't hesitate to contact us. We look forward to working with
          you!
        </p>
      </div>
    </div>
  );
};

export default about;
