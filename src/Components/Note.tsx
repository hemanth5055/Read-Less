"use client";
import { ArrowUp, LogIn, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Note = ({ data }: any) => {
  const router = useRouter();
  return (
    <div className="w-[400px] flex flex-col p-4 dark:bg-[#121212] bg-[#ebeaea] gap-4 rounded-[20px] shrink-0">
      <h2 className="tracking-tight text-[18px]">{data.name}</h2>
      <p className="dark:text-[#BCBCBC] text-[#454545] text-[14px] h-full line-clamp-4">
        {data.shortDesc}
      </p>
      {/* options */}
      <div className="flex w-full justify-between items-center">
        <h2 className="tracking-tight text-[12px]">2025-07-04</h2>
        <div className="flex gap-4">
          <div className="cursor-pointer">
            <TrashIcon size={20}></TrashIcon>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push(`note/${data.id}`);
            }}
          >
            <ArrowUp size={20} className="rotate-45"></ArrowUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
