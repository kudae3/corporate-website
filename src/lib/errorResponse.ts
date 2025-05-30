import { NextResponse } from "next/server";

const errorResponse = (message: string, e?: unknown, status?: number) => {
  return NextResponse.json(
    {
      success: false,
      message,
      error: e instanceof Error ? e.message : "Unknown error",
    },
    { status }
  );
};

export default errorResponse;
