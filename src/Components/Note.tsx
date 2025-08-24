"use client";
import { ArrowUp, LogIn, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Note = ({ data }: any) => {
  const router = useRouter();
  return (
    <div className=" w-[65%]  max-sm:w-[100%] flex flex-col p-4  max-sm:p-1 px-0 gap-2  shrink-0 " >
      <h2
        className="tracking-tight text-[25px] max-sm:text-[20px] font-funnel cursor-pointer  group hover:bg-gradient-to-br hover:from-[#8068de] hover:to-[#4b99d9] hover:bg-clip-text hover:text-transparent"
        onClick={() => {
          router.push(`note/${data.id}`);
        }}
      >
        {data.name}
      </h2>
      <p className="dark:text-[#BCBCBC] text-[#454545]  max-sm:text-[12px] text-[14px] h-full line-clamp-4">
        {data.shortDesc}
      </p>
      {/* options */}
      <div className="flex w-full justify-between items-center">
        <h2 className="tracking-tight text-[12px]">
          {new Date(data.createdAt).toDateString()}
        </h2>
        <div className="flex gap-4">
          <div className="cursor-pointer">
            <TrashIcon size={20}></TrashIcon>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-1 bg-gray-500"></div>
    </div>
  );
};

export default Note;
