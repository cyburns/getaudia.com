import React from "react";


export default function Footer() {

  return (
    <footer
      className="mb-24 px-4 text-center text-gray-500 flex justify-center items-center flex-col mt-16"
    >
      <div className="max-w-[50rem]">
        <small className="mb-2 block text-xs text-[#a3a3a7] mt-24">
          &copy; 2024 Audia. All rights reserved.
        </small>
        <p className="text-xs text-[#a3a3a7]">
          <span className="font-semibold text-[#a3a3a7]">Please note:</span> We
          ask that you help create a safe and respectful online space. These
          community values encourage constructive conversations on this page: •
          Start with an open mind. Whether you agree or disagree, engage with
          empathy.
        </p>
      </div>
    </footer>
  );
}
