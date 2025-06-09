import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import Application from "@/models/application.model";
import { ApplicationSchema } from "@/schemas/ApplicationSchema";
import { NextRequest, NextResponse } from "next/server";
import "@/models/career.model.ts";
import "@/models/user.model.ts";

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
