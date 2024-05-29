import React from "react";
import Image from "next/image";
import HandHoldingPhone from "@/public/hand-holding-audia-2.png";

const Hand = () => {
  return (
    <div className="z-10 max-w-[50rem] mt-[-7rem]">
      <Image
        src={HandHoldingPhone}
        alt="Hand holding phone with Audia app"
        className="aspect-auto"
      />
    </div>
  );
};

export default Hand;
