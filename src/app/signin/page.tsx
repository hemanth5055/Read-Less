"use client";
import Signin from "@/Components/Signin";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { userId } = useAuth();
  console.log("signin", userId);
  const router = useRouter();
  if (userId) router.push("/");
  return <Signin></Signin>;
};

export default Page;
