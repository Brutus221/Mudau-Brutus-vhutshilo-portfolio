import React from "react";

import { MdExpandMore } from "react-icons/md";

import media from "../public/assets/portfolio/Multimedia.jpg";
import login from "../public/assets/portfolio/Login1.jpg";
import cart from "../public/assets/portfolio/Pizza cart.jpeg";
import elect from "../public/assets/portfolio/Election.jpeg";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Blockchain Enabled SRC E-Voting System",
      imageSrc: elect,
      url: "E-voting Blockchain Enabled",
    },
    {
      id: 3,
      title: "Ecommerce Pizza cart website",
      imageSrc: cart,
      url: "Pizza",
    },
    {
      id: 4,
      title: "MP3 and Mp4 web multimedia",
      imageSrc: media,
      url: "MP3 and Mp4 web multimedia",
    },
    {
      id: 2,
      title: "Sms,Email,Signup and login verification site",
      imageSrc: login,
      url: "Sms-email-verification-site",
    },
    ];

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          portfolio
        </h2>
        <br />
        <p >
        The projects aim is to solve a certain problem and make things easier using technology. 1. The blockchain enabled E-voting system is bringing safer election by using euthereum contracts as a ballot, and give enough information access such as menifestos of each political parties. 2. A pizza cart system allows users to add items to a cart and then calculate the total cost of pizza being purchased. 3. An Mp3/Mp4 multimedia player allows a user to play music and watch videos on the web. 4. A verification site bring safety to the system , it allows users to register valid emails by verifying it using email otp, and allows a user to login the system passes through some steps verifying themselves by entering a verification otp received from sms. on valid contacts which is registered. everytime a user login they receive an sms otp to verify themselves. The projects include the following languages : Javascript, css, html, php, solidity ,nextjs ,alpine js , tailwind ,phpmailer ,twillio Api , and MySql php
         </p>
        <br />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
