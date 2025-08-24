import Signin from "@/Components/Signin";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
export const metadata = {
  title: "Sign In - ReadLess",
  description: "Sign in to ReadLess to keep your PDS concise and organized.",
};
const Page = async () => {
  const { userId } = await auth();
  if (userId) redirect("/");
  return <Signin></Signin>;
};

export default Page;
