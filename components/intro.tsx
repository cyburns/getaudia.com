"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { useMediaQuery } from "@mui/system";
import { Apple, Google } from "@mui/icons-material";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const smallScreenSize = useMediaQuery("(min-width:967px)");

  return (
    <div className="h-screen sm:h-[40rem] max-w-[70rem] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col mt-[-13rem] sm:mt-[-10rem] scroll-mt-[100rem]">
      <section
        ref={ref}
        id="home"
        className="mb-10 max-w-[50rem] text-center sm:mb-0  flex justify-center flex-col items-center px-4 sm:px-0 mt-[12rem] sm:mt-0"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]" />
        <h1 className="mb-8 mt-10 text-[3rem] sm:text-[4rem] font-medium !leading-[1] ">
          <span className="font-semibold uppercase">
            Share and discover music with
            {!smallScreenSize && <br />}{" "}
            <span className="hero-gradient-text px-2">Audia </span>
          </span>
        </h1>

        <div className="relative w-full flex justify-center items-center">
          <div className="absolute inset-0 bg-white dark:bg-black blur-[3rem] w-full h-18 rounded-full z-0" />
          <h2 className="relative mb-8 px-4 text-lg font-medium !leading-[1.5] max-w-[40rem] text-black dark:text-white z-10">
            Connect, find communities, and grow businesses around your favorite
            music with Auda.
          </h2>
        </div>

        <div className="z-10">
          <button className="px-6 py-3 rounded-full bg-black text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 mr-3">
            <Apple className="pb-1 mr-1" />
            App Store
          </button>

          <button className="px-6 py-3 rounded-full bg-black text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            <Google className="pb-1 mr-1" />
            Google Play
          </button>
        </div>
      </section>
    </div>
  );
}
