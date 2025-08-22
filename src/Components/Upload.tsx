"use client";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import React, { useState } from "react";
import LoadingOverlay from "./Loading";
import { useRouter } from "next/navigation";

const Upload = () => {
  // const { url } = useContext(UrlContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handlePostUpload = async (url: string) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/make-summary", { url });
      console.log(response.data);
      if (response.data && response.data.success) {
        router.push(`/note/${response.data.noteId}`);
      } else {
        console.error("Summary creation failed:", response.data.message);
      }
    } catch {
      console.log("error while summarizing");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      {loading ? <LoadingOverlay></LoadingOverlay> : ""}
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
          // console.log(res[0].ufsUrl);
          // alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default Upload;
