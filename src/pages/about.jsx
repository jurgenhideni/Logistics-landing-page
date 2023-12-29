import Navbar from "@/components/Navbar";
import AboutTexts from "@/components/text";
import Image from "next/image";
import vision from "../assets/vision.webp";
import approachImg from "../assets/aproach.webp";
import proccess from "../assets/proccess.png";
const about = () => {
  return (
    <div className="max-sm:min-w-[800px]">
      <Navbar />
      <div className="text-center max-md:py-[2.5rem]">
        <h1 className="text-[3.5rem] font-bold  text-white">
          About Us
        </h1>
        <h3 className="text-[1.7rem] text-blue-500">True to service</h3>
      </div>
      <div className="m-5 flex justify-around max-sm:block">
        <div className="max-sm:mx-10">
          <h2 className="text-[2.7rem] font-light text-blue-500 ">Our Vision</h2>
          <Image
          src={vision}
          alt="image"
          className="h-[500px] max-sm:h-[400px] max-sm:mx-auto md:hidden "
        />
          <AboutTexts />
        </div>
        <Image
          src={vision}
          alt="image"
          className="h-[500px] max-sm:h-[400px] max-sm:mx-auto max-sm:hidden "
        />
      </div>
      <div className="flex justify-around mt-[100px] max-sm:block max-sm:mx-10 ">
        <Image
          src={approachImg}
          alt="image"
          className="lg:h-[400px] w-auto max-sm:hidden "
        />
        <p className=" mb-3 max-w-[700px] leading-loose max-md:text-[1.8rem] text-slate-300">
          <span className="text-[2.7rem] font-light text-blue-500 ">
            Our Approach
          </span>
          <Image
          src={approachImg}
          alt="image"
          className="lg:h-[400px]  md:hidden max-sm:mx-auto"
        />
          <br />
          At our logistics company, we understand that every business has unique
          needs, challenges, and goals. Thats why we take a consultative
          approach, working closely with our clients to understand their
          business and tailor our solutions to their specific requirements. We
          believe in building strong relationships based on trust, open
          communication, and a commitment to delivering results. 
          <span className="max-sm:hidden">
          Our approach is
          focused on delivering value to our clients, optimizing their logistics
          processes, reducing costs, and improving efficiency. Our logistics
          process is designed to be flexible and adaptable, allowing us to meet
          the changing needs of our clients.</span> 
        </p>
      </div>
      <div className="flex justify-around mt-[100px] max-sm:mx-10">
        <p className=" mb-3 max-w-[700px] leading-loose max-md:text-[1.8rem] text-slate-300">
          <span className="text-[2.7rem] font-light text-blue-500 ">
            Our Proccess
          </span>
          <Image
          src={proccess}
          alt="image"
          className="h-500px  md:hidden"
        />
          <br />
          <span className="max-sm:hidden">Our logistics process is designed to be efficient, reliable, and
          adaptable. We use the latest technology and tools to streamline
          logistics operations, ensuring timely and accurate deliveries. From
          inventory management to transportation, we provide end-to-end
          logistics solutions that meet the highest quality standards. Our team
          of experts is highly trained and experienced, ensuring that our
          clients logistics needs are met with the utmost professionalism and
          attention to detail.</span>  We start by conducting a comprehensive analysis
          of our clients logistics requirements, identifying areas for
          improvement and potential cost savings. We then develop a customized
          logistics plan that takes into account our clients specific needs and
          goals, including transportation, warehousing, inventory management,
          and order fulfillment. Throughout the logistics process, we provide
          full visibility and transparency, keeping our clients informed at
          every step and providing real-time updates and analytics to help them
          make informed decisions.
        </p>
        <Image
          src={proccess}
          alt="image"
          className="h-300px w-auto  max-md:hidden"
        />
      </div>

    </div>
  );
};

export default about;
