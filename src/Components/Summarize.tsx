"use client";
import { Sparkle } from "lucide-react";
import React, { useContext } from "react";
import { UrlContext } from "@/context/Urlcontext";

const Summarize = () => {
  const { url } = useContext(UrlContext);

  return (
    <div
      className={`px-3 py-3 rounded-full tracking-tight cursor-pointer 
      ${
        url === ""
          ? "bg-gray-400 text-white cursor-not-allowed " // orange if no url
          : "bg-[#ff9f38] text-white dark:text-black hover:bg-[#ff8720]" // gray if url exists
      }`}
    >
      <Sparkle />
    </div>
  );
};

export default Summarize;
