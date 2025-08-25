"use client";

import Upload from "@/Components/Upload";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import { LogOut, LoaderCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import NoteWrapper from "@/Components/NoteWrapper";
import Star from "@/Components/Star";
import BackToTop from "@/Components/BackToTop";
import axios from "axios";

export default function Page() {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();
  const [user, setUser] = useState<{ id: string; credits: number } | null>(null);
  const [loading, setLoading] = useState(true);

  // redirect if not signed in
  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/signin");
    }
  }, [isLoaded, userId, router]);

  // fetch user from your API route
  useEffect(() => {
    if (!userId) return;
    const fetchUser = async () => {
      try {
        const res = await axios.post(`/api/get-user`, { id: userId });
        if (res && res.data) {
          setUser(res.data.user);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-[80vh]">
        <LoaderCircleIcon className="w-6 h-6 animate-spin text-black dark:text-white" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="w-full">
      {/* top-hero */}
      <div className="w-full flex ">
        <div className="w-[60%] flex flex-col ">
          <h1 className="text-[50px] tracking-tighter font-funnel max-sm:hidden">
            ReadLess
          </h1>
        </div>

        {/* credits-logout */}
        <div className="w-[40%] flex justify-end items-center">
          <div className="flex gap-4 justify-end items-center">
            {/* upload */}
            {user.credits <= 0 ? (
              <p className="font-funnel">Out of Credits !</p>
            ) : (
              <Upload />
            )}

            {/* credits */}
            <div className="h-[40px] w-[40px] flex justify-center items-center">
              <h3 className="font-play text-[22px] font-funnel">
                {user.credits}
              </h3>
            </div>

            {/* logout */}
            <SignOutButton redirectUrl="/signin">
              <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
                <LogOut />
              </div>
            </SignOutButton>
          </div>
        </div>
      </div>

      {/* notes */}
      <div className="w-full flex flex-col gap-4 py-4 max-sm:py-8">
        <NoteWrapper userId={user.id} />
      </div>

      <Star />
      <BackToTop />
    </div>
  );
}
