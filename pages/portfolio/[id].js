import React from "react";
import media from "../../public/assets/portfolio/Multimedia.jpg";
import login from "../../public/assets/portfolio/Login1.jpg";
import cart from "../../public/assets/portfolio/Pizza cart.jpeg";
import elect from "../../public/assets/portfolio/Election.jpeg";
import ms from "../../public/assets/portfolio/ms.jpeg";
import { FaCashRegister, FaGithub, FaMusic, FaPizzaSlice, FaRegistered, FaUniversity, FaVoteYea } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const portfolios = [
 
  {
  id: 1,
  title: "Blockchain SRC e-voting Election",
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
    <div className="h-fit w-full text-center ">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        
        <h2 className="text-center  md:text-left my-4 text-blue text-2xl font-bold bg-yellow-500 flex items-center justify-center">
          Watch a Demonstration video and view deployed systems for each project
        </h2>
      
        
        <div>
        
        <h6>
          
          A Blockchain Enabled SRC E-Voting System is a system that a user can vote safely using euthereum blockchain. users can also read pdfs of political parties menifestos here is a deployed link for a project: <a className = " text-orange-500 font-small " href="https://web.facebook.com/profile.php?id=100006265784590">here</a> watch a video below
          
 </h6>
         
      </div>
           
        
        <div className="flex items-center justify-left gap-10">
<Link href="/portfolio">
  <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
        <p>
       Blockchain SRC E-Voting Election.
      </p>
      <span className="duration-200 ease-in">
                <FaVoteYea size={18} className="ml-2" />
              </span>
      </div>
      </Link>
      </div>
      <div>
        
        <h6>
       Ecommerce Pizza Cart is a website that allows users to buy Pizza online with different sizes. uses a cart to store orders and the calculate the total price to pay, please view the deployed project: <a className = " text-orange-500 font-small " href="https://brutus221.github.io/My-Pizza-Cart/">here</a> watch a video below
 </h6>
         
      </div>
      <div className="flex items-center justify-left gap-10">
      <Link href="/portfolio">
  <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
      
      <p>
      Ecommerce Pizza Cart Website.
      </p>
      <span className="duration-200 ease-in">
                <FaPizzaSlice size={18} className="ml-2" />
              </span>
      </div>
      </Link>
      </div>
      <div>
        
        <h6>
          mp3 and mp4 Web Multimedia is a music and video player that can also add playlist,this system allows users to play on the web, please view a deployed link for a project: <a className = " text-orange-500 font-small " href="https://web.facebook.com/profile.php?id=100006265784590">here</a> watch a video below
 </h6>
         
      </div>
      <div className="flex items-center justify-left gap-10">
      <Link href="/portfolio">
  <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
  <p>
      MP3 And Mp4 Web Multimedia.
      </p>
      <span className="duration-200 ease-in">
                <FaMusic size={18} className="ml-2" />
              </span>
      </div>
      </Link>
      </div>
      <div>
        
        <h6>
          A  Sms,Email,Signup And Login Verification Site is a system that is focused on security of the system,
          in this system a user register an account with email verification, an email carry an otp generated on real time,
           when verified ten user will login using student number, 
           but to login they have to verify their number phone by otp sent as an sms, 
           this number should be registered when a user register to the site.
          after Sms and email verification is done ten a user gains access to the system. please view a deployed project: <a className = " text-orange-500 font-small " href="https://web.facebook.com/profile.php?id=100006265784590">here</a> watch a video below
 </h6>
         
      </div>
      <div className="flex items-center justify-left gap-10">
      <Link href="/portfolio">
  <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
  
      <p>
      Sms,Email,Signup And Login Verification Site.
        </p>
        <span className="duration-200 ease-in">
                <FaUniversity size={18} className="ml-2" />
              </span>
      </div>
      </Link>
      </div>
        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo page
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
