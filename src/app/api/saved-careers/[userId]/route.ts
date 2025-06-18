import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import Career from "@/models/career.model";
import SavedJobs from "@/models/savedJobs.model";
import { NextRequest } from "next/server";
Career;
export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) => {
  try {
    const { userId } = await params;

    if (!userId) {
      return errorResponse("User ID is required", null, 400);
    }
    const savedCareers = await SavedJobs.find({ userId }).populate("careerId");

    return successResponse(
      "Saved careers fetched successfully",
      savedCareers,
      200
    );
  } catch (error) {
    console.log("Error fetching saved careers:", error);
    return errorResponse("Failed to fetch saved careers", null, 500);
  }
};
