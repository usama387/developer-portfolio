"use client";
import React, { useRef } from "react";
import { motion, useScroll, useInView} from "framer-motion";
import AboutPageSvg from "@/components/Svg";

const AboutPage = () => {

  const containerRef = useRef();

  // 2.1 Calculating Scroll by passing in container
  const {scrollYProgress} = useScroll({container:containerRef});
  // when the container start the scroll position is 0.5 and 1 at the end using this i will give rotation animation

  //3.2) checking if the skills section in viewport
  const skillRef = useRef();
  
  const isSkillRefInView = useInView(skillRef, {margin:"-100px"});

 


  return (
    // 1)First div for animation when this page is rendered
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* 2.1)Container that holds Text and Image */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/*3) Parent div of Text Container of About Page  */}
        <div className=" flex flex-col gap-24 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:h-1/2">
          {/* 3.1) Biography Container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
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
          </div>
          {/* 3.2 Skills Container*/}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
            {/* SKILLS LIST &&  note that flex wrap adds items to new line if it does not fit in the container in rows */}
            <div className="flex flex-wrap gap-4">
              <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </motion.div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML5
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS3
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TAILWIND CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                REACT JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NEXT JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MONGODB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SANITY
              </div>
            </div>
            {/* SKILL SCROLL SVG*/}
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
          </div>
          {/* 3.3 Experience Container */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
          </div>
          {/* EXPERIENCE LIST */}
          <div>
            {/* LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg ">
                  JavaScript Engineer
                </div>
                {/* JOB DESC */}
                <div className="p-2 text-sm italic ">
                  Learning everyday making projects to gain hands on experience
                  & skills
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2024-Present
                </div>
                {/* JOB COMPANY */}
                {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">META</div> */}
              </div>
              {/* CENTER */}
              <div className="w-1/6">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                    {/*LINE CIRCLE */}
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3"></div>
            </div>
          </div>
          {/* EXPERIENCE LIST */}
          <div>
            {/* LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3"></div>
              {/* CENTER */}
              <div className="w-1/6">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                    {/*LINE CIRCLE */}
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg ">
                  JavaScript Engineer
                </div>
                {/* JOB DESC */}
                <div className="p-2 text-sm italic ">
                  Learning everyday making projects to gain hands on experience
                  & skills
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2024-Present
                </div>
                {/* JOB COMPANY */}
                {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">META</div> */}
              </div>
            </div>
          </div>
          {/* EXPERIENCE LIST */}
          <div>
            {/* LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg ">
                  JavaScript Engineer
                </div>
                {/* JOB DESC */}
                <div className="p-2 text-sm italic ">
                  Learning everyday making projects to gain hands on experience
                  & skills
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2024-Present
                </div>
                {/* JOB COMPANY */}
                {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">META</div> */}
              </div>
              {/* CENTER */}
              <div className="w-1/6">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                    {/*LINE CIRCLE */}
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3"></div>
            </div>
          </div>
        </div>
        {/* 4) SVG  CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:h-1/2 sticky top-0 z-30">
          {/* 2.1 Passing in as props scrollYProgress */}
          <AboutPageSvg scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
