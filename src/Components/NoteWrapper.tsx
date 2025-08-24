import React from "react";
import { getSummariesById } from "@/actions/summary";
import SummaryWrapper from "./SummaryWrapper";

interface NoteWrapperProps {
  userId: string;
}

const NoteWrapper = async ({ userId }: NoteWrapperProps) => {
  if (!userId) return <h2>Failed to fetch summaries</h2>;
  const summaries = await getSummariesById(userId);
  return <SummaryWrapper summaries={summaries} />;
};

export default NoteWrapper;
