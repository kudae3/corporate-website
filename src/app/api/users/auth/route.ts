import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import User from "@/models/user.model";
import { NextRequest } from "next/server";

// Getting User By Email
export const POST = async (request: NextRequest) => {
  try {
    await dbConnect();
    const { email } = await request.json();
    if (!email) {
      return errorResponse("Email is Required", null, 400);
    }
    let user = await User.find({ email });
    if (!user) {
      return errorResponse("User Not Found", null, 404);
    }
    return successResponse("Successfully Fetched the User", user, 200);
  } catch (error) {
    return errorResponse("Something Went Wrong!", error, 500);
  }
};
