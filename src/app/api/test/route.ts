import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({
      status: "success",
      message: "Database connected!",
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: (error as Error).message },
      { status: 500 }
    );
  }
}
