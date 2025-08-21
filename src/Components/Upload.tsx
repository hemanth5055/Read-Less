"use client";
import { UrlContext } from "@/context/Urlcontext";
import { UploadButton } from "@/utils/uploadthing";
import React, { useContext } from "react";

const Upload = () => {
  const { url } = useContext(UrlContext);

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
          console.log("Files: ", res);
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
