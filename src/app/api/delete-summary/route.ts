import { deleteSummaryById } from "@/actions/summary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    // console.log(id)
    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID not provided" },
        { status: 400 }
      );
    }

    const result = await deleteSummaryById(id);

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Deletion failed" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
