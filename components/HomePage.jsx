import React from "react";
import heroImage from "../public/assets/Mudau.jpg";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";


const HomePage = () => {
  return (
<div id="home" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-right"></div>
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-right bg-black">
     
      <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-black mt-4">
          <div className="rounded-xl ">
          <Image src={heroImage} alt="me" />
        </div>
        <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
        
        <p>
        <div className="group flex items-left justify-left my-8  text-white px-6 py-3 font-bold uppercase rounded-md ">
        <p>
          Mudau Brutus Vhutshilo
          </p>
          </div>
          <p className="text-gray-600 text-xl max-w-sm mx-auto">
          I have 8 Months experience of Full Stack development  and 3 months experience of Datacenter  Administrator.
           I have a Bsc in Computer Sciences and information systems.
        </p>
        <Link href="/#About_me">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            Experience
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span> 
          </div>
        </Link>
       
        <div className="group flex items-left justify-left my-8  text-white px-6 py-3 font-bold uppercase rounded-md ">
        <p>
          Full stack  Developer
          </p>
          </div>
          </p>
        
</div>
       
      </div>
      </div>
      </div>

  );
};

export default HomePage;

