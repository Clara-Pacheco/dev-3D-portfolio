import React from "react";

import image4 from "../assets/assets/inConstruction/doug4.gif";
import image1 from "../assets/assets/inConstruction/doug1.webp";
import image2 from "../assets/assets/inConstruction/doug2.webp";
import image3 from "../assets/assets/inConstruction/doug3.webp";

export function Construcao() {
  return (
    <div className="w-auto h-screen bg-slate-100 overflow-hidden">
      <h1 className="text-center text-4xl text-pink-800 p-5">
        {" "}
        dev.ClaraPacheco
      </h1>
      <p className="text-center text-2xl mb-6"> 🐱‍🚀In Construction 🐱‍🏍</p>
      <p className=" text-center text-lg text-amber-800">
        <p>Building a digital masterpiece!</p>
        <p>
          Our website is currently under construction, but stay tuned – the
          grand reveal is just around the corner!
        </p>
      </p>
      <div className="flex justify-center mt-16">
        <img src={image4} alt="Dog construction" className="w-[430px]" />
        <img src={image1} alt="Dog construction" className="w-[430px]" />
        <img src={image2} alt="Dog construction" className="w-[430px]" />
        <img src={image3} alt="Dog construction" className="w-[430px]" />
      </div>
    </div>
  );
}
