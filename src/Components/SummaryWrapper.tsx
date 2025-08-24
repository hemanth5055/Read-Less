"use client";
import React, { useState } from "react";
import Note from "./Note";

const SummaryWrapper = ({ summaries }: { summaries: any }) => {
  const [notes, setNotes] = useState(summaries);
  return (
    <div className="w-full flex flex-wrap justify-center  gap-3">
      {notes.length == 0 ? (
        <h1 className="text-red-400 text-[18px] ">
          Go Ahead and summarize a pdf
        </h1>
      ) : (
        ""
      )}
      {notes.map((item: Note) => (
        <Note data={item} key={item.id} setNotes={setNotes}></Note>
      ))}
    </div>
  );
};

export default SummaryWrapper;
