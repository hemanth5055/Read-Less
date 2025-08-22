import { prisma } from "@/prisma";

export async function getSummaryData(id: string) {
  const result = await prisma.summary.findUnique({
    where: { id },
  });
  return result;
}
