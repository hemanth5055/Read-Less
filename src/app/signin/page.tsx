import React from "react";

const Page = () => {
  return (
    <div className="w-full h-[90vh] p-6 flex flex-col text-center">
      <div className="w-full flex tracking-tight flex-col items-start">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 ">
          Wanna summarize PDFs?
        </h2>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 ">
          Sign in to get started!
        </h2>
      </div>

      <div className="w-full flex my-5">
        <button className="px-6 py-2 rounded-full bg-[#ff9f38] text-black dark:text-white cursor-pointer font-medium">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Page;
