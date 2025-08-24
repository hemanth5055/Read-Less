import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId } = await auth();
  if (userId) redirect("/");
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <h1 className="text-[50px] tracking-tighter font-funnel">ReadLess</h1>
        <p className="font-medium px-1 text-gray-500 dark:text-gray-400">
          Keep your PDS concise and organized.
        </p>
      </div>
      <div className="w-full flex justify-center pt-[200px]">
        <SignInButton mode="modal">
          <button className="px-6 py-2 rounded-full bg-gradient-to-br from-[#8068de] to-[#4b99d9] text-white cursor-pointer font-medium">
            Sign In
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Page;
