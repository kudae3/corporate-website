import careers from "@/app/careers/[type]/components/careers";
import dbConnect from "@/database/dbConnect";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import Career from "@/models/career.model";
import careerSchema from "@/schemas/CareerSchema";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "";
    const search = searchParams.get("search") || "";

    if (!type && !search) {
      const careers = await Career.find();
      return successResponse("careers fetched successfully", careers, 200);
    }

    // Both type and search: filter by both
    if (type && search) {
      const careers = await Career.find({
        type,
        $or: [
          { title: { $regex: search, $options: "i" } },
          { location: { $regex: search, $options: "i" } },
        ],
      });
      return successResponse(
        `Careers matching type "${type}" and search "${search}" fetched successfully`,
        careers,
        200
      );
    }

    // Only type
    if (type) {
      const careers = await Career.find({ type });
      return successResponse(
        `${type} careers fetched successfully`,
        careers,
        200
      );
    }

    // Only search
    if (search) {
      const careers = await Career.find({
        $or: [
          { title: { $regex: search, $options: "i" } },
          { location: { $regex: search, $options: "i" } },
        ],
      });
      return successResponse(
        `Careers matching "${search}" fetched successfully`,
        careers,
        200
      );
    }
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

    const newCareer = new Career({ ...parsed.data });
    await newCareer.save();
    return successResponse("Career created successfully", newCareer, 201);
  } catch (error) {
    return errorResponse("Failed to create career", error, 500);
  }
};

export const PATCH = async (request: NextRequest) => {
  try {
    await dbConnect();
    const body = await request.json();

    const { id } = body;
    if (!id)
      return errorResponse(
        "Career ID is required",
        "Career ID is missing",
        400
      );

    // check if career exists
    const career = await Career.findById(id);
    if (!career) {
      return errorResponse(
        "Career not found",
        "No career found with the provided ID",
        404
      );
    }

    const updateCareer = await Career.findByIdAndUpdate(id, body, {
      new: true,
    });
    return successResponse("Career updated successfully", updateCareer, 201);
  } catch (error) {
    return errorResponse("Failed to update career", error, 500);
  }
};
