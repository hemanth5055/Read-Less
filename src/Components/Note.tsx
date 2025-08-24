"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { TrashIcon } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const Note = ({
  data,
  setNotes,
}: {
  data: Note;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const result = await axios.post("api/delete-summary", { id: data.id });
      console.log(result);
      if (result?.data?.success) {
        // Update local state
        setNotes((prev: any) =>
          prev.filter((item: any) => item.id !== data.id)
        );
        toast.success("Deleted Successfully");
      } else {
        toast.error("Failed to delete");
      }
    } catch (err) {
      // console.error(err);
      toast.error("Server error");
    }
  };
  return (
    <div className=" w-[65%]  max-sm:w-[100%] flex flex-col p-4  max-sm:p-1 px-0 gap-2  shrink-0 ">
      <h2
        className="tracking-tight text-[30px] max-sm:text-[25px] font-funnel cursor-pointer max-sm:leading-[30px]  group hover:bg-gradient-to-br hover:from-[#8068de] hover:to-[#4b99d9] hover:bg-clip-text hover:text-transparent"
        onClick={() => {
          router.push(`note/${data.id}`);
        }}
      >
        {data.name}
      </h2>
      <p className="dark:text-[#BCBCBC] text-[#454545]  max-sm:text-[12px] text-[15px] h-full line-clamp-4">
        {data.shortDesc}
      </p>
      {/* options */}
      <div className="flex w-full justify-between items-center">
        <h2 className="tracking-tight text-[12px]">
          {new Date(data.createdAt).toDateString()}
        </h2>
        <div className="flex gap-4">
          <div className="cursor-pointer" onClick={handleDelete}>
            <TrashIcon size={20} className="hover:text-red-400"></TrashIcon>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-1 bg-gray-500"></div>
    </div>
  );
};

export default Note;
