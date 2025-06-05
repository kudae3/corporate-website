import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import User from "@/models/user.model";
import { userSchema } from "@/schemas/UserSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();
    return successResponse("Users fetched successfully", users, 200);
  } catch (error) {
    return errorResponse("Failed to fetch users", error, 500);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();

    // validation with zod
    const parsed = userSchema.safeParse(body);
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

    const { clerkId, username, email, role } = parsed.data;

    const user = await User.find({ clerkId });
    if (!user) {
      return errorResponse(
        "User not found",
        "No user found with the provided Clerk ID",
        404
      );
    }

    const updatedUser = await User.findOneAndUpdate(
      { clerkId },
      { username, email, role },
      { new: true }
    );

    if (!updatedUser) {
      return errorResponse("Failed to update user", "User not found", 404);
    }
    return successResponse("User updated successfully", updatedUser, 200);
  } catch (error) {
    return errorResponse("Failed to update user", error, 500);
  }
}
