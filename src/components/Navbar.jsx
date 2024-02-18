"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

// 4.1)Array of objects containing nav links
const links = [
  { id: 1, url: "/", title: "Home" },
  { id: 2, url: "/about", title: "About" },
  { id: 3, url: "/portfolio", title: "Portfolio" },
  { id: 4, url: "/contact", title: "Contact" },
];

// 8.1 Defining top variants of hamburger icon
const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255,255,255)",
  },
};

// 8.2 Defining center variants of hamburger icon
const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

// 8.3 Defining bottom variants of hamburger icon
const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255,255,255)",
  },
};

// 9.1 Defining nav list link variants for hamburger on 100 it will be out of view on 0 it will come in view port
const listVariants = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// 9.2 Defining variants for listItemVariants which is each item link in hamburger and its a child of above listVariants
const listItemVariants = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  // 5.1) useState to manage if the menu is open or not
  const [open, setOpen] = useState(false);

  return (
    // 1) Parent div contains flex & responsiveness of navbar
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* 6) Normal nav links of larger screens  */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.id} />
        ))}
      </div>
      {/* 2) Parent div of logo */}
      <div className="md:hidden lg:flex xl:w-1/3 justify-center">
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center "
        >
          <span className="text-white mr-1">Usama</span>
          <span className="w-12 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* 7)Social Icons when its screen is md */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* 3) Hamburger Menu bars and the onClick toggles the conditional rendering and useState */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          // accessed from 5.1
          onClick={() => setOpen(!open)}
        >
          {/* 8) Applying framer motion on hamburger links with 8.1,2 & 3 */}
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* 4.1) Nav links list in Hamburger => agar bar open ho tu div menu dikha do */}
        {open && (
          // 9.1) Applying framer motion on overall hamburger links initial is 100 animate is 0 defined above
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {/* //9.2) Applying framer motion on each hamburger link */}
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
