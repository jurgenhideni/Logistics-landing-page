import {FaLocationDot} from "react-icons/fa6"
import {BsFillTelephoneFill} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsFillEnvelopeFill} from "react-icons/bs"

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
        respond to your logistics needs."
       </p>
       <div className="flex flex-col gap-14 ">
       <h3 className="flex gap-5 justify-center items-center text-[40px] bg-red-800 p-7 rounded-xl">
            <FaLocationDot/> Shyqyri Ishmi , Tirana
        </h3>
       <h3 className="flex gap-5 justify-center items-center text-[40px] bg-red-800 p-7 rounded-xl">
            <BsFillTelephoneFill/> +355 69 74 31 224
        </h3>
       <h3 className="flex gap-5 justify-center items-center text-[40px] drop-shadow-md bg-red-800 p-7 rounded-xl">
            <BsFillEnvelopeFill/> hideniflorenc@gmail.com
        </h3>
       <h3 className="flex gap-5 justify-center items-center text-[40px] drop-shadow-md bg-red-800 p-7 rounded-xl ">
            <BsInstagram/> @hidenilogistics
        </h3>
        </div>
       </div>
        </>
    )
}

export default ContactInformation