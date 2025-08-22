import { getSummaryData } from "@/actions/summary";
import Summary from "@/Components/Summary";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    noteId: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { noteId } = await params;
  const summary = await getSummaryData(noteId);
  if (!summary) return notFound();
  console.log(summary);
  return (
    <div>
      <Summary data={summary}></Summary>
    </div>
  );
};

export default page;
