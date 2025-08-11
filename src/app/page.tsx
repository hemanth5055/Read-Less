import Note from "@/Components/Note";
import { ArrowUp, LogIn, TrashIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      {/* top-hero */}
      <div className="w-full flex ">
        {/* name-desc */}
        <div className="w-[60%] flex flex-col">
          <h1 className="text-[50px] tracking-tighter">ReadLess 💫</h1>
          <p className="text-[16px] text-gray-500 px-1 tracking-tight">
            Effortlessly upload PDFs.<br></br>Receive concise summaries
            instantly.
          </p>
        </div>
        {/* credits-logout */}
        <div className="w-[40%] flex justify-end">
          <div className="flex gap-4 justify-end py-4">
            {/* credits */}
            <div className="h-[40px] w-[40px] flex justify-center items-center">
              <h3 className="font-play text-[22px]">09</h3>
            </div>

            {/* logout */}
            <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
              <LogIn></LogIn>
            </div>
          </div>
        </div>
      </div>
      {/* upload-area */}
      <div className="w-full my-10 px-2 flex">
        <div className="px-10 py-3 bg-[#ff9f38] rounded-full tracking-tight cursor-pointer dark:text-black text-white">
          Upload
        </div>
      </div>
      {/* notes */}
      <div className="w-full flex flex-col px-2 gap-4">
        <h2 className="tracking-tight text-[18px]">Mr.John's Notes</h2>
        <div className="w-full flex flex-wrap  gap-3">
          <Note></Note>
          <Note></Note>
          <Note></Note>
        </div>
      </div>
    </div>
  );
};

export default page;
