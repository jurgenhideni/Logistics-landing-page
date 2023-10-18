import React from "react";
import phone from "../assets/phone.webp";
import email from "../assets/gmail.png";
import tiktok from "../assets/tiktok.png";

import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex gap-[50px] max-sm:gap-[100px] mt-[80px]">
      <Link href={`tel:${+355695486984}`}>
        <Image
          src={phone}
          alt="phone"
          className="max-h-[40px] w-auto hover:scale-125 transition ease-in-out max-sm:max-h-[60px]"
        />
      </Link>
      <Link href="https://mail.google.com/mail/u/0/#inbox">
        <Image
          src={email}
          alt="gmail"
          className="max-h-[40px] w-auto hover:scale-125 transition ease-in-out max-sm:max-h-[60px]"
        />
      </Link>
      <Link href="https://www.tiktok.com/@hidenilogistics?_t=8c2KIwMCAEv&_r=1">
        <Image
          src={tiktok}
          alt="tiktok"
          className="max-h-[40px] w-auto hover:scale-125 transition ease-in-out max-sm:max-h-[60px]"
        />
      </Link>
    </div>
  );
};

export default Socials;
