"use client";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircleIcon, UploadIcon } from "lucide-react";
import LoadingOverlay from "./Loading";
import toast from "react-hot-toast";

const Upload = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePostUpload = async (url: string) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/make-summary", { url });
      if (response.data && response.data.success) {
        router.push(`/note/${response.data.noteId}`);
        toast.success("Summarized Successfully");
      } else {
        toast.error("error while summarizing");
        // console.error("Summary creation failed:", response.data.message);
      }
    } catch {
      toast.error("error while summarizing");
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
            return null;
          },
          allowedContent: () => null,
        }}
        onClientUploadComplete={(res) => {
          handlePostUpload(res[0].ufsUrl);
        }}
        onUploadError={(_error: Error) => {
          toast.error(`Unable to upload file`);
        }}
      />
    </div>
  );
};

export default Upload;
