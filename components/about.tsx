"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import profilePageImage from "@/public/profile-page-audia.png";

export default function About() {
  const { ref } = useSectionInView("About");
  const words = ["affordable", "beautiful", "responsive", "modern"];

  return (
    <section
      ref={ref}
      className="leading-8 scroll-mt-28 flex flex-col justify-center items-center w-full sm:flex-row mt-16 sm:mt-0 bg-[#EFEFEF] max-w-[90rem] rounded-3xl"
      id="about"
    >
      <div className="max-w-[50rem] flex justify-between items-center m-12">
        <div className="max-w-[20rem] mr-10">
          <h2 className="text-3xl font-medium mb-8">
            Fast, reliable,
            <br /> and
            <FlipWords words={words} /> <br />
            full-stack development services
          </h2>
          <p className="text-[#a3a3a7]">
            BRIGHT replaces unreliable freelancers and expensive agencies for
            <span className="text-black dark:text-white">
              {" "}
              one flat fee,{" "}
            </span>{" "}
            with product delivered so fast that it will blow your mind. We
            deliver{" "}
            <span className="text-black dark:text-white">
              unique, flexible, and scalable{" "}
            </span>{" "}
            solutions for your business.
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
