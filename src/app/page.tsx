import { getUserByClerkId, syncUser } from "@/actions/user";
import Upload from "@/Components/Upload";
import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LoaderCircleIcon, LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import React, { Suspense, use, useContext } from "react";
import NoteWrapper from "@/Components/NoteWrapper";

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
        <div className="w-[60%] flex flex-col ">
          <h1 className="text-[50px] tracking-tighter font-funnel max-sm:hidden">
            ReadLess
          </h1>
        </div>
        {/* credits-logout */}
        <div className="w-[40%] flex justify-end items-center">
          <div className="flex gap-4 justify-end items-center">
            {/* upload  */}
            <Upload></Upload>

            {/* credits */}
            <div className="h-[40px] w-[40px] flex justify-center items-center">
              <h3 className="font-play text-[22px] font-funnel">
                {user.credits}
              </h3>
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
      {/* <h2 className="tracking-tight text-[18px] py-3 px-2 italic">Your Notes</h2> */}
      {/* notes */}
      <div className="w-full flex flex-col gap-4 py-4">
        <Suspense
          fallback={
            <LoaderCircleIcon className="w-5 h-5 animate-spin text-black dark:text-white" />
          }
        >
          <NoteWrapper userId={user.id}></NoteWrapper>
        </Suspense>
      </div>
    </div>
  );
};

export default page;
