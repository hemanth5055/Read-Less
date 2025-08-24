import Signin from "@/Components/Signin";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId } = await auth();
  if (userId) redirect("/");
  return <Signin></Signin>;
};

export default Page;
