import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import Career from "@/models/career.model";
import SavedJobs from "@/models/savedJobs.model";
import User from "@/models/user.model";
import SavedJobSchema from "@/schemas/SavedJobSchema";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    await dbConnect();
    const body = await request.json();

    // validte the request body with zod
    const parsed = SavedJobSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: parsed.error.errors,
        },
        { status: 400 }
      );
    }

    const { userId, careerId } = parsed.data;
    const existUser = await User.findById(userId);
    if (!existUser) {
      return errorResponse("User not found", null, 404);
    }
    const existCareer = await Career.findById(careerId);
    if (!existCareer) {
      return errorResponse("Career not found", null, 404);
    }

    // Check if the career is already saved by the user
    const alreadySaved = await SavedJobs.findOne({
      userId,
      careerId,
    });

    if (alreadySaved) {
      // remove from saved list
      const unsavedCareer = await SavedJobs.deleteOne({
        userId,
        careerId,
      });
      return successResponse(
        "The career is successfully removed from saved list",
        { saved: false, ...unsavedCareer },
        200
      );
    } else {
      // add to saved list
      const savedCareer = await SavedJobs.create({ userId, careerId });
      return successResponse(
        "The career is successfully saved",
        { saved: true, ...savedCareer.toObject() },
        201
      );
    }
  } catch (error) {
    return errorResponse(
      "An error occurred while saving the career.",
      error,
      500
    );
  }
};
