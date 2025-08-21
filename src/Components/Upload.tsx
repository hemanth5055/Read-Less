"use client";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import React from "react";

const Upload = () => {
  // const { url } = useContext(UrlContext);
  const handlePostUpload = async (url: string) => {
    const response = await axios.post("/api/make-summary", { url });
    console.log(response);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <UploadButton
        endpoint="pdfUploader"
        className="upload"
        content={{
          button({ ready, isUploading }) {
            if (isUploading) return "Uploading..."; // 👈 replaces round + %
            if (ready) return "Upload";
            return "Loading...";
          },
          allowedContent: () => "", // hide "No file chosen"
        }}
        onClientUploadComplete={(res) => {
          handlePostUpload(res[0].ufsUrl);
          console.log(res[0].ufsUrl);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default Upload;
