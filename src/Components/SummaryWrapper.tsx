"use client";
import React, { useState } from "react";
import Note from "./Note";
import { FileText } from "lucide-react";

const SummaryWrapper = ({ summaries }: { summaries: any }) => {
  const [notes, setNotes] = useState(summaries);
  return (
    <div className="w-full flex flex-wrap justify-center  gap-3">
      {notes.length === 0 ? (
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-lg font-medium">
          <FileText className="w-5 h-5 text-gray-500 dark:text-gray-400 " />
          <span>No summaries yet. Upload a PDF to get started.</span>
        </div>
      ) : null}
      {notes.map((item: Note) => (
        <Note data={item} key={item.id} setNotes={setNotes}></Note>
      ))}
    </div>
  );
};

export default SummaryWrapper;
