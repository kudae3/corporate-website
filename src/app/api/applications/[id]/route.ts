import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import Application from "@/models/application.model";
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
        "Application ID is required",
        "Application ID is missing",
        400
      );

    // check if application exists
    const application = await Application.findById(id);
    if (!application) {
      return errorResponse(
        "Application not found",
        "No application found with the provided ID",
        404
      );
    }

    // soft delete the application
    const result = await Application.findByIdAndUpdate(id, {
      deletedAt: new Date(),
    });
    console.log("Soft Delete Result:", result);

    return successResponse(
      "Application deleted successfully from backend",
      null,
      200
    );
  } catch (error) {
    return errorResponse("Failed to delete application", error, 500);
  }
};
