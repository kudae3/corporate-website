import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import Career from "@/models/career.model";
import { NextRequest } from "next/server";

export const DELETE = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    await dbConnect();
    const { id } = await params;

    if (!id)
      return errorResponse(
        "Career ID is required",
        "Career ID is missing",
        400
      );

    // check if career exists
    const career = await Career.findById(id);
    if (!career) {
      return errorResponse(
        "Career not found",
        "No career found with the provided ID",
        404
      );
    }
    await Career.findByIdAndDelete(id);
    return successResponse("Career deleted successfully", null, 200);
  } catch (error) {
    return errorResponse("Failed to delete career", error, 500);
  }
};
