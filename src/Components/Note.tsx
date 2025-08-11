import { ArrowUp, LogIn, TrashIcon } from "lucide-react";
import React from "react";

const Note = () => {
  return (
    <div className="w-[400px] flex flex-col p-4 dark:bg-[#121212] bg-[#ebeaea] gap-4 rounded-[20px] shrink-0">
      <h2 className="tracking-tight text-[18px]">
        How to Crack System Design Interviews - Drive With Me
      </h2>
      <p className="dark:text-[#BCBCBC] text-[#454545] text-[14px]">
        The process involves learning fundamental components (like reverse
        proxies, queues, databases)
      </p>
      {/* options */}
      <div className="flex w-full justify-between items-center">
        <h2 className="tracking-tight text-[12px]">2025-07-04</h2>
        <div className="flex gap-4">
          <div className="cursor-pointer">
            <TrashIcon size={20}></TrashIcon>
          </div>
          <div className="cursor-pointer">
            <ArrowUp size={20} className="rotate-45"></ArrowUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
