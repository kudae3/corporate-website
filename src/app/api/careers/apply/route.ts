import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import UserCareer from "@/models/user_career.model";
import { UserCareerSchema } from "@/schemas/UserCareerSchema";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    await dbConnect();
    const body = await request.json();

    // Validation with Zod
    const parsed = UserCareerSchema.safeParse(body);
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

    // store at database
    const newApplication = new UserCareer(parsed.data);
    await newApplication.populate("userId careerId");
    await newApplication.save();

    // Convert to plain object and rename keys
    const appObj = newApplication.toObject();
    appObj.user = appObj.userId;
    delete appObj.userId;
    appObj.career = appObj.careerId;
    delete appObj.careerId;

    return successResponse("Successfully applied for the job", appObj, 200);
  } catch (error) {
    return errorResponse(
      "An error occurred while processing your request.",
      error,
      500
    );
  }
};
