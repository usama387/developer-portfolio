"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    // 1)First div for animation when this page is rendered
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* 2)Container */}
      <div>
        {/*3) Parent div of Text Container of About Page  */}
        <div className=" flex flex-col gap-24 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64">
          {/* 3.1) Biography Container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1>BIOGRAPHY</h1>
            <p>
              Welcome to my digital sanctuary, where pixels dance and code
              weaves tales of innovation. As a Next.js web developer, I invite
              you to embark on a journey through my portfolio, a testament to my
              passion for crafting immersive online experiences. Each project is
              a canvas where creativity meets functionality, where user
              experience is paramount.
            </p>
            {/* QUOTE */}
            <span className="italic">Utilize with the best of my skills</span>
            {/* SVG SIGNATURE */}
            <div></div>
            {/* SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
            {/* 1:17:35 */}
          </div>
          {/* 3.2 Skills Container*/}
          <div>SKILLS</div>
          {/* 3.3 Experience Container */}
          <div>EXPERIENCE</div>
        </div>
        {/* 4) Image Container */}
        <div className="hidden"></div>
      </div>
      About Page
    </motion.div>
  );
};

export default AboutPage;
