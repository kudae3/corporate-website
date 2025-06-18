import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import Career from "@/models/career.model";
import SavedJobs from "@/models/savedJobs.model";
import User from "@/models/user.model";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ userId: string; careerId: string }> }
) => {
  try {
    await dbConnect();

    const { userId, careerId } = await params;
    if (!userId || !careerId) {
      return errorResponse(
        "User ID and Career ID are required",
        "User ID or Career ID is missing",
        400
      );
    }
    console.log(
      "Checking save status for user:",
      userId,
      "and career:",
      careerId
    );

    const existUser = await User.findById(userId);
    if (!existUser) {
      return errorResponse("User not found", null, 404);
    }
    const existCareer = await Career.findById(careerId);
    if (!existCareer) {
      return errorResponse("Career not found", null, 404);
    }
    console.log(
      "User and Career exist, proceeding to check save status...",
      userId,
      careerId
    );
    // Check if the career is already saved by the user
    const alreadySaved = await SavedJobs.findOne({
      userId,
      careerId,
    });
    console.log("Already saved status:", alreadySaved);

    if (alreadySaved) {
      return successResponse("already saved", { saved: true }, 200);
    } else {
      return successResponse(
        "Haven't saved this career",
        { saved: false },
        200
      );
    }
  } catch (error) {
    return errorResponse(
      "An error occurred while checking save status",
      error,
      500
    );
  }
};
