"use client";
import React, { useState } from "react";
import Note from "./Note";

const SummaryWrapper = ({ summaries }: { summaries: any }) => {
  const [notes, setNotes] = useState(summaries);
  return (
    <div className="w-full flex flex-wrap justify-center  gap-3">
      {notes.map((item: { id: any }) => (
        <Note data={item} key={item.id} setNotes={setNotes}></Note>
      ))}
    </div>
  );
};

export default SummaryWrapper;
