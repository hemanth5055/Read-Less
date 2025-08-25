// app/api/get-summaries/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getSummariesById } from "@/actions/summary";

export async function POST(req: NextRequest) {
  try {
    // get userId from body
    const { id } = await req.json();
    console.log(id)
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing user ID" },
        { status: 400 }
      );
    }

    // fetch summaries
    const summaries = await getSummariesById(id);
    console.log(summaries)

    return NextResponse.json({
      success: true,
      summaries,
    });
  } catch (err) {
    console.error("Error in get-summaries:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
