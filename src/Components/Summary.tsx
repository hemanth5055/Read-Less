"use client";
import { Download, Home, LogOut, Trash } from "lucide-react";
import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useRouter } from "next/navigation";
const Summary = ({ data }: { data: any }) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col">
      {/* navbar */}
      <div className="flex justify-end">
        <div className="flex gap-4">
          {/* home */}
          <div
            className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <Home></Home>
          </div>
          {/* logout */}
          <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
            <LogOut></LogOut>
          </div>
        </div>
      </div>

      {/* heading-options */}
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-[30px] tracking-tight">{data.name}</h1>
        <div className="flex gap-1">
          <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
            <Download size={18}></Download>
          </div>
          <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
            <Trash size={18}></Trash>
          </div>
        </div>
      </div>

      {/* content-display-using-markdown */}
      <div className="w-full">
        <MarkdownPreview
          source={data.content}
          style={{ padding: 16, fontFamily: "Montserrat" }}
        />
      </div>
    </div>
  );
};

export default Summary;
