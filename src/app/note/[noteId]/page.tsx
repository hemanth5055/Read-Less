import { getSummaryData } from "@/actions/summary";
import Summary from "@/Components/Summary";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ noteId: string }> }) => {
  const { noteId } = await params;

  const summary = await getSummaryData(noteId);
  if (!summary) return notFound();

  console.log(summary);

  return (
    <div>
      <Summary data={summary} />
    </div>
  );
};

export default Page;
