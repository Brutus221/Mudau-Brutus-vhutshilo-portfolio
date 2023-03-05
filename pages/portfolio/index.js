import React from "react";
import login from "../../public/assets/portfolio/Login1.jpg";
import media from "../../public/assets/portfolio/Multimedia.jpg";
import cart from "../../public/assets/portfolio/Pizza cart.jpeg";
import elect from "../../public/assets/portfolio/Election.jpeg";
import ms from "../../public/assets/portfolio/ms.jpeg";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const portfolios = [
    {
    id: 1,
    title: "Blockchain Enabled SRC E-Voting System",
    imageSrc: elect,
    url: "Blockchain Enabled SRC E-Voting System",
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
  {
    id: 5,
    title: "Mechanic Generating Invoice Website",
    imageSrc: ms,
    url: "Mechanic-Generating-Invoice-Website",
  },
      
  ];

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          portfolio
        </h2>

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
      </div>
    </div>
  );
};

export default PortfoliosRoute;
