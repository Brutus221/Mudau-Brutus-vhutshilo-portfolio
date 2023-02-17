import React from "react";
import media from "../../public/assets/portfolio/Multimedia.jpg";
import login from "../../public/assets/portfolio/Login1.jpg";
import cart from "../../public/assets/portfolio/Pizza cart.jpeg";
import elect from "../../public/assets/portfolio/Election.jpeg";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const portfolios = [
  {
  id: 1,
  title: "Blockchain SRC e-voting Election",
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

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({ portfolio: {title, imageSrc } }) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Description
        </h2>

        <p>
      1. Blockchain SRC E-Voting Election.
The system is created for the university of Johannesburg to persue the 4IR Technology .
the system allows users to sign up, login, vote using blockchain eutheureum through metamask.
Users can read a pdf of menufestos. 
tehnologies and programming languages used on this project are : Javascript,css,bootstrap,html,solidity, Metamask,and Ganache

      </p>
      <p>
      2.Ecommerce Pizza Cart Website.
      </p>
      <p>
      3.MP3 And Mp4 Web Multimedia.
      </p>
      <p>
      4.Sms,Email,Signup And Login Verification Site.
        </p>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/brutus221">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
