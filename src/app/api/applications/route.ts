import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import Application from "@/models/application.model";
import { ApplicationSchema } from "@/schemas/ApplicationSchema";
import { NextRequest, NextResponse } from "next/server";
import "@/models/career.model.ts";
import "@/models/user.model.ts";
import User from "@/models/user.model";
import Career from "@/models/career.model";

export const GET = async () => {
  try {
    await dbConnect();
    const applications = await Application.find({ deletedAt: null }).populate(
      "userId careerId"
    );

    // Rename userId to user and careerId to career
    const formattedApplications = applications.map((app) => {
      const appObj = app.toObject();
      appObj.user = appObj.userId;
      delete appObj.userId;
      appObj.career = appObj.careerId;
      delete appObj.careerId;
      return appObj;
    });

    return successResponse(
      "Sucessfully fetched applations",
      formattedApplications,
      200
    );
  } catch (error) {
    return errorResponse("Error fetching applications", error, 500);
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await dbConnect();
    const body = await request.json();

    // Validation with Zod
    const parsed = ApplicationSchema.safeParse(body);
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

    // check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return errorResponse("User not found", null, 404);
    }
    // check if the career exists
    const career = await Career.findById(careerId);
    if (!career) {
      return errorResponse("Career not found", null, 404);
    }
    // check if the user has already applied for the career
    const existingApplication = await Application.findOne({
      userId,
      careerId,
      deletedAt: null, // Ensure we only check active applications
    });
    if (existingApplication) {
      return errorResponse("You have already applied for this job", null, 400);
    }

    // store at database
    const newApplication = new Application({ ...parsed.data, deletedAt: null });
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
