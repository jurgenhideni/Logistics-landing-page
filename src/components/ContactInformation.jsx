import {FaLocationDot} from "react-icons/fa6"
import {BsFillTelephoneFill} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsFillEnvelopeFill} from "react-icons/bs"

import Link from "next/link"

const ContactInformation = () =>{

    return (
        <>
        <div className="md:hidden  text-white text-[60px] font-bold max-sm:w-[800px] max-sm:h-[1000px] max-sm:ml-6 my-40 
       
        max-sm:rounded-3xl">
            <div className="flex justify-center drop-shadow-lg text-red-700"> <h1 className="">Contact our Team</h1></div>
       <p className="font-normal text-[30px] px-6 my-16 text-red-700 drop-shadow-lg">
      
        Whether you need a quote, have specific logistics questions, 
        or wish to explore partnership opportunities, our dedicated team 
        is here to assist. Dont hesitate to get in touch, and wew will
        respond to your logistics needs.
       </p>
       <div className="flex flex-col gap-14 ">
        <Link href="https://maps.app.goo.gl/1DAYt1tNi8Wyxs4d6" ><h3 className="flex gap-5 justify-center items-center text-[40px] bg-red-800 p-7 rounded-xl hover:bg-white hover:text-red-700">
            <FaLocationDot/> Shyqyri Ishmi , Tirana
        </h3></Link>
       <Link href="tel:+355697431224"><h3 className="flex gap-5 justify-center items-center text-[40px] bg-red-800 p-7 rounded-xl  hover:bg-white hover:text-red-700">
            <BsFillTelephoneFill/> +355 69 74 31 224
        </h3></Link>
       <a href="mailto:logisticshideni@gmail.com"><h3 className="flex gap-5 justify-center items-center text-[40px] drop-shadow-md bg-red-800 p-7 rounded-xl  hover:bg-white hover:text-red-700">
            <BsFillEnvelopeFill/> logisticshideni@gmail.com
        </h3></a>
       <Link href="https://www.instagram.com/hidenilogistics/" ><h3 className="flex gap-5 justify-center items-center text-[40px] drop-shadow-md bg-red-800 p-7 rounded-xl  hover:bg-white hover:text-red-700">
            <BsInstagram/> @hidenilogistics
        </h3></Link>
       
        </div>
       </div>
        </>
    )
}

export default ContactInformation