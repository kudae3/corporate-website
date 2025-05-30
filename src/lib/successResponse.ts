import { NextResponse } from "next/server";

const successResponse = (message: string, data: unknown, status: number) => {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status }
  );
};
export default successResponse;
