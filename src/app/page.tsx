import { getUserByClerkId, syncUser } from "@/actions/user";
import Note from "@/Components/Note";
import Upload from "@/Components/Upload";
import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import React, { use, useContext } from "react";
import Summarize from "@/Components/Summarize";

const page = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/signin");
  // const syncuser = await syncUser();
  // console.log(syncUser);
  const data = await getUserByClerkId(userId);
  const user = data.user;
  if (!user) return;
  
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
              <h3 className="font-play text-[22px]">{user.credits}</h3>
            </div>

            {/* logout */}
            <SignOutButton redirectUrl="/signin">
              <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
                <LogOut></LogOut>
              </div>
            </SignOutButton>
          </div>
        </div>
      </div>
      {/* upload-area */}
      <div className="w-full my-10 px-2 flex gap-4">
        <Upload></Upload>
        {/* <Summarize></Summarize> */}
      </div>
      {/* notes */}
      <div className="w-full flex flex-col px-2 gap-4">
        <h2 className="tracking-tight text-[18px]">{user.name}'s Notes</h2>
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
