"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// 3)This is parent component of layout and passing children props from here
const TransitionProvider = ({ children }) => {
  // 4.1) Using pathname to determine current page and change it's bg based with a smooth animation
  const pathname = usePathname();

  return (
    // 1) Wrapping this page in this instance && 4.1) Passing in wait attribute to wait for first animation to end
    <AnimatePresence mode="wait">
      {/* 2) Wrapping navbar component which on click changes current page with an animation in div && 4.1) Passing in pathname   and this exit animation works*/}
      <div
        key={pathname}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        {/* 4.1)Creating a framer motion div which changes all the bg of page to black with framer motion and current pathname */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* 4.2 */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathname.substring(1)}
        </motion.div>
        {/* 4.1) After that now reverse the same animation to comeback in same position */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        {/* 4) 2nd div for children it minuses height of navbar */}
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
