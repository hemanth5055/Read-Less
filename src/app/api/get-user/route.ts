import { NextRequest, NextResponse } from "next/server";
import { getUserByClerkId } from "@/actions/user";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Missing user ID" },
        { status: 400 }
      );
    }

    const result = await getUserByClerkId(id);

    if (!result?.user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ user: result.user }, { status: 200 });
  } catch (err: any) {
    console.error("API /user error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
