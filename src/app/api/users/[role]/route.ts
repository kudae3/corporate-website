import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";
import User from "@/models/user.model";
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ role: string }> }
) => {
  try {
    const { role } = await params;
    console.log(`Fetching users with role: ${role}`);
    const mongoUsers = await User.find({ role });

    // users response by clerks
    const client = await clerkClient();
    const clerkUsers = (await client.users.getUserList()).data;

    const mergedUsers = mongoUsers.map((user) => {
      const clerkProfile = clerkUsers.find(
        (clerk) => clerk.id === user.clerkId
      );
      return {
        ...user.toObject(),
        clerkProfile,
      };
    });

    return successResponse("Users filtered successfully", mergedUsers, 200);
  } catch (error) {
    return errorResponse("Failed to fetch users", error, 500);
  }
};
