import React from "react";
import Note from "@/Components/Note";
import { getSummariesById } from "@/actions/summary";
type NoteWrapperProps = Promise<{
  userId: string;
}>;
const NoteWrapper = async (props: NoteWrapperProps) => {
  const { userId } = await props;
  if (!userId) return <h2>Filed to fetch smmaries</h2>;
  const summaries = await getSummariesById(userId);
  // console.log(summaries);
  return (
    <div className="w-full flex flex-wrap justify-center  gap-3">
      {summaries.map((item) => (
        <Note data={item} key={item.id}></Note>
        
      ))}
    </div>
  );
};

export default NoteWrapper;
