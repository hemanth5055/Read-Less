"use client";
import { UrlContext } from "@/context/Urlcontext";
import React, { useContext } from "react";

const Upload = () => {
  const { url } = useContext(UrlContext);

  return (
    <div
      className={`px-10 py-3 rounded-full tracking-tight cursor-pointer 
      ${
        url === ""
          ? "bg-[#ff9f38] text-white dark:text-black hover:bg-[#ff8720] " // when url is empty
          : "bg-gray-400 text-white cursor-not-allowed" // when url exists
      }`}
    >
      Upload
    </div>
  );
};

export default Upload;
