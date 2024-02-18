"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  return (
    // 5)Wrapping entire component in framer motion
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* // 1)Parent container for the hero section which has two children one image and second text container */}
      <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mt-20">
        {/* 2)Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt="hero image"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* 3)Text Container */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 mt-6">
          <h1 className="text-4xl font-bold md:text-6xl">
            Crafting digital experiences, Designing Tomorrow
          </h1>
          <p className="md:text-xl">
            Welcome to my digital sanctuary, where pixels dance and code weaves
            tales of innovation. As a Next.js web developer, I invite you to
            embark on a journey through my portfolio, a testament to my passion
            for crafting immersive online experiences. Each project is a canvas
            where creativity meets functionality, where user experience is
            paramount.
          </p>

          {/*4) Buttons */}
          <div className="flex gap-4 w-full">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View my Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;