"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SummaryWrapper from "./SummaryWrapper";
import { LoaderCircleIcon } from "lucide-react";

interface NoteWrapperProps {
  userId: string;
}

const NoteWrapper = ({ userId }: NoteWrapperProps) => {
  const [summaries, setSummaries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setError("Failed to fetch summaries");
      setLoading(false);
      return;
    }

    const fetchSummaries = async () => {
      try {
        const res = await axios.post("/api/get-summaries", { id: userId });
        setSummaries(res.data.summaries || []);
      } catch (err) {
        setError("Failed to fetch summaries");
      } finally {
        setLoading(false);
      }
    };

    fetchSummaries();
  }, [userId]);

  if (loading)
    return (
      <LoaderCircleIcon className="w-6 h-6 animate-spin text-black dark:text-white" />
    );
  if (error) return <h2>{error}</h2>;

  return <SummaryWrapper summaries={summaries} />;
};

export default NoteWrapper;
