import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import Application from "@/models/application.model";

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
