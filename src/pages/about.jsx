import Navbar from "@/components/Navbar";
import AboutTexts from "@/components/text";
import Image from "next/image";
import vision from "../assets/vision.webp";
import approachImg from "../assets/approach.jpg";
import proccess from "../assets/proccess.jpg";
const about = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <h1 className="text-[3.5rem] font-bold font-serif text-rose-700">
          About Us
        </h1>
        <h3 className="text-[1.7rem] text-slate-600">True to service</h3>
      </div>
      <div className="m-5 flex justify-around">
        <div>
          <h2 className="text-[2.7rem] font-bold font-serif ">Our Vision</h2>
          <AboutTexts />
        </div>
        <Image
          src={vision}
          alt="image"
          className="max-h-[450px] w-auto shadow-md rounded-lg"
        />
      </div>
      <div className="flex justify-around mt-[100px] ">
        <Image
          src={approachImg}
          alt="image"
          className="max-h-[400px] w-auto rounded-lg shadow-lg"
        />
        <p className=" mb-3 max-w-[700px] leading-10">
          <span className="text-[2.7rem] font-bold font-serif ">
            Our Approach
          </span>
          <br />
          At our logistics company, we understand that every business has unique
          needs, challenges, and goals. Thats why we take a consultative
          approach, working closely with our clients to understand their
          business and tailor our solutions to their specific requirements. We
          believe in building strong relationships based on trust, open
          communication, and a commitment to delivering results. Our approach is
          focused on delivering value to our clients, optimizing their logistics
          processes, reducing costs, and improving efficiency. Our logistics
          process is designed to be flexible and adaptable, allowing us to meet
          the changing needs of our clients.
        </p>
      </div>
      <div className="flex justify-around mt-[100px] ">
        <p className=" mb-3 max-w-[700px] leading-9">
          <span className="text-[2.7rem] font-bold font-serif ">
            Our Proccess
          </span>
          <br />
          Our logistics process is designed to be efficient, reliable, and
          adaptable. We use the latest technology and tools to streamline
          logistics operations, ensuring timely and accurate deliveries. From
          inventory management to transportation, we provide end-to-end
          logistics solutions that meet the highest quality standards. Our team
          of experts is highly trained and experienced, ensuring that our
          clients logistics needs are met with the utmost professionalism and
          attention to detail. We start by conducting a comprehensive analysis
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
          className="max-h-[400px] w-auto rounded-lg shadow-lg"
        />
      </div>
      <p className="text-center my-14 font-semibold text-rose-700">
        Thank you for considering our logistics services. We look forward to
        working with you to achieve your logistics goals and contribute to your
        business success Contact us today to learn more about our logistics
        services .
      </p>
    </div>
  );
};

export default about;
