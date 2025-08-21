import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) {
      return NextResponse.json({ message: "No URL injected", success: false });
    }
    const backend = process.env.TEXT_EXTRACT;
    if (!backend) {
      return NextResponse.json({
        message: "No Backend url found",
        success: false,
      });
    }
    // Call backend to extract text
    const { data } = await axios.post(backend, { url });
    if (!data || !data.success) {
      return NextResponse.json({
        message: "Failed to extract text",
        success: false,
      });
    }
    const textFromPdf = data.text;

    //summarize
    //save to db
    return NextResponse.json({
      message: "Note created",
      success: true,
      noteId: `/notes/12345`,
    });
  } catch (err: any) {
    console.error("POST /api error:", err.message);
    return NextResponse.json({ message: "Server error", success: false });
  }
}
