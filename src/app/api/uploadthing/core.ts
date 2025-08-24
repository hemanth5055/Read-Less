import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({
    pdf: {
      maxFileCount: 1,
      maxFileSize: "8MB",
    },
  }).onUploadComplete(async ({ file }) => {
    console.log("file url", file.ufsUrl);
    return { file: file.ufsUrl, fileKey: file.key };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
