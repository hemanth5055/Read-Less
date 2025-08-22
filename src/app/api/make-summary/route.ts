import axios from "axios";
import { NextResponse } from "next/server";
import { generateSummary } from "./ai";
import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized", success: false },
        { status: 401 }
      );
    }
    // Parse request
    const { url } = await req.json();
    if (!url) {
      return NextResponse.json(
        { message: "No URL provided", success: false },
        { status: 400 }
      );
    }
    // Fetch user from DB
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
    if (!user) {
      return NextResponse.json(
        { message: "User not found", success: false },
        { status: 404 }
      );
    }

    //  Check credits
    if (user.credits <= 0) {
      return NextResponse.json(
        { message: "Not enough credits", success: false },
        { status: 402 }
      );
    }

    //  Extract text from backend
    const backend = process.env.TEXT_EXTRACT;
    if (!backend) {
      return NextResponse.json(
        { message: "No backend URL found", success: false },
        { status: 500 }
      );
    }

    const { data } = await axios.post(backend, { url });
    if (!data || !data.success) {
      return NextResponse.json(
        { message: "Failed to extract text", success: false },
        { status: 500 }
      );
    }

    const textFromPdf = data.text;

    // Summarize with Gemini
    const aiSummary = await generateSummary(textFromPdf);

    // Save summary + decrement credits
    const result = await prisma.$transaction(async (tx) => {
      const updatedUser = await tx.user.update({
        where: { clerkId: userId },
        data: { credits: { decrement: 1 } },
      });

      const summary = await tx.summary.create({
        data: {
          name: aiSummary.name,
          shortDesc: aiSummary.description,
          content: aiSummary.content,
          url,
          userId: updatedUser.id,
        },
      });

      return summary;
    });

    return NextResponse.json({
      message: "Summarized successfully",
      success: true,
      noteId: result.id,
    });
  } catch (err: any) {
    console.error("POST /api error:", err.message);
    return NextResponse.json(
      { message: "Server error", success: false },
      { status: 500 }
    );
  }
}
