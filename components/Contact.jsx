import Image from "next/image";
import React from "react";

import contactus from "../public/assets/contact-us.jpg";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaAddressBook, FaInbox } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white mt-4">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              I am open to talk regarding freelancing or full-time
              opportunities. Please feel free to contact me using your preferred
              medium.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <Link href="https://www.linkedin.com/in/brutus-vhutshilo-mudau-b33a671b1/">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaLinkedin size={25} />
              </div>
              </Link>
              <Link href="https://www.brutusvhutshilomudau@gmail.com">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaInbox size={25} />
              </div>
              </Link>
              <Link href="tel:0679305405">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaAddressBook size={25} />
              </div>
              </Link>
              <Link href="https://twitter.com/BrutusSaudi">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaTwitter size={25} />
              </div>
              </Link>
              <Link href="https://web.facebook.com/profile.php?id=100006265784590">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaFacebook size={25} />
                 </div>
                 </Link>
                 <Link href="https://github.com/brutus221">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaGithub size={25} />
              </div>
              </Link>
            </div>
          </div>

          {/* form stuff  */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-1 text-left">
              <form
                action="https://getform.io/f/4711ad8b-0dca-4624-ba3a-4332461a4109"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-1 flex focus:outline-none border-blue-200"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="border-2 rounded-lg p-1 flex focus:outline-none border-blue-200"
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-2 rounded-lg p-1 flex focus:outline-none border-blue-200"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows="10"
                      className="border-2 rounded-lg p-1 flex focus:outline-none border-blue-200"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
