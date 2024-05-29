"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import profilePageImage from "@/public/profile-page-audia.png";

export default function About() {
  const { ref } = useSectionInView("About");
  const words = ["songs", "albums", "playlists"];

  return (
    <section
      ref={ref}
      className="leading-8 scroll-mt-28 flex flex-col justify-center items-center w-full sm:flex-row mt-16 sm:mt-0 bg-[#EFEFEF] max-w-[90rem] rounded-3xl"
      id="about"
    >
      <div className="max-w-[50rem] flex flex-col sm:flex-row justify-between items-center m-12">
        <div className="max-w-[20rem] mr-10">
          <h2 className="text-3xl font-medium mb-8">
            Post your
            <br /> favorite
            <FlipWords words={words} /> <br />
            and see what <br /> your freinds <br /> think of them.
          </h2>
          <p className="text-[#a3a3a7]">
            We make it better and easier than evern{" "}
            <span className="text-black dark:text-white">
              to find new music{" "}
            </span>{" "}
            that you'll love. Audia is a platform that allows artists to share
            their music with a larger audience and{" "}
            <span className="text-black dark:text-white">
              promote their songs{" "}
            </span>{" "}
            like never before.
          </p>
        </div>
        <div className="max-w-sm sm:mt-0 mt-12">
          <Image
            src={profilePageImage}
            alt="Hand holding phone with Audia app"
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
