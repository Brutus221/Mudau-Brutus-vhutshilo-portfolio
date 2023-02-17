import React from "react";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/html.png";
import apis from "../public/assets/experience/apis.png";
import node from "../public/assets/experience/node.png";
import java from "../public/assets/experience/Java.png";
import mysql from "../public/assets/experience/mysql.png";
import php from "../public/assets/experience/php.png";
import sol from "../public/assets/experience/solidity.png";
import ora from "../public/assets/experience/oracle.jpg";
import boot from "../public/assets/experience/Bootstrap.png";
import express from "../public/assets/experience/express.webp";
import win from "../public/assets/experience/C++.png";
import angular from "../public/assets/experience/angular.png";
import types from "../public/assets/experience/Typescript.png";
import Apine from "../public/assets/experience/Alpine Js.png";
import Kotlin from "../public/assets/experience/Kotlin.png";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
      id: 7,
      title: "API",
      src: apis,
    },
    {
      id: 8,
      title: "Node JS",
      src: node,
    },
    {
      id: 9,
      title: "Java",
      src: java,
    },
    
    {
      id: 10,
      title: "Mysql",
      src: mysql,
    },
    {
      id: 11,
      title: "PHP",
      src: php,
    },
    {
      id: 12,
      title: "Solidity",
      src: sol,
    },
    {
      id: 13,
      title: "Oracle Warehouse Management",
      src: ora,
    },
    {
      id: 14,
      title: "Bootsrap",
      src: boot,
    },
    {
      id: 15,
      title: "Express Js",
      src: express,
    },
    {
      id: 16,
      title: "C++",
      src: win,
    },
    {
      id: 17,
      title: "Angular Js",
      src: angular,
    },
    {
      id: 18,
      title: "Typescript",
      src: types,
    },
    {
      id: 19,
      title: "AlpineJs",
      src: Apine,
    },
    {
      id: 20,
      title: "Kotlin",
      src: Kotlin,
    },
  ];

  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          experience
        </h2>
        <p className="py-4 max-w-lg">
       I have gained my experience through Proffesional work and also personal. 
        </p>

        <div className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Image src={src} width="64px" height="64px" alt={title} />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
