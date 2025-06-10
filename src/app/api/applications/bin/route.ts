import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import Application from "@/models/application.model";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const applications = await Application.find({
      deletedAt: { $ne: null },
    }).populate("userId careerId");

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
      "Sucessfully fetched deleted applations",
      formattedApplications,
      200
    );
  } catch (error) {
    return errorResponse("Error fetching deleted applications", error, 500);
  }
};

export const PATCH = async (request: NextRequest) => {
  try {
    await dbConnect();
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return errorResponse(
        "Invalid request",
        "Application ID is required",
        400
      );
    }

    // Check if application exists
    const application = await Application.findById(id);
    if (!application) {
      return errorResponse(
        "Application not found",
        "No application found with the provided ID",
        404
      );
    }

    // Check if application is already restored
    if (application.deletedAt == null) {
      return errorResponse(
        "Application not in bin",
        "Application is not deleted and cannot be restored",
        400
      );
    }

    await Application.findByIdAndUpdate(id, { deletedAt: null }, { new: true });
    return successResponse("Application restored successfully", null, 200);
  } catch (error) {
    return errorResponse("Failed to update application", error, 500);
  }
};
