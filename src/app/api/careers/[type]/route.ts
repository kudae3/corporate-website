import errorResponse from "@/lib/errorResponse";
import successResponse from "@/lib/successResponse";
import Career from "@/models/career.model";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ type: string }>;
  }
) => {
  try {
    const { type } = await params;

    const careers = await Career.find({ type });

    return successResponse("Career fetched successfully", careers, 200);
  } catch (error) {
    return errorResponse("Failed to fetch career", error, 500);
  }
};
