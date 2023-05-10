import React from "react";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.webp";
import tiktok from "../assets/tiktok.png";

import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex gap-[50px] max-sm:gap-[100px] mt-[80px]">
      <Link href="https://instagram.com/florenchideni?igshid=YmMyMTA2M2Y=">
        <Image
          src={insta}
          alt="insta"
          className="max-h-[40px] w-auto hover:scale-125 transition ease-in-out max-sm:max-h-[60px]"
        />
      </Link>
      <Link href="https://www.facebook.com/flori.hideni?mibextid=ZbWKwL">
        <Image
          src={facebook}
          alt="facebook"
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
