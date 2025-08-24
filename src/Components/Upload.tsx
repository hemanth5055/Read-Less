"use client";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircleIcon, UploadIcon } from "lucide-react";
import LoadingOverlay from "./Loading";

const Upload = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePostUpload = async (url: string) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/make-summary", { url });
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
      {loading && <LoadingOverlay></LoadingOverlay>}

      <UploadButton
        endpoint="pdfUploader"
        className="upload"
        content={{
          button({ ready, isUploading }) {
            if (isUploading) {
              return (
                <LoaderCircleIcon className="w-5 h-5 animate-spin text-white" />
              );
            }
            if (ready)
              return (
                <div className="flex items-center gap-2">
                  <UploadIcon size={15} />
                  Upload
                </div>
              );
            return null; // nothing instead of "loading..."
          },
          allowedContent: () => null, // hides "No file chosen"
        }}
        onClientUploadComplete={(res) => {
          handlePostUpload(res[0].ufsUrl);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default Upload;
