import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import User from "@/models/user.model";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();
    return successResponse("Users fetched successfully", users, 200);
  } catch (error) {
    return errorResponse("Failed to fetch users", error, 500);
  }
}
