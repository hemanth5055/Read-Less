import React from "react";
import Note from "@/Components/Note";
import { getSummariesById } from "@/actions/summary";
import SummaryWrapper from "./SummaryWrapper";
type NoteWrapperProps = Promise<{
  userId: string;
}>;
const NoteWrapper = async (props: NoteWrapperProps) => {
  const { userId } = await props;
  if (!userId) return <h2>Filed to fetch smmaries</h2>;
  const summaries = await getSummariesById(userId);
  return <SummaryWrapper summaries={summaries}></SummaryWrapper>;
};

export default NoteWrapper;
