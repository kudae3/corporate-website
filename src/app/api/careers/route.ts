import careerSchema from "@/app/schemas/CareerSchema";
import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/errorResponse";
import successResponse from "@/lib/successResponse";
import Career from "@/models/career.model";
import User from "@/models/user.model";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const careers = await Career.find();
    return successResponse("careers fetched successfully", careers, 200);
  } catch (error) {
    return errorResponse("Failed to fetch careers", error, 500);
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await dbConnect();
    const body = await request.json();

    // validation with zod
    const parsed = careerSchema.safeParse(body);
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

    // get auth user from Clerk
    const { userId } = getAuth(request);

    // find user by Clerk's userId
    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized: User not found",
        },
        { status: 401 }
      );
    }

    const authUser = await User.findOne({ clerkId: userId });
    if (!authUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized: User not found in database",
        },
        { status: 401 }
      );
    }

    const newCareer = new Career({ ...parsed.data, postedBy: authUser._id });
    await newCareer.save();
    return successResponse("Career created successfully", newCareer, 201);
  } catch (error) {
    return errorResponse("Failed to create career", error, 500);
  }
};
