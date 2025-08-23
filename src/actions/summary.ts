import { prisma } from "@/prisma";

export async function getSummaryData(id: string) {
  const result = await prisma.summary.findUnique({
    where: { id },
  });
  return result;
}

export async function getSummariesById(userId: string) {
  const result = await prisma.summary.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
}
